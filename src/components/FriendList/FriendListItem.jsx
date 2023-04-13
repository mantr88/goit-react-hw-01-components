import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendList.styled';
export const FriendListItem = ({ friend }) => {
    const { isOnline, id, name, avatar } = friend;
    return (
        <FriendsListItem type={isOnline? "online":"offline"} key={id}>
            <span>{isOnline?'online':'offline'}</span>
            <img src={avatar} alt={name} width="240" />
            <p>{name}</p>
        </FriendsListItem>)
};

// FriendListItem.propTypes = PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// });