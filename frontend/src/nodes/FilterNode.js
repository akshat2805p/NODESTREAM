import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    updateNodeField: state.updateNodeField,
});

export const FilterNode = ({ id, data }) => {
    const { updateNodeField } = useStore(selector, shallow);
    const [filterText, setFilterText] = useState(data.filterText || '');

    useEffect(() => {
        if (!data.filterText) updateNodeField(id, 'filterText', filterText);
    }, [data.filterText, id, updateNodeField, filterText]);

    const handleChange = (e) => {
        setFilterText(e.target.value);
        updateNodeField(id, 'filterText', e.target.value);
    };

    const handles = [
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'filtered' }
    ];

    return (
        <BaseNode title="Filter" handles={handles}>
            <label>Criteria:
                <input
                    type="text"
                    placeholder="regex..."
                    style={{ width: '100%' }}
                    value={filterText}
                    onChange={handleChange}
                />
            </label>
        </BaseNode>
    );
}
