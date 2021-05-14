import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    width: 100%;
`
const HeaderHeading = styled.h1`
    color: lightgray;
    font-size: 5.1rem;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    line-height: 2;
`

export default function Header() {
    return (
    <HeaderWrapper>
        <HeaderHeading>Biographical Data Card 375-B</HeaderHeading>
    </HeaderWrapper>
    )
}