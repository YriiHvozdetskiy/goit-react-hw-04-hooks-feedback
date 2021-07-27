import PropTypes from 'prop-types';
import { Button, ItemList } from '../Feedback/Feedback.styles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(button => {
        return (
          <ItemList key={button} gapRight={10}>
            <Button type="submit" onClick={onLeaveFeedback}>
              {button}
            </Button>
          </ItemList>
        );
      })}
    </>
  );
};

FeedbackOptions.defaultProps = {};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
