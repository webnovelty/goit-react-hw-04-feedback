import PropTypes from 'prop-types';
import React from 'react';
import { Button, BtnBoard } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<BtnBoard>
			{options.map(btnTitle => (
				<Button
					type="button"
					key={btnTitle}
					btnTitle={btnTitle}
					style={{ backgroundColor: getRandomColor(btnTitle) }}
					onClick={() => onLeaveFeedback(btnTitle)}
				>
					{btnTitle}
				</Button>
			))}
		</BtnBoard>
	);
};


export default FeedbackOptions;

function getRandomColor(btnTitle) {
	if (btnTitle === 'good') {
		return 'green';
	} else if (btnTitle === 'neutral') {
		return 'orange';
	}
	return 'red';
}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};