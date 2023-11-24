import PropTypes from 'prop-types';

export const Title = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
