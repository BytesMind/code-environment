
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import First from './first';
import Contact from './contact';

function portfolio() {
  const apple = ReactDOM.createRoot(document.getElementById("main"));
  apple.render(<First/>);
}

function contact_us() {
  const cont = ReactDOM.createRoot(document.getElementById("contact_details"));
  cont.render(<Contact/>);
}


function App() {
  return (
    <div id="parent">

      <div id="navbar">
        <botton className='nav-txt' id="home" onClick="" >Home</botton>
        <botton className='nav-txt' id="service">Service</botton>
        <botton className='nav-txt' id="portfolio" onClick={portfolio}>Portfolio</botton>
        <botton className='nav-txt' id="contact" onClick={contact_us}>Contact Us</botton>
      </div>

      <div id='card'>
        <p id='intro_txt'>
          <p className='txt-1'><div className='line'></div>  &nbsp; &nbsp;  Hi, I'm Junaid khan. I'm A</p>
          <p className='txt-2'>Full-stack</p>
          <p className='txt-3'>Web Developer</p>
          <p className='txt-4'>I'm a seasoned full-stack web developer.Proficient in both front-end and </p>
          <p className='txt-4'>technologies, I've contributed to numerous projects, from e-commerce platforms to </p>
          <p className='txt-4'> dynamic web applications. My passion for clean, efficient code and problem-solving drives my work.</p>
          <p className='txt-5'>Let's start </p>
        </p>
        <div className='box_img'></div>
      </div>

      <div>
        <p id="main"> </p>
        <p id='contact_details'></p>
      </div>

    </div>
  );
}

export default App;
