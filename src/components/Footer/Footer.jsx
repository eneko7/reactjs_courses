import React from 'react';
import styled from 'styled-components';
import { SCREENPOINTS, PADINGS } from '../../assets/constants/consts';
import Logo from '../Logo';

const FooterContainer = styled.footer`
  background-color: #414141;
  padding: 1% 15%;
  width: 100%;
  position: fixed;
  bottom: 0;

  @media (max-width: ${SCREENPOINTS.fulhdDesktop}) {
    padding: 1% ${PADINGS.leftPaddingLaptop};
  }

  @media (max-width: ${SCREENPOINTS.laptop}) {
    padding: 1% ${PADINGS.leftPaddingTablet};
  }
  
  @media (max-width: ${SCREENPOINTS.tablet}) {
    padding: 1% 5%;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Logo />
  </FooterContainer>
);

export default Footer;
