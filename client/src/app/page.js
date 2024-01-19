'use client'
import axios from 'axios'
import { useEffect, useState } from 'react';
import styles from './page.module.css'


export default function Home() {
  const [obj, setObj] = useState('');
  async function send() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=5U0ftZibSq2uZy1Alv9otc7dKS5lOYrlaD46IwPv');
    setObj(res.data)
  }
  useEffect(() => {
    send()
  }, []);
  return (
    <main className={styles.main}>
      <img src={obj?.url} width={800}
        alt="Picture" />
      <div>{obj?.url}</div>
    </main>
  )
}
