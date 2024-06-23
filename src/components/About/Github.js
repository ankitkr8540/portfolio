import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Row } from 'react-bootstrap'
import LeetCodeCalendar from 'leetcode-calendar'

function Github() {
  const theme = {
    light: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
  }
  return (
    <>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar username="ankitkr8540" blockSize={15} blockMargin={5} color="#c084f5" fontSize={16} />
      </Row>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
          Days I <strong className="purple">LeetCode</strong>
        </h1>
        <LeetCodeCalendar
          username="ankitkr8540"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          theme={theme}
          style={{ maxWidth: '1100px' }}
        />
      </Row>
    </>
  )
}

export default Github
