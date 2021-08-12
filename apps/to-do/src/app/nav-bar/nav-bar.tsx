import './nav-bar.module.scss';

/* eslint-disable-next-line */
export interface NavBarProps {
}

export function NavBar(props: NavBarProps) {
  return (
    <nav className='navbar'>
      <h1 className='heading navbar__heading'>To Do App</h1>
    </nav>
  );
}

export default NavBar;
