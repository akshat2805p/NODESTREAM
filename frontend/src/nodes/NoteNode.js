import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    updateNodeField: state.updateNodeField,
});

export const NoteNode = ({ id, data }) => {
    const { updateNodeField } = useStore(selector, shallow);
    const [text, setText] = useState(data.text || '');

    useEffect(() => {
        if (!data.text) updateNodeField(id, 'text', text);
    }, [data.text, id, updateNodeField, text]);

    const handleChange = (e) => {
        setText(e.target.value);
        updateNodeField(id, 'text', e.target.value);
    };

    // Notes often don't have handles, just visual
    const handles = [];

    return (
        <BaseNode title="Note" handles={handles} style={{ background: '#fef3c7' }}>
            <div className="note-text-container">
                <textarea
                    placeholder="Type your note..."
                    value={text}
                    onChange={handleChange}
                />
            </div>
        </BaseNode>
    );
}
