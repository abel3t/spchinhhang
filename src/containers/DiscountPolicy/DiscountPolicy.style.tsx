import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const DiscountPolicyWrapper = styled.div`
    .title  {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.4px;
        color: #0F1727;
        margin-bottom: 8px;
    }
`

export const PolicyRowWrapper = styled.tr`
    td {
        &.active {
            > span {
                padding: 3px 12px;
                background: #FFFFFF;
                box-shadow: 0px 5px 15px rgba(124, 133, 152, 0.15);
                border-radius: 10px;
                margin-left: -12px;
                margin-right: -12px;
            }
            &.tgs {
                > span {
                    border: 1px solid #E21838;
                }
            }
            &.ncc {
                > span {
                    border: 1px solid #0076FF;
                }
            }
        }
    }
`
export const DiscountPolicyTable = styled.table`
    background-color: transparent;
    letter-spacing: 0.8px;
    font-size: 10px;
    text-transform: uppercase;
    thead {
        tr {
             th {
                color: #8E8E93;
                opacity: 0.87;
                line-height: 16px;
                padding: 0 16px;
                &:last-of-type {
                    padding-right: 0;
                }
                &:first-of-type {
                    padding-left: 0;
                }
             }
        }
    }
    tbody {
        tr {
            td {
                color: #090E18;
                opacity: 0.87;
                line-height: 24px;
                padding: 0 16px;
                &:last-of-type {
                    padding-right: 0;
                }
                &:first-of-type {
                    padding-left: 0;
                }
            }
        }
    }
`