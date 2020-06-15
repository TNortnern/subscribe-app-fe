import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, farBell } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import HomeSVG from '../../icons/HomeSVG';
import BellSVG from '../../icons/BellSVG';
import PlusSVG from '../../icons/PlusSVG';
import MessageSVG from '../../icons/MessageSvg';
import AccountSVG from '../../icons/AccountSVG';

const Navigation = () => (
  <div className='border-b-2 border-gray-400 py-5'>
    <Container className='flex justify-between'>
      <HomeSVG className='h-8' />
      <BellSVG className='h-8' />
      <PlusSVG className='h-8' />
      <MessageSVG className='h-8' />
      <AccountSVG className='h-8' />
    </Container>
  </div>
);

export default Navigation;
