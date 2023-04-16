import styled from "styled-components";

export const List = styled.ul`
    margin-bottom: 25px;
`;

export const FriendsListItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;


    background-color: rgb(201,189,194);
    border-radius: 10px;

    span {
        margin-right: 25px;
        width: 25px;
        height: 25px;
        background-color: ${props => props.type === "online" ? 'SpringGreen' : 'red'};
        border-radius: 50%;

    }

    img{
        display: block;
        margin-right: auto;
        width: 80px;
        height: 80px;
        border-radius: 40%;
    }

    p {
        margin-right: auto;
        font-size: 35px;
        font-weight: 500;
    }
`;