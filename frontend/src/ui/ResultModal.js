// ResultModal.js
import React from 'react';

export const ResultModal = ({ isOpen, onClose, results }) => {
    if (!isOpen) return null;

    const { num_nodes, num_edges, is_dag } = results;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Pipeline Parse Results</h2>

                <div className="modal-stats">
                    <div className="modal-stat-item">
                        <span className="stat-value">{num_nodes}</span>
                        <span className="stat-label">Nodes</span>
                    </div>
                    <div className="modal-stat-item">
                        <span className="stat-value">{num_edges}</span>
                        <span className="stat-label">Edges</span>
                    </div>
                </div>

                <div className={`modal-status ${is_dag ? 'status-success' : 'status-error'}`}>
                    {is_dag ? (
                        <span>✨ Pipeline is valid (DAG)</span>
                    ) : (
                        <span>⚠️ Cycle Detected - Invalid Pipeline</span>
                    )}
                </div>

                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};
