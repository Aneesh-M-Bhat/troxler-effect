import { useEffect, useState } from 'react';

export default function Circle({
  setStartTime,
  startTime,
  color,
  setColor,
  age,
  gender,
  name,
}) {
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

  const [data, setData] = useState([]);
  const [toast, setToast] = useState(0);

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
    console.log(color, colorInWords);
    const newData = {
      name: name,
      age: age,
      gender: gender,
      time: time + 's',
      color: colorInWords,
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
  });

  return (
    <div className="container">
      <div className="dot"></div>
      {[...new Array(45).keys()].map((i, index) => {
        let reducedI = i / 3;
        return (
          <div
            key={index}
            className="circle"
            style={{
              borderColor: borderColors[Math.floor(reducedI % 15)][color],
              width: 44 + i / 5 + 'vh',
              height: 44 + i / 5 + 'vh',
            }}
          ></div>
        );
      })}
      {toast == 1 && <div className="toast">STARTED</div>}
      {toast == 2 && <div className="toast">STOPPED</div>}
    </div>
  );
}
