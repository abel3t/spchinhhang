import React, { useContext } from 'react';
import { openModal } from '@redq/reuse-modal';
import { Drawer } from 'antd';
import {
  HamburgerIcon,
  DrawerClose
} from './MobileHeader.style';
import UserImage from 'image/user.jpg';

import {
  ORDER_RECEIVED,
  HELP_PAGE,
  OFFER_PAGE
} from 'constants/navigation';
import { CloseIcon } from '../../components/AllSvgIcon';

const DrawerMenuItems = [
  {
    id: 1,
    intlLabelId: 'navlinkDeal',
    label: 'Deal tốt mỗi ngày',
    href: '/deals'
  },
  {
    id: 2,
    intlLabelId: 'navlinkHelp',
    label: 'Hỗ trợ khách hàng',
    href: '/support'
  },
  {
    id: 3,
    intlLabelId: 'navlinkPromotion',
    label: 'Ưu đãi khi mua hàng tại Thế Giới Sỉ',
    href: '/promotions'
  },
  {
    id: 4,
    intlLabelId: 'navlinkOrders',
    label: 'Theo dõi đơn hàng',
    href: '/order'
  },
  {
    id: 5,
    intlLabelId: 'navlinkOrderReceived',
    label: 'Received',
    href: ORDER_RECEIVED
  },
  {
    id: 6,
    intlLabelId: 'navlinkHelp',
    label: 'Help',
    href: HELP_PAGE
  },
  {
    id: 7,
    intlLabelId: 'navlinkOffer',
    label: 'Offer',
    href: OFFER_PAGE
  }
];
type MobildeDrawerProps = {
  deviceType?: any
}
const MobileDrawer: React.FunctionComponent<MobildeDrawerProps> = ({ deviceType }) => {
  const signInOutForm = () => {

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      closeComponent: '',
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
    <Drawer
      width="316px"
      drawerHandler={
        <HamburgerIcon>
          <span/>
          <span/>
          <span/>
        </HamburgerIcon>
      }
      open={false}
      toggleHandler={() => console.log('click')}
      closeButton={
        <DrawerClose>
          <CloseIcon/>
        </DrawerClose>
      }>
    </Drawer>
  );
};

export default MobileDrawer;
