import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import * as color from './color'

type Props = {}

export default function CardFilter({ props }: Props) {
  return <CardFilter placeholder="Filter cards" />
}

const CardFilter = styled.input`
  display: flex;
  align-items: center;
  min-width: 300px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
`
