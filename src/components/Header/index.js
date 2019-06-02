import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { columnFlex } from '../../styles/mixins';
import { fontSize_1, fontSize_4 } from '../../styles/variables';

const Header = ({ title, IconScreen, description }) => {
  const Header = styled.div`
    ${columnFlex}
    flex: 1;
    color: #fff;
    z-index: 10;
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  `;

  const Title = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.color || '#333'};
  `;

  const Desc = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.color || '#333'};
    text-align: center;
  `;

  return (
    <Header>
      {/* <IconScreen color="white" width="60px" /> */}
      <Title color="white">{title}</Title>
      <Desc color="white">{description}</Desc>
    </Header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  IconScreen: PropTypes.any,
  description: PropTypes.string,
};

export default Header;
