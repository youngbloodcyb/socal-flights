import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav/>
      <h1 className='text-3xl text-red-500'>Hello World</h1>
    </div>
  )
}
