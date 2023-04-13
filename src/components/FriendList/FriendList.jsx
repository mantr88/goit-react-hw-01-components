import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>{
            friends.map(friend => (
                <FriendListItem friend={friend}/>
            ))
        }
        </List>
    )
};

// FriendList.propTypes = PropTypes.arrayOf().isRequired;