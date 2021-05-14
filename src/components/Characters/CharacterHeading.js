import React from 'react'
import styled from 'styled-components'

const CharHeadWrap = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid greenyellow;
`
const CharHeadHeading = styled.h2`
  color: lightgray;
  font-size: 3rem;
  font-family: 'Geostar Fill', cursive;
`
const CharHeadButton = styled.button`
  border: 1px solid greenyellow;
  font-size: 3rem;
  font-family: 'Geostar Fill', cursive;
`
export default function CharacterHeading({data}) {
   
    return (
      <CharHeadWrap>
        <CharHeadHeading>{data.name}</CharHeadHeading>
        <CharHeadButton>{data.birth_year}</CharHeadButton>
      </CharHeadWrap>
    )
}