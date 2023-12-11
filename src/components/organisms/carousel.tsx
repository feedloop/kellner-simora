import React from 'react';
import Slider from 'react-slick';
import { TestimonialList } from '@/constants/lists';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Text } from '@chakra-ui/react';
import { COLOR_PRIMARY } from '@/constants/ui';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: `slick-dots`,
  };
  return (
    <div>
      <style>
        {`.slick-dots li.slick-active button:before {
          opacity: .75;
          color:${COLOR_PRIMARY};
        }
        .slick-dots li button:before {
          font-size: 10px;
        }
        `}
      </style>
      <Slider {...settings}>
        {TestimonialList.map((item, index) => (
          <div key={index} className=' tw-pb-[40px]'>
            <Text
              textAlign='center'
              lineHeight={{ base: '1.75rem', sm: '1.875rem' }}
              fontSize={{ base: '1.125rem', sm: '1.25rem' }}
              maxW={{ sm: '95%' }}
              fontWeight={500}
            >
              {item.headDesc}
            </Text>
            <Text
              textAlign='center'
              mt={'16px'}
              lineHeight={{ base: '1.75rem', sm: '1.875rem' }}
              fontSize={'18px'}
              maxW={{ sm: '95%' }}
              color={'#747474'}
              fontWeight={500}
            >
              {item.title}
            </Text>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
