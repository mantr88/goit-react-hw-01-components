import PropTypes from 'prop-types';
import css from './FriendList.module.css'; 
export const FriendListItem = ({ friend }) => {
    const { isOnline, id, name, avatar } = friend;
    return (
        <li className="item" key={id}>
            <span className="status">{isOnline?'online':'offline'}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>)
};

FriendListItem.propTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
});