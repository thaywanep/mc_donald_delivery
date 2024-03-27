import styled,{css} from "styled-components";

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Banner = styled.section`
background-color: #FFC72C;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
figure {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
`

export const Principal = styled.div`
display: flex;
height: 70%;
width: 100%;
flex-direction: row;
justify-content: space-around;
h2{
    font-size: 50px;
    font-weight: 800;
    ${center}
}
span{
    color: red;
}
`

export const Promocao = styled.section`
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h3{
    color: white;
}
`

export const Center = styled.div`
width: 70vw;
${center}
justify-content: space-around;
`

export const Card = styled.div`
border: 3px solid #FEB706;
height: 45vh;
width: 30%;
text-align: center;
background-color: white;
border-radius: 13px;
p{
    height: 10vh;
    ${center}
}
button{
    cursor: pointer;
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`
