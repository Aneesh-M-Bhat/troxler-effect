import { useEffect, useState } from 'react';
import Circle from './Circle';
import Form from './Form';

export default function Home() {
  const [startTime, setStartTime]: any = useState(new Date());
  const [name, setName]: any = useState('');
  const [age, setAge]: any = useState('');
  const [gender, setGender]: any = useState('');
  const [color, setColor]: any = useState('0');
  const [currentWindow, setCurrentWindow] = useState(0);
  const [id, setId]: any = useState('');

  return currentWindow == 1 ? (
    <Circle
      color={color}
      setStartTime={setStartTime}
      startTime={startTime}
      setColor={setColor}
      age={age}
      gender={gender}
      name={name}
      id={id}
    />
  ) : (
    <Form
      setCurrentWindow={setCurrentWindow}
      id={id}
      setId={setId}
      name={name}
      setName={setName}
      age={age}
      setAge={setAge}
      gender={gender}
      setGender={setGender}
    />
  );
}
