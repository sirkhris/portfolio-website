import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function NavBar() {
  // const [navBackground, setNavBackground] = useState('nav__solid');

  // const navRef = useRef();
  // navRef.current = navBackground;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 350;
  //     if (show) {
  //       setNavBackground('nav__faded');
  //     } else {
  //       setNavBackground('nav__solid');
  //     }
  //   };
  //   document.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <div className={`nav ${navRef.current}`}>
    <div className={`nav`}>
      <Link href='/'>
        <div className='nav__home-name'>Khris Rhodes</div>
      </Link>
      <div className='nav__link-container'>
        <div>
          <Link href='/'>
            <div className='nav__link'>Home</div>
          </Link>
          <Link href='/Portfolio'>
            <div className='nav__link'>Portfolio</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
