import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import BigText from './components/BigText';
import Product from './components/Product';
import Pricing from './components/Pricing';
import FeaturedBlog from './components/FeaturedBlog'
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import {BlogData, FeaturedBlogPost} from './Data'
import './App.css'

function App() {
  return (
  <>
    <Navbar />
    <Hero 
    text1="Join Now" 
    text2="Your all in one Business Saas. Learn More"
    text3="Welcome to "
    text4="Wigi B2B Saas"
    button="Get started"
    text5="No credit card required"
    />
    <Features />
    
    <BigText />
    <Product title1="Individual" title2="Team"/>
    <Pricing 
    title1="Wigi Pricing" 
    Description="We offer the best pricing when it comes with our services and thats what stands us out from other brands."
    text="Companies Trust us"
    title2="Free"
    title3="Pro"
    />
    <FeaturedBlog  data={FeaturedBlogPost}/>
    <Blog post={BlogData} title="How to be a software developer"/>
    <Subscribe />
    <Footer />
  </>
  );
}

export default App;


