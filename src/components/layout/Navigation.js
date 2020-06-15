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
  const routes = [
    { icon: <HomeSVG className={buttonClasses} />, href: '/' },
    { icon: <BellSVG className={buttonClasses} />, href: '/notifications' },
    { icon: <PlusSVG className={buttonClasses} />, href: '/newpost' },
    { icon: <MessageSVG className={buttonClasses} />, href: '/messages' },
    {
      icon: <AccountSVG className={buttonClasses} />,
      action: () => {
        console.log('test');
      },
    },
  ];
  return (
    <div className="border-b-2 border-gray-400 py-4">
      <Container className="flex space-x-5 justify-center sm:justify-between sm:space-x-0">
        {routes.map((route) => (
          <div>
            <IconButton icon={route.icon} href={route.href || '#'} action={route.action || ''} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Navigation;
