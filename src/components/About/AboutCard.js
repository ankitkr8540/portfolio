import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Growing up in remote village of{' '}
            <span className='purple'>Bihar, India</span>, the first{' '}
            <span className='purple'>15 years without electricity</span> shaped
            a unique perspective on life and technology. Now competing in a
            digital world without an ivy league degree or groundbreaking
            invention—just{' '}
            <span className='purple'>unwavering determination</span> and
            <span className='purple'> grit</span> that no school on earth could
            teach.
            <br />
            <br />
            The professional journey began with{' '}
            <span className='purple'>
              ML-integrated web development
            </span> at <span className='purple'>Accenture</span>, evolving into
            specialized work in{' '}
            <span className='purple'>
              Machine Learning, Data Mining, Advanced NLP, Mining Massive
              Datasets with MapReduce and Artificial Intelligence
            </span>{' '}
            through a <span className='purple'>Masters degree</span> at{' '}
            <span className='purple'>George Mason University</span>.
            <br />
            <br />
            Every task receives <span className='purple'>complete focus</span>,
            resulting in solutions that are{' '}
            <span className='purple'>elegant yet practical</span>. Values
            include <span className='purple'>simplicity and effectiveness</span>{' '}
            in all creations, with a belief in straightforward
            communication—what you see is genuinely what you get.
            <br />
            <br />
            Approaching challenges involves{' '}
            <span className='purple'>analytical thinking</span> paired with{' '}
            <span className='purple'>creative problem-solving</span>. Those who
            know me describe someone who is{' '}
            <span className='purple'>patient</span> and{' '}
            <span className='purple'>detail-oriented</span>—qualities developed
            through years of overcoming obstacles with limited resources.
            <br />
            <br />
            Always <span className='purple'>open to opportunities</span>, feel
            free to connect through whatever medium works best. Actions speak
            louder than words, but when words are necessary, they come with{' '}
            <span className='purple'>authenticity and thoughtfulness</span> (and
            yes, plenty of humor). Beyond technology, joy comes from cooking,
            museums, and good food—simple pleasures that complement an{' '}
            <span className='purple'>introspective nature</span>.
          </p>
          {/* <ul>
            <li className='about-activity'>
              <ImPointRight /> Reading Tech Blogs as well as Novels
            </li>
            <li className='about-activity'>
              <ImPointRight /> Learning about different food cultures and trying
              out the recipes
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: 'rgb(155 126 172)' }}>
            "Code speaks louder than words. Let's keep the chatter to the
            keyboard."{' '}
          </p>
          <footer className='blockquote-footer'>Ankit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
