import React from 'react';
import Title from './title/title';
import Carousel from './carousel/carousel';
import ContentArea from './carousel/contentArea';
import './App.css';
import Content from './content/content';
//content area should take in a formatted object for rendering each page.
//each page should be rendered based on project/about prop
function App() {
  return (
    <div className="page">
      <Title>test</Title>
        <Carousel>
        <ContentArea content="" class="content-area waiting-right" content={Content[1]} about/>
        <ContentArea content="" class="content-area waiting-right" content={Content[0]} project/>
        </Carousel>
    </div>
  );
}

export default App;
