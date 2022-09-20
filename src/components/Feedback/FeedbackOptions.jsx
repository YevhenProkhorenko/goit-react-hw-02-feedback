import React from 'react';
import css from '../Feedback/Feedback.module.css';

export default function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        {options.map(option => (
          <button
            className={css.button}
            key={option}
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </li>
    </ul>
  );
}
