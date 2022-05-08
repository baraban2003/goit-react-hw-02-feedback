import React, { Component } from 'react';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  title = 'Please leave feedback';
  subtitle = 'Statistics';
  message = 'No feedback given';

  //add one when click on button (very hard, have to remember)
  handleIncrement = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };
  //function total
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  //Function to calc %
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback())
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return 0;
  };

  render() {
    //Destructurisation
    const { good, neutral, bad } = this.state;

    const {
      title,
      handleIncrement,
      subtitle,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      message,
      state,
    } = this;

    const countTotalFeedbackNumber = countTotalFeedback();

    return (
      <Container>
        <Section titleMain={title} subtitle={subtitle}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handleIncrement}
          />
          {countTotalFeedbackNumber > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
