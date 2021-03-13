import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const MainCategoriesWrapper = styled.div`
    cursor: pointer;
    background-color: ${themeGet('colors.primary')};
    font-weight: bold;
    padding-left: 60px !important;
    @media (max-width: 1400px) {
      padding-left: 40px !important;
    }
    @media (max-width: 991px) {
      padding-left: 15px !important;
    }
`;
