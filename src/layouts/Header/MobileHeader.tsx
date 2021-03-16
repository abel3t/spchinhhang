import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { openModal, closeModal } from '@redq/reuse-modal';
import MobileDrawer from './MobileDrawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
  Logo,
  SelectedLang,
  LanguageItem,
  LangSwitcher,
  Flag
} from './MobileHeader.style';
import { FormattedMessage } from 'react-intl';
import SearchBox from 'components/SearchBox/SearchBox';
import LogoImage from 'image/logo.svg';
import {
  HOME_PAGE,
  GROCERY_PAGE,
  MAKEUP_PAGE,
  CLOTHING,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE
} from 'constants/navigation';
import FavoriteButton from 'components/FavoritePopup/FavoritePopup';
import {
  SearchIcon,
  LongArrowLeft,
  DEFlag,
  CNFlag,
  USFlag,
  ILFlag,
  VNFlag,
  ESFlag,
  SAFlag
} from 'components/AllSvgIcon';

type MobileHeaderProps = {
  className?: string;
  pathname?: string;
  closeSearch?: any;
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
};
type SearchModalProps = {
  state?: any;
  handleSearch?: any;
  pathname?: string;
};

const SearchModal: React.FC<SearchModalProps> = ({
  state,
  pathname,
  handleSearch
}) => {
  const router = useRouter();
  const [ text, setText ] = useState(state.text || '');
  const handleSearchInput = (text: string) => {
    setText(text);
  };
  const { page, ...urlState } = state;

  const handleClickSearchButton = () => {
    handleSearch(text);
    router.push({
      pathname: pathname === '/' ? '/grocery' : pathname,
      query: {
        ...urlState,
        text
      }
    });
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type='submit' onClick={() => closeModal()}>
        <LongArrowLeft/>
      </SearchModalClose>
      <SearchBox
        className='header-modal-search'
        bordered={false}
        inputStyle={{ height: 35 }}
        buttonText=''
        placeholder='Search'
        handleSearch={handleSearchInput}
        value={text}
        onClick={handleClickSearchButton}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader: React.FC<MobileHeaderProps> = props => {
  const { className, pathname, closeSearch, deviceType } = props;
  const isHomePage = pathname === HOME_PAGE;

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className}>
        <DrawerWrapper>
          <MobileDrawer deviceType={deviceType}/>
        </DrawerWrapper>
        <LogoWrapper>
          <Logo>
            <Link href={HOME_PAGE}>
              <a>
                <img src={LogoImage} alt='spchinhhang'/>
              </a>
            </Link>
          </Logo>
        </LogoWrapper>
        <FavoriteButton className="favorite-btn is-mobile" itemCount={0}/>

        {isHomePage ? (
          <SearchWrapper
            onClick={() => console.log('search')}
            className='searchIconWrapper'
          >
            <SearchIcon/>
          </SearchWrapper>
        ) : null}
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
