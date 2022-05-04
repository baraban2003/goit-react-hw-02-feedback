import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        className={s.feedbackButton}
      >
        {option}
      </button>
    );
  });

export default FeedbackOptions;
