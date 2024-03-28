import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
${center}
justify-content: space-between;
padding-left: 60px;
height: 12vh;
`

export const BtnApp = styled.div`
width: 30vw;
heigth: 12vh;
${center}
justify-content: space-evenly;
:hover{
    background-color: red;
}
`

export const App = styled.div`
cursor: pointer;
border-radius: 10px;
width: 12vw;
height: 6vh;
${center}
justify-content: space-evenly;
background-color: ${props => props.color};
p{
    font-size: 0.8rem;
    font-weight: 700;
}
`
