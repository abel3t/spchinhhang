import React from 'react';
import gql from 'graphql-tag';
import { Scrollbars } from 'react-custom-scrollbars';
import Popover from 'components/Popover/Popover';
import CategoryDropdown from 'components/CategoryDropdown/SpringDropdown';
import { ArrowDropDown, CategoryIcon } from 'components/AllSvgIcon';

import {
  CategoryWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper
} from './Sidebar.style';
import {
  Accessories,
  BathOil,
  BeautyHealth,
  Beverage,
  Breakfast,
  Cooking,
  Dairy,
  Deodorent,
  Eyes,
  Face,
  FacialCare,
  FruitsVegetable,
  HandBags,
  HomeCleaning,
  LaptopBags,
  Lips,
  MeatFish,
  OralCare,
  OuterWear,
  Pants,
  PetCare,
  Purse,
  ShavingNeeds,
  Shirts,
  ShoulderBags,
  Skirts,
  Snacks,
  Tops,
  Wallet,
  WomenDress
} from 'components/AllSvgIcon';

const GET_CATEGORIES = gql`
  query getCategories($type: String!) {
    categories(type: $type) {
      id
      title
      slug
      icon
      children {
        id
        title
        slug
      }
    }
  }
`;

let iconTypes = {
  Accessories: Accessories,
  BathOil: BathOil,
  BeautyHealth: BeautyHealth,
  Beverage: Beverage,
  Breakfast: Breakfast,
  Cooking: Cooking,
  Dairy: Dairy,
  Deodorent: Deodorent,
  Eyes: Eyes,
  Face: Face,
  FacialCare: FacialCare,
  FruitsVegetable: FruitsVegetable,
  HandBags: HandBags,
  HomeCleaning: HomeCleaning,
  LaptopBags: LaptopBags,
  Lips: Lips,
  MeatFish: MeatFish,
  OralCare: OralCare,
  OuterWear: OuterWear,
  Pants: Pants,
  PetCare: PetCare,
  Purse: Purse,
  ShavingNeeds: ShavingNeeds,
  Shirts: Shirts,
  ShoulderBags: ShoulderBags,
  Skirts: Skirts,
  Snacks: Snacks,
  Tops: Tops,
  Wallet: Wallet,
  WomenDress: WomenDress
};

type SidebarCategoryProps = {
  deviceType: {
    mobile: string;
    tablet: string;
    desktop: boolean;
  };
  type: string;
};

const SidebarCategory: React.FC<SidebarCategoryProps> = ({
  deviceType: { mobile, tablet, desktop },
  type
}) => {

  const data = {
    categories: []
  };
  return (
    <CategoryWrapper>
      {(mobile || tablet) && (
        <Popover
          handler={
            <PopoverHandler>
              <div>
                <CategoryIcon/>
                Select your Category
              </div>
              <div>
                <ArrowDropDown/>
              </div>
            </PopoverHandler>
          }
          className="category-popover"
          content={
            <>
              <CategoryDropdown
                items={data.categories}
                iconList={iconTypes}
                handleCategorySelection={(slug: any) => console.log('slug')}
                selectedQueries={() => console.log('query')}
              />
            </>
          }
        />
      )}
      {desktop && (
        <>
          <PopoverWrapper>
            <Popover
              handler={
                <PopoverHandler>
                  <div>
                    <CategoryIcon/>
                    Select your Category
                  </div>
                  <div>
                    <ArrowDropDown/>
                  </div>
                </PopoverHandler>
              }
              className="category-popover"
              content={
                <>
                  <CategoryDropdown
                    items={data.categories}
                    iconList={iconTypes}
                    handleCategorySelection={(slug: any) => console.log(slug)
                    }
                    selectedQueries={() => console.log('query')}
                  />
                </>
              }
            />
          </PopoverWrapper>

          <SidebarWrapper>
            <Scrollbars universal autoHide autoHeight autoHeightMax={688}>
              <CategoryDropdown
                items={data.categories}
                iconList={iconTypes}
                handleCategorySelection={(id: any) => console.log(id)}
                selectedQueries={() => console.log('select')}
              />
            </Scrollbars>
          </SidebarWrapper>
        </>
      )}
    </CategoryWrapper>
  );
};

export default SidebarCategory;
