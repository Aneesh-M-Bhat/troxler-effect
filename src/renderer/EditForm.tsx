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
      };
      const data = rdata
        .map((item, index) => (index == editIndex ? edittedData : item))
        .reverse();
      localStorage.setItem('data', JSON.stringify(data));
      setData(data);
      setIsForm(false);
    }
  };

  const [id, setId] = useState(editData.id);
  const [name, setName] = useState(editData.name);
  const [age, setAge] = useState(editData.name);
  const [gender, setGender] = useState(editData.gender);
  const [startTime, setStartTime] = useState(editData.startTime);
  const [time, setTime] = useState(editData.time);
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
            onChange={(event) => setTime(event.target.value)}
            value={time}
          />
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
