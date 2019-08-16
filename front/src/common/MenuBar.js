/**
 * @flow strict
 * @format
 */

import './MenuBar.css';
import mantis from '../mantis_logo.png';

import React from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Button } from 'reactstrap';

import cx from 'classnames';
import { Link } from 'react-browser-router';

type Props = {|
  loggedIn?: ?boolean,
|};
type State = {||};

class MenuBar extends React.Component<Props, State> {
  render() {
    const { loggedIn = false } = this.props;
    return (
      <Navbar className={cx('MenuBar_NavBarCustom')} expand='md'>
        <NavbarBrand href='/'>
          <img src={mantis} width={100} height={50} alt={'logo'} />
        </NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem className={cx('MenuBar_NavItem')}>
            <NavLink tag={Link} to={`/`}>
              Home
            </NavLink>
          </NavItem>
          <NavItem className={cx('MenuBar_NavItem')}>
            <NavLink tag={Link} to={`/network`}>
              Network
            </NavLink>
          </NavItem>
          <NavItem className={cx('MenuBar_NavItem')}>
            <NavLink tag={Link} to={`/user/settings`} className={'settings-page-step'}>
              Settings
            </NavLink>
          </NavItem>
          <NavItem className={cx('MenuBar_NavItem')}>
            {loggedIn === false ? (
              <NavLink tag={Link} to={`/login`}>
                Login
              </NavLink>
            ) : (
              <Button color='link' onClick={this.handleLogout}>
                Logout
              </Button>
            )}
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

  handleLogout = () => {
    localStorage.removeItem('apiToken');
    window.location.reload();
  };
}
export default MenuBar;
