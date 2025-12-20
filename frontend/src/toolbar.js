// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar-container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='fileSave' label='File Save' />
                <DraggableNode type='transformation' label='Transform' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='apiCall' label='API Call' />
            </div>
        </div>
    );
};
