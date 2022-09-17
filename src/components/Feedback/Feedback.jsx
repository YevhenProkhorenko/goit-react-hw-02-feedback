import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './FeedbackStatistics';
import Notification from './Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    } else {
      const value = this.state[good];
      const percentage = (value / total) * 100;
      return Number(percentage.toFixed(2));
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage('good');

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions leaveFeedback={this.leaveFeedback} />
        </Section>
        {!total ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}
