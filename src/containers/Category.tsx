import React from 'react';
import Carousel from 'react-multi-carousel';

const Category = () => {
  return (
    <>
      <CarouselCategory className="w-full h-40 bg-white mt-1.5" items={[ 1, 2, 3, 4, 5 ]}/>
    </>
  );
};

type CarouselCategoryProps = {
  className?: string,
  items: Array<unknown>
}

const CarouselCategory = ({ className = '', items }: CarouselCategoryProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };
  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[ 'tablet', 'mobile' ]}
        dotListClass="custom-dot-list-style"
        itemClass="text-center"
        className={className}
      >
        {
          items.map((item, index) => {
            return (
              <CategoryCard item={item} key={index}/>
            );
          })
        }
      </Carousel>
    </>
  );
};

type CategoryCardProps = {
  item: unknown,
  key: number
}
const CategoryCard = ({ item, key }: CategoryCardProps) => {
  return (
    <a href="#" key={key}>
      <div>Image {item}</div>
      <span>
        Description
      </span>
    </a>
  );
};

export default Category;