// inputNode.js
import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  updateNodeField: state.updateNodeField,
});

export const InputNode = ({ id, data }) => {
  const { updateNodeField } = useStore(selector, shallow);
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  useEffect(() => {
    // Initialize store with default values if not present
    if (!data.inputName) updateNodeField(id, 'inputName', currName);
    if (!data.inputType) updateNodeField(id, 'inputType', inputType);
  }, [data.inputName, data.inputType, id, updateNodeField, currName, inputType]);


  const onNameChange = (e) => {
    setCurrName(e.target.value);
    updateNodeField(id, 'inputName', e.target.value);
  };

  const onTypeChange = (e) => {
    setInputType(e.target.value);
    updateNodeField(id, 'inputType', e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  return (
    <BaseNode title="Input" handles={handles}>
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={onNameChange}
        />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={onTypeChange}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
