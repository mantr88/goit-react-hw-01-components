import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">{
            friends.map(friend => (
                <FriendListItem friend={friend}/>
            ))
        }
        </ul>
    )
};

FriendList.propTypes = PropTypes.arrayOf().isRequired;