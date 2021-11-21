import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { faqData } from '../../data/dataStore';

const FAQ = () => (

  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <h2>{faqData.subtitle}</h2> 
    <p>{faqData.description}</p>
  </Container>

);


export default FAQ;