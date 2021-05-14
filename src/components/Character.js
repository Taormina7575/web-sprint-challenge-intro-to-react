import React from 'react'
import styled from 'styled-components'
import CharacterHeading from './Characters/CharacterHeading'

const CharacterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export default function Character({data}) {
    return (
        <CharacterContainer>
            <CharacterHeading data={data}></CharacterHeading>
        </CharacterContainer>
    )
}
