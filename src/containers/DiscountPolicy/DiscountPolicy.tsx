import React, { useState } from 'react'
import {
  DiscountPolicyWrapper, DiscountPolicyTable, PolicyRowWrapper
} from './DiscountPolicy.style'

type DiscountPolicyProps = {
  tgsSale: number,
  nccSale: number
}

type PolicyRowProps = {

  tgs: number,
  ncc: number,
  discount: any,
  unit_price: any
  currentTgsLevel: boolean,
  currentNccLevel: boolean
}

const SaleData = [
  {
    tgs: 500,
    ncc: 500,
    discount: '45%',
    unit_price: '506.000 đ'
  },
  {
    tgs: 200,
    ncc: 200,
    discount: '40%',
    unit_price: '552.000 đ'
  },
  {
    tgs: 100,
    ncc: 100,
    discount: '35%',
    unit_price: '598.000 đ'
  },
  {
    tgs: 50,
    ncc: 50,
    discount: '30%',
    unit_price: '644.000 đ'
  },
  {
    tgs: 20,
    ncc: 20,
    discount: '25%',
    unit_price: '710.000 đ'
  }
]

const PolicyRow: React.FC<PolicyRowProps> = ({ tgs, ncc, discount, unit_price, currentTgsLevel, currentNccLevel }) => {
  return <PolicyRowWrapper>
    <td className={`${currentTgsLevel ? 'tgs active' : ''}`}><span>{tgs}TR</span></td>
    <td className={`${currentNccLevel ? 'ncc active' : ''}`}><span>{ncc}TR</span></td>
    <td>{discount}</td>
    <td>{unit_price}</td>
  </PolicyRowWrapper>
}

export const DiscountPolicy: React.FC<DiscountPolicyProps> = ({ tgsSale, nccSale }) => {
  const getClosestLevel: any = (key, value) => {
    return SaleData.reduce(function (prev, curr) {
      return (Math.abs(curr[key] - value) < Math.abs(prev[key] - value) ? curr : prev);
    });
  }

  const currentTgsSaleLevel = getClosestLevel('tgs', tgsSale)
  const currentNccSaleLevel = getClosestLevel('ncc', nccSale)
  const currentTgsSaleLevelIndex = SaleData.findIndex(item => item.tgs === currentTgsSaleLevel.tgs)
  const currentNccSaleLevelIndex = SaleData.findIndex(item => item.ncc === currentNccSaleLevel.ncc)

  return (
    <DiscountPolicyWrapper>
      <h6 className="title bold">Chính sách chiết khấu</h6>
      <DiscountPolicyTable>
        <thead>
          <tr>
            <th>
              TGS
            </th>
            <th>DOANH SỐ NCC</th>
            <th>CHIẾT KHẤU</th>
            <th>ĐƠN GIÁ</th>
          </tr>
        </thead>
        <tbody>
          {SaleData.map((item, index) => <PolicyRow key={`sale-level-${index}`} {...item} currentTgsLevel={index === currentTgsSaleLevelIndex} currentNccLevel={index === currentNccSaleLevelIndex} />)}
        </tbody>
      </DiscountPolicyTable>
    </DiscountPolicyWrapper>
  )
}
export default DiscountPolicy
