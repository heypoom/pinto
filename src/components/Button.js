import React from 'react'
import Ink from 'react-ink'
import styled, {css} from 'react-emotion'

const primary = '#D75745'

// prettier-ignore
const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4em 0.8em;
  background: ${props => props.color || primary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1.8px 1.5px;

  color: white;
  border: none;
  border-radius: 8px;
  font-size: ${props => props.fontSize || 1.08}em;

  outline: none;
  cursor: pointer;
  transition: all 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${props => props.primary && css`
    background: linear-gradient(45deg, #d4145a, #fbb03b);

    &:hover {
      background: linear-gradient(45deg, #ed1c24, #fcee21);
    }
  `}

  ${props => props.large && css`
    font-size: 1.3em;
  `}

  ${props => props.outline && css`
    border: 1px solid white;
    border-radius: 2px;
    background: transparent;
    box-shadow: none;

    &:hover {
      color: #555;
      background: white;
    }
  `}
`

const RippleButton = ({children, ...props}) => (
  <Button {...props}>
    <Ink />
    {children}
  </Button>
)

export default RippleButton
