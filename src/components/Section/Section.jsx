import { TitleH1 } from '../Feedback/Feedback.styles';
import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <>
      <TitleH1>{title}</TitleH1>
      {children}
    </>
  );
};

Section.defaultProps = {
  title: ' here may be your title',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
