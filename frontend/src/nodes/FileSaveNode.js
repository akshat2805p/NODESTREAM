import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FileSaveNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'data' }
    ];

    return (
        <BaseNode title="File Save" handles={handles}>
            <div>
                <span>Save Data to File</span>
            </div>
        </BaseNode>
    );
}
