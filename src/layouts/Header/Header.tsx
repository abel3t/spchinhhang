import React, { useContext } from 'react';
import Router from 'next/router';
import { openModal } from '@redq/reuse-modal';
import SearchBox from 'components/SearchBox/SearchBox';
import FavoriteButton from 'components/FavoritePopup/FavoritePopup';

import { HOME_PAGE } from 'constants/navigation';
import HeaderWrapper, { HeaderLeftSide, Logo, StyledButton, HeaderRight } from './Header.style';
import Link from 'next/link';

import { MenuDropDown } from 'components/AllSvgIcon';
import LogoImage from 'image/logo.svg';

type HeaderProps = {
  style?: any
  className?: string
  token: string
  pathname: string
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const Header: React.FC<HeaderProps> = ({
  style,
  className,
  token,
  pathname,
  deviceType
}) => {
  const signInOutForm = () => {
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      closeComponent: '',
      transition: { duration: 0.1 },
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 678,
        height: 'auto'
      }
    });
  };

  return (
    <>
      <HeaderWrapper style={style} className={className}>
        <HeaderLeftSide>
          <Logo>
            <Link href={HOME_PAGE}>
              <a>
                <img src={LogoImage} alt='spchinhhang' width="120px" height="40px"/>
              </a>
            </Link>
          </Logo>
          <div className='ml-3'>
            <Logo>
              <MenuDropDown color="#fff"/>
              <span
                className=''
                style={{ color: '#fff' }}
              >
                Danh mục
              </span>
            </Logo>
          </div>
        </HeaderLeftSide>
        <SearchBox
          className='headerSearch'
          handleSearch={(value: any) => console.log('change', value)}
          onClick={() => console.log('Click')}
          placeholder='Search anything...'
          hideType={true}
          minimal={true}
          showSvg={true}
          style={{ width: '100%', height: '40px' }}
          value={''}
        />
        <HeaderRight>
          {deviceType.desktop && (
            <>
              <StyledButton
                className='btn-ads my-2'
                onClick={signInOutForm}
                title='Join'
              >
                <div className='mx-3 my-2'>
                  Liên Hệ Quảng Cáo
                </div>
              </StyledButton>
            </>
          )}
          <FavoriteButton className='favorite-btn' itemCount={0}/>
        </HeaderRight>
      </HeaderWrapper>
    </>
  );
};

export default Header;
