// components/Tree.js
import { useClient } from 'next/data-client';
import React, { useState } from 'react';

const TreeNode = ({ label, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className={`tree-node ${expanded ? 'expanded' : 'collapsed'}`} onClick={handleToggle}>
        {label}
      </div>
      {expanded && <div className="tree-children">{children}</div>}
    </div>
  );
};

const Tree = () => {
  useClient(); // Explicitly mark the component as a Client Component
  return (
    <div className="tree-structure">
      <TreeNode label="Folder 1">
        <TreeNode label="File 1.1" />
        <TreeNode label="File 1.2" />
      </TreeNode>
      <TreeNode label="Folder 2">
        <TreeNode label="File 2.1" />
        <TreeNode label="File 2.2" />
      </TreeNode>
    </div>
  );
};

export default Tree;
