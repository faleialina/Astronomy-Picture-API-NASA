'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './page.module.css';


export default function Home() {
  const [obj, setObj] = useState('');
  const [objData, setObjData] = useState('');
  const [startDate, setStartDate] = useState('');

  async function send() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=5U0ftZibSq2uZy1Alv9otc7dKS5lOYrlaD46IwPv');
    setObj(res.data)
  };
  async function sendData() {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?date=${startDate}&api_key=5U0ftZibSq2uZy1Alv9otc7dKS5lOYrlaD46IwPv`);
    setObjData(res.data)
  };
  useEffect(() => {
    send()
  }, []);
  useEffect(() => {
    sendData()
    console.log(objData);
  }, []);

  return (
    <main className={styles.main}>
      <h1>{obj?.title}</h1>
      <h3>{obj?.date}</h3>
      <img src={obj?.url} alt="Picture" />
      <div>{obj?.url}</div>
      <p>{obj?.explanation}</p>


      <div className={styles.wrap}>
        <input className={styles.input} type="date" id="start" name="trip-start" onChange={(e) => { setStartDate(e.target.value) }} />
        <button className={styles.button} onClick={sendData}>Click</button>
      </div>

      <h1>{objData?.title}</h1>
      <h3>{objData?.date}</h3>
      <img src={objData?.url} alt="Picture" />
      <div>{objData?.url}</div>
      <p>{objData?.explanation}</p>
    </main>
  )
};
