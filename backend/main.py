from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    
    # Check if DAG (Directed Acyclic Graph)
    # A DAG is essential for data pipelines to ensure that computation flows in one direction 
    # and to prevent infinite loops where data circles back to a previous node.
    
    # Build adjacency list
    adj = {node['id']: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        source = edge['source']
        target = edge['target']
        if source in adj:
            adj[source].append(target)
    
    visited = set()
    stack = set()
    
    def has_cycle(node):
        visited.add(node)
        stack.add(node)
        
        for neighbor in adj.get(node, []):
            if neighbor not in visited:
                if has_cycle(neighbor):
                    return True
            elif neighbor in stack:
                # If we see a node that is currently in the recursion stack, we found a cycle.
                return True
        
        stack.remove(node)
        return False
    
    is_dag = True
    for node_id in adj:
        if node_id not in visited:
            if has_cycle(node_id):
                is_dag = False
                break
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
