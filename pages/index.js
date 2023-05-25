import Image from 'next/image' 
import Head from 'next/head';
import Hero from 'components/hero';
import {SliderData} from 'components/SliderData';
import Slider from 'components/Slider';
import FooterComponent from 'components/Footer';
import SponsorsComponent from 'components/Sponsors';
import Features from 'components/Feature';
export default function Home() {
  return (
    <div>
      <Head>
        <title> Financial Budget Serving App</title>
        <meta name='description' content = 'Generateed by create
        next app' />
      </Head>
      
      <Hero heading = 'Captur Photography' message = 'Start saving money right now with our
      budgeting application'/>
    <SponsorsComponent/>
    <Features/>  
    <Slider slides={SliderData}/> 
    <FooterComponent/>
    </div>
  );
}
