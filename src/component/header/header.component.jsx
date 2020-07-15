import React from 'react';

import { HeaderContainer, HeaderNavigator, HeaderSpan, HeaderImage } from './header.styles';

const Header = () => (
  <HeaderNavigator>
    <HeaderContainer>
      <HeaderSpan>
        <HeaderImage src="https://flashlink.netlify.app/flash.gif"/>
        Link Add
      </HeaderSpan>
    </HeaderContainer>
  </HeaderNavigator>
);

export default Header;