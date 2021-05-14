import React from 'react'
import styled from 'styled-components'
import Character from '../Character'

const ContainerDiv = styled.main`
    display:flex;
    flex-direction: column;
`

export default function Characters({data}) {
    return (
     <ContainerDiv>
        {data.map((curChar, id) => {
            return (
                <Character data={curChar} key={id}></Character>
            )
        })}
     </ContainerDiv>
    )
}