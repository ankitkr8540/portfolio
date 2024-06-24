import React, { useState, useEffect } from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import pdfSoftware from '../../Assets/Project_Assistant_Resume_Ankit.pdf'
import pdfDataScientist from '../../Assets/Ankit-Kumar_Sp_24.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const ResumeNew = () => {
  const [width, setWidth] = useState(1200)
  const [key, setKey] = useState('software')

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Particle />
      <Container className="resume-section">
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Tabs
            id="resume-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 justify-content-center d-flex custom-tabs border-0"
          >
            <Tab eventKey="software" title="Software Development Resume">
              <Row className="resume">
                <Document file={pdfSoftware} className="d-flex justify-content-center">
                  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </Row>
              <Row style={{ justifyContent: 'center', position: 'relative' }}>
                <Button variant="primary" href={pdfSoftware} target="_blank" style={{ maxWidth: '250px' }}>
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </Row>
            </Tab>
            <Tab eventKey="data" title="Data Scientist Resume">
              <Row className="resume">
                <Document file={pdfDataScientist} className="d-flex justify-content-center">
                  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </Row>

              <Row style={{ justifyContent: 'center', position: 'relative' }}>
                <Button variant="primary" href={pdfSoftware} target="_blank" style={{ maxWidth: '250px' }}>
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeNew
