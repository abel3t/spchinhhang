import React, { useState } from 'react';
import { MainCategoriesWrapper } from './MainCategories.style';
import { FormattedMessage } from 'react-intl';
import { MenuIcon } from 'components/AllSvgIcon';

type MainCategoriesProps = {
  deviceType?: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}
export const MainCategories: React.FC<MainCategoriesProps> = ({
  deviceType
}) => {
  return (
    <MainCategoriesWrapper>
      <div className="bold d-flex">
        <div className='mr-2'>
          <MenuIcon/>
        </div>
        {/* <img className="mr-3" src={MenuIcon} alt="icon" /> */}
        <FormattedMessage
          defaultMessage="Danh mục sản phẩm"
          id="categoriesButtonText"
        />
      </div>
    </MainCategoriesWrapper>
  );
};
export default MainCategories;
