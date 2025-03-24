import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfDataScientist from '../../Assets/Ankit_MLE_Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const [width, setWidth] = useState(1200);
  const [key, setKey] = useState('software');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div>
      <Particle />
      <Container className='resume-section'>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Row className='resume'>
            <Document
              onLoadSuccess={onDocumentLoadSuccess}
              file={pdfDataScientist}
              options={{ workerSrc: '/pdf.worker.js' }}
              className='d-flex justify-content-center'
            >
              <Page
                pageNumber={pageNumber}
                width={width > 786 ? 1200 : width - 20}
              />
            </Document>
          </Row>
          <Row className='d-flex justify-content-center mt-3'>
            <p>
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
          </Row>
          <Row
            className='d-flex custom-tabs justify-content-center mb-3'
            style={{ width: 'auto' }}
          >
            <Col xs='auto'>
              <Button
                onClick={previousPage}
                disabled={pageNumber <= 1}
                variant='outline-primary'
              >
                <FaChevronCircleLeft />
                &nbsp;Previous
              </Button>
            </Col>
            <Col xs='auto'>
              <Button
                onClick={nextPage}
                disabled={pageNumber >= numPages}
                variant='outline-primary'
              >
                Next&nbsp;
                <FaChevronCircleRight />
              </Button>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center', position: 'relative' }}>
            <Button
              variant='primary'
              href={pdfDataScientist}
              target='_blank'
              style={{ maxWidth: '250px' }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;
