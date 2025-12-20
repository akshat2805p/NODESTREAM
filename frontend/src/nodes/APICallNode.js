import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    updateNodeField: state.updateNodeField,
});

export const APICallNode = ({ id, data }) => {
    const { updateNodeField } = useStore(selector, shallow);
    const [url, setUrl] = useState(data.url || '');

    useEffect(() => {
        if (!data.url) updateNodeField(id, 'url', url);
    }, [data.url, id, updateNodeField, url]);

    const handleChange = (e) => {
        setUrl(e.target.value);
        updateNodeField(id, 'url', e.target.value);
    };

    const handles = [
        { type: 'target', position: Position.Left, id: 'params' },
        { type: 'source', position: Position.Right, id: 'response' }
    ];

    return (
        <BaseNode title="API Call" handles={handles}>
            <label>Endpoint:
                <input
                    type="text"
                    placeholder="https://api..."
                    value={url}
                    onChange={handleChange}
                />
            </label>
        </BaseNode>
    );
}
