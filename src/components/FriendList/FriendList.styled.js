import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    
`;

export const FriendsListItem = styled.li`
display: flex;
flex-direction: column;
padding: 10px;
border: 2px solid tomato;
border-radius: 10px;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(117,121,9,1) 1%, rgba(255,222,0,1) 100%);

span {
    color: ${props => props.type === "online" ? 'SpringGreen' : 'red'};
    margin-bottom: 10px;
}

img{
    margin-bottom: 10px;
}


`;