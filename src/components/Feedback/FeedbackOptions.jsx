import React from 'react';
import css from '../Feedback/Feedback.module.css';

export default function FeedbackOptions({ leaveFeedback }) {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <button className={css.button} onClick={() => leaveFeedback('good')}>
          Good
        </button>
      </li>
      <li className={css.listItem}>
        <button className={css.button} onClick={() => leaveFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li className={css.listItem}>
        <button className={css.button} onClick={() => leaveFeedback('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
}
