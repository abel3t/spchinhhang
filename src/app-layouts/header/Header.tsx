import React, { useState } from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { theme } from 'styles';

export default function Header() {
  return (
    <Wrapper>
      <StyledAppBar position="static">
        < Toolbar>
          < IconButton edge="start" color="inherit" aria-label="menu">
            <Logo/>
          </IconButton>
          <Input placeholder="Tìm kiếm" className="appbar__logo"/>
          <Button color="inherit" className="appbar__button">Liên hệ quảng cáo</Button>
        </Toolbar>
      </StyledAppBar>
    </Wrapper>
  );
}

const Logo = () => {
  return (
    <img
      style={{ width: 100, height: 60, color: '#fff' }}
      src="https://spchinhhang.s3-ap-southeast-1.amazonaws.com/logo.svg"
      alt=" Workflow"
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
`;

const StyledAppBar = styled(AppBar)`
  .appbar {
    &__logo {
      flex-grow: 1;
    }

    &__button {
      margin-right: 2px;
    }
  }
`;