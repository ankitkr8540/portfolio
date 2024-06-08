import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Ankit Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            <br />
            Welcome to my corner. <span className="purple">Creating websites, working on projects,</span> all of this
            that you see, is a form of meditation for me. I love being lost in the world of programming, and I am
            forever amazed and inspired by the creativity that is displayed with technology.
            <br />
            <br />
            Though I started my journey with <span className="purple">full-stack development </span>at{' '}
            <span className="purple">Accenture</span>, I have diversified my interests to include{' '}
            <span className="purple">Machine Learning and Data Mining</span> in my portfolio, and also through the
            <span className="purple"> Masters degree</span> that I am taking at{' '}
            <span className="purple">George Mason University.</span>
            <br />
            <br />
            When working, my tasks have my complete and <span className="purple"> undivided attention.</span> This is
            reflected in my work through clean and efficient solutions. I believe in{' '}
            <span className="purple">simplicity and effectiveness</span> and I hate to beat around the bush. What you
            see is what you get, so feel free to look around and poke at stuff here.
            <br />
            <br />I am <span className="purple">open to oportunities,</span> so if you want to extend your support in
            that regard, please feel free to connect with me through whatever medium is convenient for you. I am all
            action, and very little talk, but when I do, it is with gravitas and sincerity (and tons of jokes). When I
            do leave my desk, I love to cook, go to museums, watch opera and eat good food. Just a quiet life, and
            introvert energy.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs as well as Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about different food cultures and trying out the recipes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Code speaks louder than words. Let's keep the chatter to the keyboard."{' '}
          </p>
          <footer className="blockquote-footer">Ankit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
