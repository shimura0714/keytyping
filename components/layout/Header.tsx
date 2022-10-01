import {FC} from 'react';

export const Header: FC = () => {
  
  return (
    <header>
        <ul className='flex pl-5 pr-5 pt-2 pb-2'>
        <li className='w-32'>Home</li>
        <li className='w-32'>ClassA</li>
        <li className='w-32'>ClassB</li>
      </ul>
    </header>
  )
};

export default Header;
