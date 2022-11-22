import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Input from '../components/Input'
import ContentBlock from '../components/ContentBlock'

const headline = 'SoCal Flights';
const mainText = 'App for tracking flights';

export default function Home() {
  return (
    <div className='font-mono'>
      <Nav/>
      <div className='mx-10'>
        <ContentBlock headline={headline} body={mainText}/>  
        <Input/>
      </div>
    </div>
  )
}
