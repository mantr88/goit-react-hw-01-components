import styled from "styled-components";

export const Container = styled.div`
    margin: 20px auto;
    padding: 20px 10px;
    font-size: 18px;
    font-weight: 600;

    background-color: rgb(201,189,194);
    border-radius: 15px;
`;

export const Card = styled.div`

    img {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    p{
        margin-bottom: 15px;
    }
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    
   li{
        display: flex;
        flex-direction: column;
        flex-basis: calc((100%-10px)/3);
    } 

    span {
        padding: 10px;
    }

`;