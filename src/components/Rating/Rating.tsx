import React from 'react';
import RatingComponent, { RatingComponentProps } from 'react-rating'
// import { StarIcon, StarOutlineIcon } from 'components/AllSvgIcon'
import StarIcon from 'image/ic_star.svg'
import StarOutlineIcon from 'image/ic_star_outline.svg'

type RatingProps = {

};

const Rating: React.FC<RatingComponentProps & RatingProps> = ({ fractions = 2, emptySymbol = <img className="icon" width="16" height="16" src={StarOutlineIcon} alt="empty" />, fullSymbol = <img className="icon" width="16" height="16" src={StarIcon} alt="fill" />, ...props }) => {
    return (
        <RatingComponent fractions={fractions} emptySymbol={emptySymbol} fullSymbol={fullSymbol} {...props} />
    );
};

export default Rating;
