import Link from 'next/link';
import propTypes from 'prop-types';

const IconButton = ({ icon, href, action }) => {
  const button = (
    <button
      type="button"
      action={action}
      className="pt-2 px-2 pb-2 hover:bg-lightBrown rounded-full group duration-150 ease-in focus:outline-none"
    >
      {icon}
    </button>
  );
  return (
    <>

      { href ? (
        <Link href={href}>
          {button}
        </Link>
      ) : { button } }
    </>
  );
};

IconButton.propTypes = {
  icon: propTypes.element.isRequired,
  href: propTypes.string,
  action: propTypes.func,
};

IconButton.defaultProps = {
  href: '',
  action: () => {},
};

export default IconButton;
