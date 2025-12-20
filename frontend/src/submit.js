import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { ResultModal } from './ui/ResultModal';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [results, setResults] = useState({ num_nodes: 0, num_edges: 0, is_dag: false });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();
            setResults(data);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to submit pipeline. Check backend connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="submit-container">
            <button
                type="submit"
                onClick={handleSubmit}
                className="submit-button"
                disabled={isLoading}
            >
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            <ResultModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                results={results}
            />
        </div>
    );
}
