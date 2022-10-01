import React from 'react';
import PropTypes from 'prop-types';
import { Section, List, TextP, TextN, ListItem } from './Statistic.styled'

const Statistic = ({
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) => {
	return (
		
			<Section title="Statistic">
				<List>
					<ListItem style={{ color: 'green' }}>
						<TextP>Good: </TextP>
					<TextN>{good}</TextN>
					</ListItem>
					<ListItem style={{ color: 'orange' }}>
						<TextP>Neutral: </TextP>
					<TextN>{neutral}</TextN>
					</ListItem>
					<ListItem style={{ color: 'red' }}>
						<TextP>Bad: </TextP>
					<TextN>{bad}</TextN>
					</ListItem>
					<ListItem>
						<TextP>Total: </TextP>
					<TextN>{total}</TextN>
					</ListItem>
					<ListItem>
						<TextP>Positive feedback: </TextP>
					<TextN>{positivePercentage}%</TextN>
					</ListItem>
				</List>
			</Section>
		
	);
};
export default Statistic;

Statistic.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};