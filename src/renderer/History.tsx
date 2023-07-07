import { useEffect, useState } from 'react';
import { ExportData } from './Export';

export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const deleteHandler = (index) => {
    const filteredData = data.filter((_, i) => index !== i);
    setData(filteredData);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr className="sticky-header">
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Time</th>
            <th>Color</th>
            <th>Brightness</th>
            <th>
              <ExportData csvData={data} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.time}</td>
              <td>{item.color}</td>
              <td>{item.brightness}</td>
              <td>
                <button
                  className="button-delete"
                  onClick={() => deleteHandler(index)}
                >
                  Delete Row
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
