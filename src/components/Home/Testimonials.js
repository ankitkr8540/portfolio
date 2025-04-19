import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

// Import placeholder images
// Replace these with actual co-worker images when available
import testimonial1 from '../../Assets/Aileen.jpeg';
import testimonial2 from '../../Assets/Alexandra.jpeg';
import testimonial3 from '../../Assets/parul.jpeg';
import testimonial4 from '../../Assets/Rob.jpeg';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Robert Faber',
      LinkedIn: 'https://www.linkedin.com/in/robert-faber-a793646/',
      designation: 'Program Director at George Mason University',
      image: testimonial4,
      text: "Ankit was hired into an intern position to augment an Automation Center of Excellence for Robotic Process Automation. As a director and his supervisor, I was very pleased with his performance. <span class = 'purple'>He carried himself and delivered as a full time professional RPA developer.</span> Additionally contributing to efforts outside his primary role including <span class='purple'>leading a refresh and re-implemention of our code repository, establishing baseline best practices for our development approach</span>, and <span class='purple'>coordinating and mentoring other interns.</span> Any business or institution will greatly benefit from his employment. ",
    },
    {
      id: 2,
      name: 'Aileen Miller',
      LinkedIn: 'https://www.linkedin.com/in/aileen-miller-a0182452/',
      designation: 'Senior Business Systems Analyst at George Mason University',
      image: testimonial1,
      text: "Ankit is a pleasure to work with. He's a true <span class='purple'>outside the box thinker</span> who has innovative ideas and focuses on <span class='purple'>problem solving</span>. He is a team player with a <span class='purple'>sense of humor</span> who contributes to a positive working environment. He will be a great addition to any team looking for <span class='purple'>innovative solutions </span> to technical problems. While my work with Ankit focused on Robotic Process Automation, Ankit is a <span class='purple'>quick learner</span> who easily absorbs new information and would excel in any area of technology solutions.",
    },
    {
      id: 3,
      name: 'Alexandra Swords, M.A.',
      LinkedIn: 'https://www.linkedin.com/in/alexandra-swords-m-a-4a2b166a/',
      designation:
        'Senior Media Specialist & Event Production Supervisor at George Mason University',
      image: testimonial2,
      text: "Ankit was a wonderful student employee! He approached every aspect of the job with <span class='purple'>enthusiasm and positivity</span>, easily becoming a key asset to the team and a favorite among his peers. He reliably showed up to shifts <span class='purple'>on time and consistently</span> demonstrated diligence and <span class='purple'>attentions to detail</span>, allowing his supervisors to trust him with <span class='purple'>executing even complex tasks with minimal oversight</span>. Overall, Ankit was a delightful employee and he would be a great benefit to any team!",
    },
    {
      id: 4,
      name: 'Parul Arora',
      designation:
        'Software Prod and Platform Engineer senior Analyst at Accenture',
      LinkedIn: 'https://www.linkedin.com/in/parul-arora-1380b0158/',
      image: testimonial3,
      text: "I have worked with Ankit in Accenture. He is known for his exceptional <span class='purple'>expertise in requirement gathering, analysis and coding</span>. He has a remarkable knack for diving deep into project requirements, ensuring every detail is thoroughly understood. He brought out the codes with such <span class='purple'>precision and quality</span> that as a member of the quality assurance team I would find it difficult to find faults in his codes. He is truly an <span class='purple'>invaluable asset</span> to any team striving for excellence in software development.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <Container fluid className='testimonials-section'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='testimonial-container'>
              <div className='testimonial-navigation'>
                <button
                  className='nav-button'
                  onClick={prevSlide}
                  aria-label='Previous testimonial'
                >
                  <FaChevronLeft />
                </button>
                <button
                  className='nav-button'
                  onClick={nextSlide}
                  aria-label='Next testimonial'
                >
                  <FaChevronRight />
                </button>
              </div>

              <Row className='testimonial-row'>
                {testimonials.map((testimonial, index) => (
                  <Col
                    key={testimonial.id}
                    md={12}
                    className={`testimonial-card ${
                      index === currentSlide ? 'active' : ''
                    }`}
                  >
                    <Card className='testimonial-content'>
                      <div className='quote-icon'>
                        <FaQuoteLeft />
                      </div>
                      <Card.Body>
                        <Card.Text
                          dangerouslySetInnerHTML={{ __html: testimonial.text }}
                        />
                        <div className='testimonial-info'>
                          <div className='testimonial-image'>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                          </div>
                          <div className='testimonial-details'>
                            <h4
                              className='purple'
                              onClick={() =>
                                window.open(testimonial.LinkedIn, '_blank')
                              }
                              style={{ cursor: 'pointer' }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.textDecoration =
                                  'underline')
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.textDecoration = 'none')
                              }
                            >
                              {testimonial.name}
                            </h4>
                            <p>{testimonial.designation}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className='testimonial-indicators'>
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${
                      index === currentSlide ? 'active' : ''
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Testimonials;
