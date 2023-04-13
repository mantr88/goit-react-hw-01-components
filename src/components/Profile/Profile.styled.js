import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 25px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    max-width: 515px;

    background-color: rgb(201,189,194);;
    
`;

export const Card = styled.div`
    border: 2px solid black;

    p{
        margin-bottom: 15px;
    }
`;

export const Stats = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;

    border: 2px solid black;
    padding: 15px;
    gap: 20px;
    background-color: #e9d9e0;
    
    li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-width: 110px;
        /* border: 1px solid; */
    }

    span {
        padding: 15px;
    }

`;