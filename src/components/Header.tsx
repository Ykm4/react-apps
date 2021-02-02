import React from 'react'
import styled from 'styled-components'
import * as color from '../util/color'
import { CardFilter } from './CardFilter'

type Props = {
  className?: string
  filterValue?: string
  onFilterChange?: (value: string) => void
}

export function Header({ className, filterValue, onFilterChange }: Props) {
  return (
    <Container className={className}>
      <Logo>Kanban board</Logo>

      <CardFilter value={filterValue} onChange={onFilterChange} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.Navy};
`

const Logo = styled.div`
  color: ${color.Silver};
  font-size: 16px;
  font-weight: bold;
`
