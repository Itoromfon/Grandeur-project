import React from 'react';
import { getBezierPath } from 'reactflow';
import styles from './InkEdge.module.css'

const InkEdge = ({ id, sourceX, sourceY, targetX, targetY, style, markerEnd }) => {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <g>
      <path
        id={id}
        className={styles.inkedge} // Apply the ink animation class
        d={path}
        style={style}
        markerEnd={markerEnd}
      />
    </g>
  );
};

export default InkEdge;
