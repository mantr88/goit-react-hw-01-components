import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendList.styled';
export const FriendListItem = ({ friend: { isOnline, name, avatar }}) => {
    return (
        <FriendsListItem type={isOnline? "online":"offline"}>
            <span></span>
            <img src={avatar} alt={name} width="240" />
            <p>{name}</p>
        </FriendsListItem>)
};

FriendListItem.propTypes = {
friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}).isRequired
};