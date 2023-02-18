import React, { Component } from 'react';
import Section from './section/section';
import ButtonsMarkup from './buttonsBlok/buttonsMarkup';
import Statistics from './statisticsList/statistics';
import Notification from './notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const nameFeedback = e.target.textContent;

    this.setState(preState => {
      return {
        [nameFeedback]: preState[nameFeedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section titel={'Please leave feedback'}>
          <ButtonsMarkup
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section titel={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
