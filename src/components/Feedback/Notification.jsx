import React from 'react';
import css from '../Feedback/Feedback.module.css';

export default function Notification({ message }) {
  return <div className={css.notification}>{message}</div>;
}
