import Image from 'next/image' 
import Head from 'next/head';
import Hero from 'components/hero';
import FooterComponent from 'components/Footer';
import SponsorsComponent from 'components/Sponsors';
import Features from 'components/Feature';
import Testimonial from 'components/Testimonials';
import PricingPlan from 'components/Pricing';
import GetStarted from 'components/GetStarted';
import BlogPostCard from 'components/Blogs';
export default function Home() {
  return (
    <div className="bg-red-100">
      <Head>
        <title> Financial Budget Serving App</title>
        <meta name='description' content = 'Generateed by create
        next app' />
      </Head>
      <Hero heading='Finance. Finally.' message='Helping save YOU money.' />

    <SponsorsComponent/>
    
    <Features/>  
    
    <Testimonial/>
    <PricingPlan/>
    <GetStarted/>
    <BlogPostCard/>
    <FooterComponent/>
    
    </div>
  );
}
