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
      <img src={obj?.url} width={800} alt="Picture" />
      <div>{obj?.url}</div>

      <div className={styles.wrap}>
        <input className={styles.input} type="date" id="start" name="trip-start" onChange={(e) => { setStartDate(e.target.value) }} />
        <button className={styles.button} onClick={sendData}>Click</button>
      </div>

      <img src={objData?.url} width={800} alt="Picture" />
      <div>{objData?.url}</div>

    </main>
  )
};
