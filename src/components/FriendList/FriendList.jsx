import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>{
            friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))
        }
        </List>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired
};