import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const ProductCardWrapper = styled(Link)`
  height: 312px;
  box-sizing: border-box;
  cursor: pointer;
`;

const StyledCard = styled(Card)`
  padding: 12px 16px;
  background-color: #F4F4F4;
  box-shadow: none;

  &:hover {
    background-color: #fff;
  }
`;

const ProductCard = () => {
  return (
    <ProductCardWrapper href="/product/1">
      <StyledCard>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://salt.tikicdn.com/cache/280x280/ts/product/83/1d/47/b6ee30f0007f9d8813b8abaa0f101dd8.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate
          </Typography>
        </CardContent>
      </StyledCard>
    </ProductCardWrapper>
  );
};

export default ProductCard;