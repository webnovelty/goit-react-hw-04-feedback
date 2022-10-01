import React, { Component } from 'react';
import Statistic from '../Statistic';
import Notification from '../Notification';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Container from './App.styled';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	counter = key => {
		this.setState(prevState => {
			return { [key]: prevState[key] + 1 };
		});
	};

	countTotalFeedback() {
	 	return Object.values(this.state).reduce((acc, value) => acc + value, 0);
	}

	countPositiveFeedbackPercentage() {
		return Math.round((this.state.good / this.countTotalFeedback()) * 100);
	}

	render() {
		const btnTitle = Object.keys(this.state);
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		return (
			<Container>
				<Section title="Please leave feedback">
					<div>
						<FeedbackOptions
							options={btnTitle}
							onLeaveFeedback={this.counter}
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
}