import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Particle from '../Particle';
import './Contact.css'; // Make sure to create this CSS file
import emailjs from '@emailjs/browser';

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
          Your Vision, My Expertise: Let's Create Something Exceptional
        </h1>
        <Row style={{ justifyContent: 'center' }}>
          <Col md={6} className='contact-about mt-20'>
            <h2 className='connect-heading text-center mb-5'>
              Let's Connect !
            </h2>
            <div className='skills-container'>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> AWS Certified ML Engineer
                & Cloud Infrastructure Design
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> NLP & Large Language
                Model Fine-tuning Specialist
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> Scalable Big Data
                Analytics Solutions
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> RAG System Implementation
                & Optimization
              </div>
              <div className='skill-box'>
                <span className='skill-check'>✓</span> Cost-Optimized AI/ML
                Cloud Architecture
              </div>
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
                  placeholder='Enter your full name'
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
