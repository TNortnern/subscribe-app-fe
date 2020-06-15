import React from 'react';
import Container from '../common/Container';
import HomeSVG from '../../icons/HomeSVG';
import BellSVG from '../../icons/BellSVG';
import PlusSVG from '../../icons/PlusSVG';
import MessageSVG from '../../icons/MessageSvg';
import AccountSVG from '../../icons/AccountSVG';
import IconButton from '../common/IconButton';

const Navigation = () => {
  const buttonClasses = 'h-8 inline-block w-8 group-hover:text-red-900 duration-200';
  return (
    <div className="border-b-2 border-gray-400 py-4">
      <Container className="flex space-x-5 justify-center sm:justify-between sm:space-x-0">
        <div>
          <IconButton
            icon={
              <HomeSVG className={buttonClasses} />
            }
          />
        </div>
        <div>
          <IconButton
            icon={
              <BellSVG className={buttonClasses} />
            }
          />
        </div>
        <div>
          <IconButton
            icon={
              <PlusSVG className={buttonClasses} />
            }
          />
        </div>
        <div>
          <IconButton
            icon={
              <MessageSVG className={buttonClasses} />
            }
          />
        </div>
        <div>
          <IconButton
            icon={
              <AccountSVG className={buttonClasses} />
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
