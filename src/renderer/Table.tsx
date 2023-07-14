import { useEffect, useState } from 'react';
import { ExportData } from './Export';
import EditForm from './EditForm';

export default function Table({ isEdit }) {
  const [data, setData] = useState([]);
  const [rdata, setRData] = useState([]);
  const [isForm, setIsForm] = useState(false);
  const [editData, setEditData] = useState({});
  const [editIndex, setEditIndex] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    setRData([...data].reverse());
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const deleteHandler = (index) => {
    const filteredData = rdata.filter((_, i) => index !== i);
    setData(filteredData.reverse());
  };

  const editHandler = (index) => {
    setEditData(rdata.filter((_, i) => index == i)[0]);
    setEditIndex(index);
    setIsForm(true);
  };

  return (
    <div className="container">
      {isForm ? (
        <EditForm
          editData={editData}
          rdata={rdata}
          setIsForm={setIsForm}
          editIndex={editIndex}
          setData={setData}
        />
      ) : (
        <table>
          <thead>
            <tr className="sticky-header">
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Start Time</th>
              <th>Time</th>
              <th>Stop Time</th>
              <th>Color</th>
              <th>Brightness</th>
              <th>
                <ExportData csvData={rdata} />
              </th>
            </tr>
          </thead>
          <tbody>
            {rdata.map((item, index) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.startTime}</td>
                <td>{item.time}</td>
                <td>{item.stopTime}</td>
                <td>{item.color}</td>
                <td>{item.brightness}</td>
                <td>
                  {isEdit ? (
                    <button
                      className="button-delete"
                      onClick={() => editHandler(index)}
                    >
                      Edit Row
                    </button>
                  ) : (
                    <button
                      className="button-delete"
                      onClick={() => deleteHandler(index)}
                    >
                      Delete Row
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
