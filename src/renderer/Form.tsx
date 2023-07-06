export default function Form({
  setCurrentWindow,
  setName,
  name,
  age,
  setAge,
  gender,
  setGender,
}) {
  const submitHandler = (event) => {
    event.preventDefault();
    if (name !== '' && age !== '' && gender != '') setCurrentWindow(1);
  };

  return (
    <div className="container">
      <div className="form" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="instruction">
          <div className="instruction-head">Shortcuts</div>
          <div className="instruction-body">
            <div>
              <span className="text">sets the start time</span>
              <span className="keys">,</span>{' '}
            </div>
            <div>
              <span className="text">record & save time</span>
              <span className="keys">.</span>{' '}
            </div>
            <div>
              <span className="text">change color</span>
              <span className="keys"> 1 to 4</span>
            </div>
            <div>
              <span className="text">toggle fullscreen</span>
              <span className="keys">ctrl+F</span>{' '}
            </div>
            <div>
              <span className="text">go to home page</span>
              <span className="keys">ctrl+G</span>{' '}
            </div>
            <div>
              <span className="text">go to history page</span>
              <span className="keys">ctrl+H</span>{' '}
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="form-header">Enter the Details</div>
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
          <button className="form-box button-submit" type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
