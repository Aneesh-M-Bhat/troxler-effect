import { useState } from 'react';

export default function EditForm({
  setIsForm,
  editData,
  editIndex,
  rdata,
  setData,
}) {
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      name != '' &&
      age != '' &&
      gender != '' &&
      id != '' &&
      startTime != '' &&
      time != '' &&
      stopTime != '' &&
      color != '' &&
      brightness != ''
    ) {
      const edittedData = {
        id: id,
        name: name,
        age: age,
        brightness: brightness,
        startTime: startTime,
        time: time,
        gender: gender,
        color: color,
        stopTime: stopTime,
      };
      const data = rdata
        .map((item, index) => (index == editIndex ? edittedData : item))
        .reverse();
      localStorage.setItem('data', JSON.stringify(data));
      setData(data);
      setIsForm(false);
    }
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const updateStopTime = () => {
    let t = parseInt(time.substr(0, startTime.length - 1));
    let sec = 0,
      min = 0,
      hr = 0;
    sec = (t % 60) + parseInt(startTime.substr(startTime.length - 2, 2));
    if (sec > 60) {
      min += 1;
      sec -= 60;
    }
    t = Math.floor(t / 60);
    min = (t % 60) + parseInt(startTime.substr(startTime.length - 5, 2));
    if (min > 60) {
      hr += 1;
      min -= 60;
    }
    t = Math.floor(t / 60);
    hr = t + parseInt(startTime.substr(startTime.length - 8, 2));

    console.log(hr, min, sec);
    let newStopTime =
      padTo2Digits(hr) + ':' + padTo2Digits(min) + ':' + padTo2Digits(sec);
    setStopTime(stopTime.substr(0, 11) + newStopTime);
  };

  const [id, setId] = useState(editData.id);
  const [name, setName] = useState(editData.name);
  const [age, setAge] = useState(editData.age);
  const [gender, setGender] = useState(editData.gender);
  const [startTime, setStartTime] = useState(editData.startTime);
  const [time, setTime] = useState(editData.time);
  const [stopTime, setStopTime] = useState(editData.stopTime);
  const [color, setColor] = useState(editData.color);
  const [brightness, setBrightness] = useState(editData.brightness);

  return (
    <div className="container">
      <div className="form" style={{ display: 'flex', flexDirection: 'row' }}>
        <form onSubmit={submitHandler}>
          <div className="form-header">Enter the Details</div>
          <input
            className="form-box"
            placeholder="Id"
            type="string"
            onChange={(event) => setId(event.target.value)}
            value={id}
          ></input>
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
            value={age}
          />
          <select
            className="form-box "
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
            className="form-box "
            placeholder="Start Time"
            type="string"
            onChange={(event) => setStartTime(event.target.value)}
            value={startTime}
          />
          <input
            className="form-box "
            placeholder="Time"
            type="string"
            onChange={(event) => {
              setTime(event.target.value);
            }}
            value={time}
          />
          <div>
            <input
              className="form-box disabled-form-box"
              placeholder="Stop Time"
              type="string"
              disabled
              onChange={(event) => {
                setStopTime(event.target.value);
              }}
              value={stopTime}
            />
            <button
              className="form-box button-calculate"
              type="button"
              onClick={() => updateStopTime()}
            >
              Calculate
            </button>
          </div>
          <select
            className="form-box "
            onChange={(event) => setColor(event.target.value)}
            value={color}
          >
            <option disabled value="">
              Color
            </option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
          </select>
          <select
            className="form-box "
            onChange={(event) => setBrightness(event.target.value)}
            value={brightness}
          >
            <option disabled value="">
              Brightness
            </option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
          <button className="form-box button-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
