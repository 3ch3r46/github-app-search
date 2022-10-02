import styled from "styled-components"

const Foot = styled.footer`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid rgb(55 65 81/.5);
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
`

const Footer = () => {
    return (<Foot>
    <a
      href="https://www.linkedin.com/in/mohkhoirulanam"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}Moh Khoirul Anam
    </a>
  </Foot>)
}

export default Footer