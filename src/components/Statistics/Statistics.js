import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) => {
  if (total() === 0) {
    return <Notification message={message} />;
  }
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li className={s.total}>Total: {total()}</li>
      <li className={s.positivePercentage}>
        Positive feedback: {positivePercentage()} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Statistics;
