import { useEffect, useState } from 'react';
import Circle from './Circle';
import Form from './Form';

export default function Home() {
  const [name, setName]: any = useState('');
  const [age, setAge]: any = useState('');
  const [gender, setGender]: any = useState('');
  const [color, setColor]: any = useState('0');
  const [currentWindow, setCurrentWindow] = useState(0);
  const [id, setId]: any = useState('');

  return currentWindow == 1 ? (
    <Circle
      color={color}
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
