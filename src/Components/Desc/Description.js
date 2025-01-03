import React from 'react';
import './Description.css';
import FeatureBox from './FeatureBox';
import img1 from '../../asserts/img1.png'; // Update path as necessary
import img2 from '../../asserts/img2.png'; // Add additional images as needed
import img3 from '../../asserts/img3.png'; // Add additional images as needed

const Description = () => {
  const features = [
    {
      imgSrc: img1,
      title: 'Original Recipes',
      description:
        'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae',
    },
    {
      imgSrc: img2,
      title: 'Quality Foods',
      description:
        'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae',
    },
    {
      imgSrc: img3,
      title: 'Fastest Delivery',
      description:
        'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit felis magna dolor vitae',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            iconClass={feature.iconClass}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Description;
