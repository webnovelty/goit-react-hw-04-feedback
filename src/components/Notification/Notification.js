import React from 'react';
import PropTypes from 'prop-types';
import { MessageNotic } from './Notification.styled';
const Notification = ({ message }) => {
	return <MessageNotic>{message}</MessageNotic>;
};

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;