import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from 'common/components/UIElements/Logo';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/assets/image/charity/logo.png';
import heartImage from 'common/assets/image/charity/heart-red.png';
import { useRouter } from "next/dist/client/router";

const  include_list = ['/']
const Navbar = () => {
  let overRide=false;
  let {pathname} = useRouter()
  if(!include_list.includes(pathname)){
    overRide = true
    console.log(pathname);
  }
  return (
    <NavbarWrapper className={overRide? 'navbar navbar-inherit':'navbar'}>
      <Container fullWidth={true}>
        <Logo
          href="/charity"
          logoSrc={logoImage}
          className="logo"
          title="Charity React Next Landing"
        />
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#donate" offset={81}>
            Adopt a Child
          </AnchorLink>
          <Button>
            <span className="text">Our Doner</span>
            <Image src={heartImage?.src} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
