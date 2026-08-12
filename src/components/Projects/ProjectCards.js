import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards(props) {
  return (
    <Card className='project-card-view'>
      {props.imgPath ? (
        <Card.Img variant='top' src={props.imgPath} alt={props.title} />
      ) : (
        <div className='project-visual' aria-hidden='true'>
          <span>{props.visualLabel}</span>
        </div>
      )}
      <Card.Body>
        {props.kicker && <div className='project-kicker'>{props.kicker}</div>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='project-description'>
          {props.description}
        </Card.Text>
        {props.impact && (
          <p className='project-impact'>
            <strong>Impact:</strong> {props.impact}
          </p>
        )}
        {props.tags && (
          <div className='project-tags'>
            {props.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className='project-links'>
          {props.ghLink && (
            <Button
              variant='primary'
              href={props.ghLink}
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? 'Blog' : 'GitHub'}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant='primary'
              href={props.demoLink}
              target='_blank'
              rel='noreferrer'
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
