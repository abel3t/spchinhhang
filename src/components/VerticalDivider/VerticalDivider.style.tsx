import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DividerWrapper = styled.div`
    color: ${themeGet('colors.lightDarkColor', 'grey')};
`
export default DividerWrapper