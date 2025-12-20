// outputNode.js
import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  updateNodeField: state.updateNodeField,
});

export const OutputNode = ({ id, data }) => {
  const { updateNodeField } = useStore(selector, shallow);
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  useEffect(() => {
    if (!data.outputName) updateNodeField(id, 'outputName', currName);
    if (!data.outputType) updateNodeField(id, 'outputType', outputType);
  }, [data.outputName, data.outputType, id, updateNodeField, currName, outputType]);

  const onNameChange = (e) => {
    setCurrName(e.target.value);
    updateNodeField(id, 'outputName', e.target.value);
  };

  const onTypeChange = (e) => {
    setOutputType(e.target.value);
    updateNodeField(id, 'outputType', e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: 'value' }
  ];

  return (
    <BaseNode title="Output" handles={handles}>
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
        <select value={outputType} onChange={onTypeChange}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
