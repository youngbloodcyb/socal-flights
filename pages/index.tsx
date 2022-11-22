import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Input from '../components/Input'

export default function Home() {
  return (
    <div className='font-mono'>
      <Nav/>
      <Input/>
    </div>
  )
}
