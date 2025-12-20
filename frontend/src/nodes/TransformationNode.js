import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    updateNodeField: state.updateNodeField,
});

export const TransformationNode = ({ id, data }) => {
    const { updateNodeField } = useStore(selector, shallow);
    const [format, setFormat] = useState(data.format || 'JSON');

    useEffect(() => {
        if (!data.format) updateNodeField(id, 'format', format);
    }, [data.format, id, updateNodeField, format]);

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
        updateNodeField(id, 'format', e.target.value);
    };

    const handles = [
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
    ];

    return (
        <BaseNode title="Transform" handles={handles}>
            <div>
                <label>Format:
                    <select value={format} onChange={handleFormatChange}>
                        <option value="JSON">JSON</option>
                        <option value="CSV">CSV</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
