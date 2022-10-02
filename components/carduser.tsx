import React from "react"
import styled from 'styled-components'
import Image from "next/image"

const Card = styled.div`
    padding: 1rem 15px;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border-radius: 10px;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    display:flex;
    width: 100%;
    background-color: rgb(55 65 81/.5);

    :hover, :focus, :active {
        color: #0070f3;
        background-color: rgb(55 65 81/.2);
    }
`

const Title = styled.h1`
    margin:0px;
    font-size: 26px;
    @media(max-width:380px) {
        font-size: 18px;
    }
`

const Subtitle = styled.h3`
    margin:0px;
`

const Column = styled.div`
    padding-left:15px;
    padding-right:15px;
    display:flex;
    align-items:center;
`

const StyledImage = styled(Image)`
    border-radius:100%;
`

const Text = styled.p`
    margin:0px;
`

type UserCardProps = {
    key?: any,
    username: string
    avatar: string
    href?: any
}

const UserCard = ({username, avatar}: UserCardProps) => {
    return (
        <Card>
            <Column>
            <StyledImage src={avatar} height={50} width={50} />
            </Column>
            <Column>
                <Title>{username}</Title>
            </Column>
        </Card>
    )
}

export default UserCard