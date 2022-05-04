import React, { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';

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
    } = this;

    return (
      <Container>
        <Section
          titleMain={title}
          leaveFeedback={handleIncrement}
          subtitle={subtitle}
          goodEl={good}
          neutralEl={neutral}
          badEl={bad}
          totalEl={countTotalFeedback}
          positivePercentEl={countPositiveFeedbackPercentage}
          message={message}
        />
      </Container>
    );
  }
}

export default App;
