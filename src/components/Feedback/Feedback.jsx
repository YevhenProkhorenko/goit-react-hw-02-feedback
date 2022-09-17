import { Component } from 'react';
import css from '../Feedback/Feedback.module.css';

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
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2 className={css.tittle}>Please leave feedback</h2>
        <ul className={css.list}>
          <li className={css.listItem}>
            <button
              className={css.button}
              onClick={() => this.leaveFeedback('good')}
            >
              Good
            </button>
          </li>
          <li className={css.listItem}>
            <button
              className={css.button}
              onClick={() => this.leaveFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li className={css.listItem}>
            <button
              className={css.button}
              onClick={() => this.leaveFeedback('bad')}
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className={css.tittle}>Statistics</h2>
        <ul className={css.statisticList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: </li>
          <li>Positive feedback: </li>
        </ul>
      </div>
    );
  }
}
