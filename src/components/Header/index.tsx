import { Link } from "gatsby"
import data from "gatsby-config"
import React from "react"
import styled from "styled-components"

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderStyled>
      <Link to="/">{title}</Link>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
`

export default Header
