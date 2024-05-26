import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { TESTIMONIALS } from '@/constants';
import CustomHeading from '../CustomHeading/CustomHeading';
import VerticalCarousel from '../VerticalCarousel/VerticalCarousel';

const Testimonials: React.FC = () => {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      <CustomHeading heading="Client Testimony" />
      <VerticalCarousel options={OPTIONS} slides={TESTIMONIALS} />
        {/* {TESTIMONIALS.map((item, index) => (
          <div key={index} style={{ width: '100%', height: '284px', borderRadius: '20px', border: '1px solid black', margin: '10px 0' }}>
            {item.name}
          </div>
        ))} */}
    </div>
  );
};

export default Testimonials;
