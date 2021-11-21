import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { infoData } from '../../data/dataStore';

const Info = () => (

  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    <p>{infoData.description}</p>
  </Container>
);

export default Info;