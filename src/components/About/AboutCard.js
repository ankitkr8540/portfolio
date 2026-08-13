import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            I grew up in a remote village in{' '}
            <span className='purple'>Bihar, India</span>, with{' '}
            <span className='purple'>no reliable electricity for the first 15
            years of my life.</span> When I was a kid I{' '}
            <span className='purple'>wired together old battery packs</span>{' '}
            just to get a light bulb working in my room so I could read at
            night. That's not a metaphor. That's literally where this started.
            <br />
            <br />
            <span className='purple'>I come from zero.</span> No electricity,
            no obvious path, no blueprint. And yet here I am, building
            production AI systems, earning a{' '}
            <span className='purple'>Distinguished Academic Achievement Award
            in Machine Learning</span>, and competing every day with some of
            the most technically advanced people in the world. I'm immensely
            proud of that journey. And I'm equally humbled by it, because I
            know exactly how much each step cost and who helped me get there.
            <br />
            <br />
            The scarcity I grew up with taught me something school never could:{' '}
            <span className='purple'>you don't wait for perfect conditions.</span>{' '}
            You figure out what you have, and you make it work. That instinct
            shows up in everything I do.
            <br />
            <br />
            As a person I'm{' '}
            <span className='purple'>calm, candid, and I mean what I say.</span>{' '}
            Hard feedback doesn't scare me. I welcome it, because it's the
            fastest way to get better. I recharge alone, think carefully before
            I speak, and when I commit to something,{' '}
            <span className='purple'>I follow through.</span>
            <br />
            <br />
            Outside work, I hike the Cascades when I need to clear my head, and
            I cook. Seriously. I'll taste something at a restaurant, come home,
            pull up YouTube, track down the cookbook, and keep going until I can
            make it myself. I've worked through more cuisines than I can count
            and I'm{' '}
            <span className='purple'>genuinely proud of what I can put on a
            table.</span> Food is also how I connect with people. Sharing a
            meal you made yourself is hard to beat.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
