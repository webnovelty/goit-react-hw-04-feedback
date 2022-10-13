import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';
import Statistic from '../Statistic';
import Container from './App.styled';

export default function App() {

	const BUTTON_NAMES = {
		good: 'good',
		neutral: 'neutral',
		bad: 'bad'
	};

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const counter = key => {

		switch (key) {
			case 'good':
				setGood(prevState => prevState + 1);
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1);
				break;
			case 'bad':
				setBad(prevState => prevState + 1);
				break;
			default:
		}

	};

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return Math.round((good / countTotalFeedback()) * 100);
	};

	const btnTitle = Object.keys(BUTTON_NAMES);
	const total = countTotalFeedback();
	const positivePercentage = countPositiveFeedbackPercentage();

	return (
		<Container>
			<Section title="Please leave feedback">
				<div>
					<FeedbackOptions
						options={btnTitle}
						onLeaveFeedback={counter}
					/>
				</div>
				{total !== 0 ? (
					<Statistic
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				) : (
					<Notification message="There is no feedback" />
				)}
			</Section>
		</Container>
	);
}