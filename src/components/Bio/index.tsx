import React from "react"
import { bio } from "src/configs"
import styled from "styled-components"

const Bio = () => {
  return <BioStyled>{bio.title}</BioStyled>
}

const BioStyled = styled.div``

export default Bio
