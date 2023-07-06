import { useEffect, useState } from 'react';

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
    console.log(data);
  }, [data]);

  const deleteHandler = (index) => {
    const filteredData = data.filter((_, i) => index !== i);
    setData(filteredData.reverse());
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr className="sticky-header">
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Time</th>
            <th>Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.reverse().map((item, index) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.time}</td>
              <td>{item.color}</td>
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
