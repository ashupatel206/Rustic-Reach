import React, { useState, useEffect } from 'react';

const Table = () => {
//   const [data, setData] = useState([]);

  // DO NOT TOUCH THIS
 /* useEffect(() => {
    fetch('http://localhost:8000/data')  // Update with your FastAPI server endpoint
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the structure of the fetched data
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);*/
  const data = [
    {"id": 1, "name": "File 1", "created_date": "2023-01-01", "path": "/files/file1"},
    {"id": 2, "name": "File 2", "created_date": "2023-01-02", "path": "/files/file2"},
    {"id": 3, "name": "File 3", "created_date": "2023-01-03", "path": "/files/file3"},
]

  return (
    <table className="table-auto w-full max-w-screen-lg mx-auto table-with-gap">
      <thead>
        <tr className='px-2 py-2'>
          <th className="px-2 py-2">
            <input
              type='checkbox'
              className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
            ></input>
          </th>
          <th className="px-2 py-2">Name</th>
          <th className="px-2 py-2">Created Date</th>
          <th className="px-2 py-2">Path</th>
          <th className="px-2 py-2">Rename</th>
          <th className="px-2 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id} className='px-2 py-2'>
            <td className="border px-2 py-2">
              <input
                type='checkbox'
                className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
              ></input>
            </td>
            <td className="border px-2 py-2">{item.name}</td>
            <td className="border px-2 py-2">{item.created_date}</td>
            <td className="border px-2 py-2">{item.path}</td>
            <td className="border px-2 py-2">
              <button type="submit" name="rename">
                Rename
              </button>
            </td>
            <td className="border px-2 py-2">
              <button type="submit" name="delete-file">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
