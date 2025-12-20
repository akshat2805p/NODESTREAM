// BaseNode.js
import { Handle } from 'reactflow';

export const BaseNode = ({ title, children, handles = [], style }) => {
    return (
        <div className="node-container node-pop-in" style={style}>
            <div className="node-header">
                <span>{title}</span>
            </div>
            <div className="node-content">
                {children}
            </div>
            {handles.map((handle, index) => (
                <Handle
                    key={index}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                    style={handle.style}
                    className={handle.className}
                />
            ))}
        </div>
    );
};
