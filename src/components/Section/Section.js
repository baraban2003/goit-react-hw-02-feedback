import React from 'react';
import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

const Section = ({
  titleMain,
  leaveFeedback,
  subtitle,
  goodEl,
  neutralEl,
  badEl,
  totalEl,
  positivePercentEl,
  message,
}) => {
  return (
    <div className={s.sectionMain}>
      <h1>{titleMain}</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={leaveFeedback}
      />

      <h2>{subtitle}</h2>

      <Statistics
        good={goodEl}
        neutral={neutralEl}
        bad={badEl}
        total={totalEl}
        positivePercentage={positivePercentEl}
        message={message}
      ></Statistics>
    </div>
  );
};

Section.propTypes = {
  titleMain: PropTypes.string.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  goodEl: PropTypes.number.isRequired,
  neutralEl: PropTypes.number.isRequired,
  badEl: PropTypes.number.isRequired,
  totalEl: PropTypes.func.isRequired,
  positivePercentEl: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Section;
