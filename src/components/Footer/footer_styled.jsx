import styled from "styled-components";


export const Rodape = styled.section`
background-color: #c7c7c7;
height: 10vh;
display: flex;
flex-direction: row;
justify-content: space-between;
.since{
    width: 15%;
    justify-content: space-around;
    display: flex;
    align-items: center;
    img{
        height: 20px;
    }
    p{
        font: roboto;
        height: 16px;
    }
}
.store{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
        heigth: 40px;
        cursor: pointer;
    }
}
`
