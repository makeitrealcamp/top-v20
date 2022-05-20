import Head from 'next/head'
import { useState, useRef } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const inputRef = useRef()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = inputRef.current.value
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    }

    try {
      const response = await fetch('/api/shortUrl', payload)
      const data = await response.json()
      console.log(data)
    } catch (error) {

    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="url"
            placeholder="Tu url"
            ref={inputRef}
          />
          <button type="submit">Acortar</button>
        </form>
      </main>
    </div>
  )
}