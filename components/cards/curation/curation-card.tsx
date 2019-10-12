import React from 'react';

type CurationProps = {
  titleImage: HTMLImageElement;
  title: string;
};

const CurationCard = ({ titleImage, title }: CurationProps) => (
  <div className="w-full shadow p-6">
    <div className="w-full">{title}</div>
  </div>
);

export default CurationCard;
