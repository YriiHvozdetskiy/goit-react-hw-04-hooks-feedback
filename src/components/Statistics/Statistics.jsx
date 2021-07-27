import PropTypes from 'prop-types';
import { List, ItemList, Span } from '../Feedback/Feedback.styles';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <>
      <List>
        <ItemList gapBottom={10}>
          Good:<Span gapLeft={5}>{good}</Span>
        </ItemList>
        <ItemList gapBottom={10}>
          Neutral:<Span gapLeft={5}>{neutral}</Span>
        </ItemList>
        <ItemList gapBottom={10}>
          Bad:<Span gapLeft={5}>{bad}</Span>
        </ItemList>
        <ItemList gapBottom={10}>
          Total:<Span gapLeft={5}>{total}</Span>
        </ItemList>
        <ItemList>
          Positive feedback:<Span gapLeft={5}>{positivePercentage}</Span>%
        </ItemList>
      </List>
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
