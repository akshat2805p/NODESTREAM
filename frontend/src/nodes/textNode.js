// textNode.js
import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  updateNodeField: state.updateNodeField,
});

export const TextNode = ({ id, data }) => {
  const { updateNodeField } = useStore(selector, shallow);
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!data.text) updateNodeField(id, 'text', currText);
  }, [data.text, id, updateNodeField, currText]);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Variable parsing logic
  useEffect(() => {
    const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const vars = Array.from(new Set(matches.map(m => m[1])));

    const newHandles = vars.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(i + 1) * 50}px` }
    }));

    newHandles.push({ type: 'source', position: Position.Right, id: 'output' });

    setHandles(newHandles);
  }, [currText]);

  const onTextChange = (e) => {
    setCurrText(e.target.value);
    updateNodeField(id, 'text', e.target.value);
  };

  return (
    <div ref={containerRef}>
      <BaseNode title="Text" handles={handles} style={{ height: 'auto' }}>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={onTextChange}
            className="nodrag"
            style={{
              width: '100%',
              minHeight: '30px',
              resize: 'none',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          />
        </label>
      </BaseNode>
    </div>
  );
}
