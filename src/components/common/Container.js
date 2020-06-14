import propTypes from 'prop-types';

const Container = ({ children, className }) => (
  <div className={`px-24 ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: propTypes.element,
  className: propTypes.string,
};

Container.defaultProps = {
  children: null,
  className: '',
};

export default Container;
