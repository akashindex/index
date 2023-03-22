import { Carousel, Image } from 'antd';
import React from 'react';
import './Carousel.scss';

const CarouselComponent = () => {

  const onChange = () => {
    
  }
  return (
    <div className="carousel-component">
      <Carousel afterChange={onChange} autoplay>
          <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;