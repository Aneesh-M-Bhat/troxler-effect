import { useEffect, useState } from 'react';
import { borderColors3 } from './constants';

export default function Circle({
  setStartTime,
  startTime,
  color,
  setColor,
  age,
  gender,
  name,
  id,
}) {
  const [data, setData] = useState([]);
  const [toast, setToast] = useState(0);
  const [opacity, setOpacity] = useState(90);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (toast != 0) {
      const timer = setTimeout(() => {
        setToast(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const addData = (time) => {
    let colorInWords;
    switch (color) {
      case '0':
        colorInWords = 'Red';
        break;
      case '1':
        colorInWords = 'Green';
        break;
      case '2':
        colorInWords = 'Yellow';
        break;
      case '3':
        colorInWords = 'Blue';
        break;
    }
    const newData = {
      id: id,
      name: name,
      age: age,
      gender: gender,
      time: time + 's',
      color: colorInWords,
      brightness: opacity == 90 ? 'High' : 'Low',
    };
    setData([...data, newData]);
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === ',') {
      setStartTime(new Date().getTime());
      setToast(1);
    }
    if (event.key === '.') {
      addData((new Date().getTime() - startTime) / 1000);
      setToast(2);
    }
    if (event.key === '1') {
      setColor('0');
    }
    if (event.key === '2') {
      setColor('1');
    }
    if (event.key === '3') {
      setColor('2');
    }
    if (event.key === '4') {
      setColor('3');
    }
    if (event.key === 'ArrowUp') {
      setOpacity(90);
    }
    if (event.key === 'ArrowDown') {
      setOpacity(20);
    }
  });
  return (
    <div className="container">
      <div className="dot"></div>
      {[...new Array(borderColors3.length).keys()].map((i, index) => {
        let reducedI = i;
        return (
          <div
            key={index}
            className="circle"
            style={{
              borderColor:
                borderColors3[Math.floor(reducedI % borderColors3.length)][
                  color
                ],
              width: 44 + i / 5 + 'vh',
              height: 44 + i / 5 + 'vh',
              opacity: opacity + '%',
            }}
          ></div>
        );
      })}
      {toast == 1 && <div className="toast">STARTED</div>}
      {toast == 2 && <div className="toast">STOPPED</div>}
    </div>
  );
}
