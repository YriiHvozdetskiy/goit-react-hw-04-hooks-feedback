import {  useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { List } from './Feedback.styles';

export const Feedback =()=> {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0)

  const show = isShowing => {
    return !!isShowing;
  };

 const  countTotalFeedback = () => good+neutral+bad

  const total = countTotalFeedback()


  const countPositiveFeedbackPercentage = total => {
    return Math.round((good / total) * 100);
  };

  const interest = countPositiveFeedbackPercentage(total);
  const isShow = show(total);

  const  onLeaveFeedback = event => {
   const value = event.target.textContent.toLowerCase();

    if (value === 'good') return setGood(prevState => prevState +1)
    if (value === 'neutral') return setNeutral(prevState => prevState +1)
    if (value === 'bad') return setBad(prevState => prevState +1)
 }

  return (
    <>
      <Section title={'Plese leave feedback'}>
        <List display={'flex'}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </List>
      </Section>

      <Section title={'Statistics'}>
        <Notification message="No feedback given" show={isShow}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={interest}
          />
        </Notification>
      </Section>
    </>
  )

  }

