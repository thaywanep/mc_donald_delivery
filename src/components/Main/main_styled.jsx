import styled,{css} from "styled-components";

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Banner = styled.section`
border: solid 1px blue;
background-color: #FFC72C;
height: 70vh;
flex-direction: row;
justify-content: space-around;
figure {
    ${center}
}
`
export const Principal = styled.div`
border: solid 1px red;
display: flex;
height: 70%;
width: 100%;
gap: 20;
img{
    width: 15vw;
}
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
/* border: solid 2px red; */
width: 70vw;
${center}
justify-content: space-around;
`

export const Card = styled.div`
/* border: solid 2px green; */
height: 40vh;
text-align: center;
background-color: white;
border-radius: 13px;
p{
    /* border: solid 2px green;  */
    height: 9vh;
    ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`