import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Particle from '../Particle';
import './Contact.css'; // Make sure to create this CSS file
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const data = {
      name: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        function (response) {
          setSubmitStatus('Success');
        },
        function (error) {
          setSubmitStatus('Failed');
        }
      );

    // Reset form after successful submission
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
    setValidated(false);
  };

  return (
    <Container fluid className='contact-section'>
      <Particle />
      <Container>
        <h1 className='contact-heading text-center mb-5'>
          Let's Build Reliable AI Systems
        </h1>
        <Row style={{ justifyContent: 'center' }}>
          <Col md={6} className='contact-about mt-20'>
            <h2 className='connect-heading text-center mb-5'>
              Let's Connect
            </h2>
            <p className='contact-copy'>
              I'm interested in machine learning and GenAI roles where I can
              own systems end to end and collaborate closely with product,
              engineering, and domain experts.
            </p>
            <div className='skills-container'>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> Production RAG, retrieval,
                and reranking systems
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> Bounded agentic workflows
                with evaluation and observability
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> Physics-informed and
                time-series machine learning
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> AWS data, deployment, and
                MLOps infrastructure
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> Clear collaboration across
                technical and nontechnical teams
              </div>
            </div>
            <div className='contact-actions'>
              <Button
                variant='primary'
                className='submit-btn'
                href='mailto:027.ankit.kumar@gmail.com'
              >
                <FaEnvelope /> Email Me
              </Button>
              <Button
                variant='outline-light'
                className='contact-secondary-btn'
                href='https://www.linkedin.com/in/027kumarankit/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedinIn /> LinkedIn
              </Button>
            </div>
          </Col>

          <Col md={6} className='contact-form-wrapper'>
            {submitStatus === 'Success' ? (
              <Alert
                variant='success'
                onClose={() => setSubmitStatus(null)}
                dismissible
              >
                Your message has been sent successfully!
              </Alert>
            ) : submitStatus === 'Failed' ? (
              <Alert
                variant='danger'
                onClose={() => setSubmitStatus(null)}
                dismissible
              >
                Something went wrong. Please try again later.
              </Alert>
            ) : null}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className='mb-4'>
                <Form.Label style={{ float: 'left' }}>
                  Full Name <span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='Enter your full name'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-4'>
                <Form.Label style={{ float: 'left' }}>
                  Email <span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email address'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-4'>
                <Form.Label style={{ float: 'left' }}>
                  Subject <span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Enter the subject of your message'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-4'>
                <Form.Label style={{ float: 'left' }}>
                  Message <span className='text-danger'>*</span>
                </Form.Label>
                <Form.Control
                  required
                  as='textarea'
                  rows={8}
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Write your message here'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant='primary'
                type='submit'
                className='submit-btn'
                style={{
                  backgroundColor: '#4B0082',
                  border: 'none',
                  padding: '12px 30px',
                  width: '100%',
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
