import PropTypes from 'prop-types';

export const Notification = ({ children, message, show }) => {
  return <>{show ? <div>{children}</div> : <p>{message}</p>}</>;
};

Notification.defaultProps = {
  message: 'something went wrong',
  show: false,
};

Notification.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
};
