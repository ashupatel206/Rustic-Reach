// pages/index.js

'use client'
import React from 'react';
import FileManagerNavbar from './components/navigationbar';
import Table from './components/filetable';

const TreeNode = ({ label, children }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleEdit = () => {
    // Implement your edit logic here
    console.log(`Edit ${label}`);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log(`Delete ${label}`);
  };

  return (
    <div>
      <div className={`tree-node ${expanded ? 'expanded' : 'collapsed'}` } onClick={handleToggle}>
        <span>{label}</span>
        <div className="actions">
          <button onClick={handleEdit} className='edit-button'>Edit</button>
          <button onClick={handleDelete} className='delete-button'>Delete</button>
        </div>
      </div>
      {expanded && <div className="tree-children">{children}</div>}
    </div>
  );
};




const Home = () => {
  return (
    <div>
      <header>
        <FileManagerNavbar />
      </header>
   
      <div className='three-column-layout'>
        
        <div className="column column2">
          <div className='flex'>
            <div>File Manager</div>
            <div>
              <button type="submit" name="New">New File</button>
            </div> 
          </div>
          <div className='workspace'>
            My work space
          </div>
            <div className='tree-structure'>
            <TreeNode label="Folder 1">
            <TreeNode label="File 1.1" />
            <TreeNode label="File 1.2" />
          </TreeNode>
          <TreeNode label="Folder 2">
            <TreeNode label="File 2.1" />
            <TreeNode label="File 2.2" />
          </TreeNode>
            </div>
        </div>
        {/* Column 3 start */}
        <div className="column column3">
          <div className='flex px-10'>
            <div>All Files</div>
            <div ><input type="text" className='border p-2 w-full' placeholder='search file'></input></div>
          </div>
          <hr></hr>
          <Table/>

          {/* <table className="table-auto w-full max-w-screen-lg mx-auto table-with-gap">
  <thead >
    <tr className='px-2 py-2'>
      <th className="px-2 py-2 "><input type='checkbox' className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'></input></th>
      <th className="px-2 py-2">Name</th>
      <th className="px-2 py-2 ">Created Date</th>
      <th className="px-2 py-2 ">Path</th> 
      <th className="px-2 py-2">Rename</th>
      <th className="px-2 py-2 ">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr className='px-2 py-2'>
      <td className="border px-2 py-2 "><input type='checkbox' className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'></input></td>
      <td className="border px-2 py-2 ">name jkkjhkjhghhgkhghghj</td>
      <td className="border px-2 py-2 ">Created Date</td>
      <td className="border px-2 py-2">path content goes here</td>
      <td className="border px-2 py-2 "><button type="submit" name="rename">Rename</button></td>
      <td className="border px-2 py-2 "><button type="submit" name="delete-file">Delete</button></td>
    </tr> */}
    
  {/* </tbody>
</table> */}

        </div>
        {/* Column 3 end */}
      </div>
    </div>
  );
};

export default Home;
