// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Router, Route } from 'electron-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

function Home() {
  // const [color, setcolor] = useState(0);
  const [startTime, setStartTime]: any = useState(new Date());
  const [data, setData] = useState([]);
  const [name, setName]: any = useState('');
  const [age, setAge]: any = useState(0);
  const [gender, setGender]: any = useState('');
  const [time, setTime] = useState(0);
  const [color, setColor]: any = useState(0);

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

  const borderColors = [
    [
      'rgb(255, 229, 225)',
      'rgb(235, 247, 233)',
      'rgb(255, 246, 225)',
      'rgb(225, 246, 255)',
    ],
    [
      'rgb(255, 211, 205)',
      'rgb(221, 242, 218)',
      'rgb(255, 240, 205)',
      'rgb(205, 240, 255)',
    ],
    [
      'rgb(255, 193, 185)',
      'rgb(208, 237, 203)',
      'rgb(255, 235, 185)',
      'rgb(185, 235, 255)',
    ],
    [
      'rgb(255, 176, 165)',
      'rgb(194, 232, 188)',
      'rgb(255, 229, 165)',
      'rgb(165, 229, 255)',
    ],
    [
      'rgb(255, 158, 145)',
      'rgb(180, 226, 174)',
      'rgb(255, 224, 145)',
      'rgb(145, 224, 255)',
    ],
    [
      'rgb(255, 132, 115)',
      'rgb(153, 216, 144)',
      'rgb(255, 215, 115)',
      'rgb(115, 215, 255)',
    ],
    [
      'rgb(255, 105, 85)',
      'rgb(126, 204, 116)',
      'rgb(255, 206, 85)',
      'rgb(85, 206, 255)',
    ],
    [
      'rgb(255, 79, 55)',
      'rgb(99, 194, 86)',
      'rgb(255, 198, 55)',
      'rgb(55, 198, 255)',
    ],
    [
      'rgb(255, 105, 85)',
      'rgb(126, 204, 116)',
      'rgb(255, 206, 85)',
      'rgb(85, 206, 255)',
    ],
    [
      'rgb(255, 132, 115)',
      'rgb(153, 216, 144)',
      'rgb(255, 215, 115)',
      'rgb(115, 215, 255)',
    ],
    [
      'rgb(255, 158, 145)',
      'rgb(180, 226, 174)',
      'rgb(255, 224, 145)',
      'rgb(145, 224, 255)',
    ],
    [
      'rgb(255, 176, 165)',
      'rgb(194, 232, 188)',
      'rgb(255, 229, 165)',
      'rgb(165, 229, 255)',
    ],
    [
      'rgb(255, 193, 185)',
      'rgb(208, 237, 203)',
      'rgb(255, 235, 185)',
      'rgb(185, 235, 255)',
    ],
    [
      'rgb(255, 211, 205)',
      'rgb(221, 242, 218)',
      'rgb(255, 240, 205)',
      'rgb(205, 240, 255)',
    ],
    [
      'rgb(255, 229, 225)',
      'rgb(235, 247, 233)',
      'rgb(255, 246, 225)',
      'rgb(225, 246, 255)',
    ],
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    let colorInWords;
    switch (color) {
      case 0:
        colorInWords = 'Red';
        break;
      case 1:
        colorInWords = 'Green';
        break;
      case 2:
        colorInWords = 'Yellow';
        break;
      case 3:
        colorInWords = 'Blue';
        break;
    }
    const newData = {
      name: name,
      age: age,
      gender: gender,
      time: time + 's',
      color: colorInWords,
    };
    console.log(newData);
    setData([...data, newData]);
  };

  // listen for keydown event on document
  document.addEventListener('keydown', function (event) {
    // if (event.key === '1') {
    //   setcolor(0);
    // }
    // if (event.key === '2') {
    //   setcolor(1);
    // }
    // if (event.key === '3') {
    //   setcolor(2);
    // }
    // if (event.key === '4') {
    //   setcolor(3);
    // }
    if (event.key === ',') {
      setStartTime(new Date().getTime());
      setTime(0);
    }
    if (event.key === '.') {
      setTime((new Date().getTime() - startTime) / 1000);
    }
  });

  return (
    <div className="container">
      <div className="dot"></div>
      {[...new Array(15).keys()].map((i, index) => (
        <div
          key={index}
          className="circle"
          style={{
            borderColor: borderColors[i % 15][color],
            width: 44 + i / 2 + 'vh',
            height: 44 + i / 2 + 'vh',
          }}
        ></div>
      ))}
      <div className="form">
        <form onSubmit={submitHandler}>
          <select
            className="form-box t"
            onChange={(event) => setColor(event.target.value)}
            value={color}
          >
            <option disabled value="">
              Color
            </option>
            <option value="3">Blue</option>
            <option value="0">Red</option>
            <option value="2">Yellow</option>
            <option value="1">Green</option>
          </select>
          <input
            className="form-box"
            placeholder="Name"
            type="string"
            onChange={(event) => setName(event.target.value)}
            value={name}
          ></input>
          <input
            className="form-box "
            placeholder="Age"
            type="string"
            onChange={(event) => setAge(event.target.value)}
            value={age == 0 ? 'Age' : age}
          />
          <select
            className="form-box t"
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          >
            <option disabled value="">
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            className="form-box"
            placeholder="Time"
            disabled
            value={time + 's'}
          ></input>
          <button className="form-box button-submit" type="submit">
            Save
          </button>
        </form>
      </div>
      <div className="instruction">
        <div className="instruction-head">Usage Instructions</div>
        <div className="instruction-body">
          <div>
            <span>,</span> sets the start time
          </div>
          <div>
            <span>.</span> records the duration
          </div>
        </div>
      </div>
    </div>
  );
}

function History() {
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
    setData(filteredData);
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
          {data.map((item, index) => (
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

export default function App() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </>
      }
    ></Router>
  );
}
