import React from 'react'
// import styles from '../styles/search.module.css'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1.5rem;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.75rem;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;

    & svg {
        color: rgb(107, 114, 128);
    }
`

const SearchInput = styled.input`
    outline-offset: -2px;
    font-size: .875rem;
    line-height: 1.25rem;
    padding-left: 2.5rem;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    background-color: rgb(55 65 81/.5);
    border: none;
    border-radius: 0.5rem;
    width: 100%;
    display: block;

    :focus {
        outline: 2px solid transparent;
        box-shadow: 0 0 0 2px rgba(10, 20, 30, 0.8), 0px 0px 0px 5px rgba(253, 172, 62, 0.6);
    }
`


type SearchProps = {
    handler?: any;
    placeholder?: string;
};

const Search = ({handler, placeholder}: SearchProps) => {
    return (<Container>
        <Icon>
            <svg aria-hidden="true" fill="none" height={'1.25rem'} width={'1.25rem'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </Icon>
        <SearchInput
            type="search"
            placeholder={placeholder??"Search..."}
            onKeyDown={(event) => {
                if (event.key == "Enter" && handler) {
                    handler(event.target)
                }
            }}
        />
    </Container>)
}

export default Search