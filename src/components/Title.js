import React from 'react'
import { Header, Title, Button, Icon, Left, Right, Body } from 'native-base'

export default ({ text }) => (
  <Header>
    <Body>
      <Title>{text}</Title>
    </Body>
    <Right />
  </Header>
)
