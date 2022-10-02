
import styled, { keyframes } from 'styled-components'

type GridProps = {
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    gap?: number

}

const Grid = styled.div<GridProps>`
    display: grid;
    gap: ${(props) => props.gap??0}px;
    width: 100%;
    grid-template-columns: repeat(${(props) => props.cols??1}, minmax(0, 1fr));
    ${(props) => props.sm && `@media (min-width: 640px) {
        grid-template-columns: repeat(${props.sm??1}, minmax(0, 1fr));
    }`}
    ${(props) => props.md && `@media (min-width: 768px) {
        grid-template-columns: repeat(${props.md??1}, minmax(0, 1fr));
    }`}
    ${(props) => props.lg && `@media (min-width: 1024px) {
        grid-template-columns: repeat(${props.lg??1}, minmax(0, 1fr));
    }`}
    ${(props) => props.xl && `@media (min-width: 1280px) {
        grid-template-columns: repeat(${props.xl??1}, minmax(0, 1fr));
    }`}
`

type ColumnProps = {
    span?: number
}

const Column = styled.div<ColumnProps>`
    grid-column: span ${(props) => props.span??1} / span ${(props) => props.span??1};
`

const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 640px) {
        max-width: 640px;
    }
    @media (min-width: 768px) {
        max-width: 768px;
    }
    @media (min-width: 1024px) {
        max-width: 1024px;
    }
    @media (min-width: 1280px) {
        max-width: 1280px;
    }
`

type FlexProps = {
    alignItems?: 'center' | 'top' | 'bottom'
    justify?: 'center' | 'space-between' | 'space-evenly' | 'space-around' | 'left' | 'right'
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

const Flex = styled.div<FlexProps>`
    display: flex;
    ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
    ${(props) => props.justify && `justify-content: ${props.justify};`}
    ${(props) => props.direction && `flex-direction: ${props.direction};`}
`

const Main = styled.div`
    min-height: calc(100vh - 180px);
`

const Readme = styled.article`
    color: #c9d1d9;
    border: 1px solid #21262d;
    border-radius: 10px;
    padding: 5px 12px;
    margin: 10px 0px;

    img {
        max-width: 100%;
    }
    li {
        margin-bottom: 5px;
    }
    h6 {
        font-size: .85em;
    }
    h1, h2 {
        border-bottom: 1px solid #21262d;
        padding: .5rem 0;
        color: #ffffff;
    }
    pre code.hljs {
        background: #161b22;
        color: #adbac7;
        border-radius: 5px;
        display:block;
        overflow-x:auto;
        padding:1em;
        .hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{
            color:#dcbdfb;
        }
        .hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{
            color:#f47067;
        }
        .hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{
            color:#6cb6ff;
        }
        .hljs-meta .hljs-string,.hljs-regexp,.hljs-string{
            color:#96d0ff;
        }
        .hljs-built_in,.hljs-symbol{
            color:#f69d50;
        }
        .hljs-code,.hljs-comment,.hljs-formula{
            color:#768390;
        }
        .hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{
            color:#8ddb8c;
        }
        .hljs-subst{
            color:#adbac7;
        }
        .hljs-section{
            color:#316dca;font-weight:700;
        }
        .hljs-bullet{
            color:#eac55f;
        }
        .hljs-emphasis{
            color:#adbac7;font-style:italic;
        }
        .hljs-strong{
            color:#adbac7;
            font-weight:700;
        }
        .hljs-addition{
            color:#b4f1b4;
            background-color:#1b4721;
        }
        .hljs-deletion{
            color:#ffd8d3;
            background-color:#78191b;
        }
    }
    code.hljs {
        padding:3px 5px;
    }

    a {
        color: #58a6ff;
    }

    code:not(.hljs) {
        background: rgba(110,118,129,0.4);
        padding: .2em .4em;
        border-radius: 6px;
        font-size: 85%;
        margin:0;
    }

    table {
        display: block;
        max-width: 100%;
        overflow: auto;
        width: max-content;
        border-collapse: collapse;
        border-spacing: 0;

        tr {
            border-top: 1px solid #21262d;
        }
        tr:nth-child(2n) {
            background: #161b22;
        }
        td,th {
            border: 1px solid #21262d;
            padding: 6px 13px;
        }
        th {
            font-weight: 600;
        }
    }

    p {
        word-wrap: break-word;
    }
`

const Sidebar = styled.div`
    position: sticky;
    top: 90px;
    padding: 10px;
`

const pulse = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
`

const Skeleton = styled.div`
    animation: ${pulse} 2s cubic-bezier(.4,0,.6,1) infinite;
    padding-top: 1rem;
    div.item {
        background-color: rgb(110 118 129/1);
        height: 0.625rem;
        margin-bottom: 1rem;
        border-radius: 6px;
    }
`

export { Grid, Column, Container, Main, Flex, Readme, Sidebar, Skeleton }