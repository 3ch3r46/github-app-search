import { NextPage } from "next";
import styled from "styled-components";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Flex, Main } from "../components/sharedstyled";

const Title = styled.h1`
  margin: 0;
  margin-bottom: 1.5rem;
  line-height: 1.15;
  font-size: 4rem;
  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  z-index: 1;
  background-image: linear-gradient(71.18deg, rgb(0, 34, 255) -27.32%, rgb(0, 34, 255) -16.39%, rgb(81, 121, 254) -7.38%, rgb(165, 237, 182) 30.59%, rgb(250, 232, 90) 46.06%, rgb(253, 172, 62) 62.61%, rgb(255, 92, 0) 75.82%);
`

const AboutPage: NextPage = () => {
    return (
        <>
            <Navbar/>
            <Main style={{display:'flex'}}>
                <Flex style={{width:'100%'}} direction='column' justify='center' alignItems='center'>
                <Title>
                GitHub App
                </Title>
                <p>Built using next.js framework with styled components</p>
                </Flex>
            </Main>
            <Footer/>
        </>
    )
}

export default AboutPage