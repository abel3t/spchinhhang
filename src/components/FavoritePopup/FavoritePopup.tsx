import React from 'react';
import { CountButton } from '../CartPopup/CartPopup.style';
import { NotificationIcon } from 'components/AllSvgIcon';

type FavoriteButtonProps = {
  style?: React.CSSProperties
  itemCount?: number
  className?: string
  onClick?: (e: any) => void
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  itemCount,
  style,
  onClick,
  className
}) => (
  <CountButton style={style} onClick={onClick} className={className}>
    <NotificationIcon/>
    <span className="item-count">{itemCount}</span>
  </CountButton>
);

export default FavoriteButton;
