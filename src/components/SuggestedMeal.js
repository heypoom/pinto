import React from 'react'
import styled from 'react-emotion'
import Ink from 'react-ink'

import Button from '../components/Button'

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  background: rgba(255, 255, 255, 0.94);
`

const Thumbnail = styled.div`
  position: relative;

  width: 100%;
  height: 16em;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 2.5px 2px;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0.8em;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.3em;

  font-size: 1.85em;
  font-weight: 300;
`

const Paragraph = styled.p`
  color: #555;
  margin: 0;
  font-size: 1em;
  font-weight: 300;
`

const SuggestedMeal = ({title, desc, image}) => (
  <Paper>
    <Thumbnail src={image}>
      <Ink />
    </Thumbnail>
    <Content>
      <Title>{title}</Title>

      <Paragraph>{desc}</Paragraph>
    </Content>
    <Button style={{borderRadius: 0, padding: '0.3em 0'}} large>
      เลือกอาหารชุดนี้
    </Button>
  </Paper>
)

export default SuggestedMeal
