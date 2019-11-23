import React from 'react';
import toronto from '../../../public/toronto-pic.png';

type CollectionsCardProps = {
  title: string;
};

const dummyData = [
  'Top 10\nMost Impactful\nAI\nStartups in Toronto',
  'Top 6\nFast Growing\nFintech\nStartups in New York',
  'Top 7\nFast Growing\nFood Tech\nStartups in Vancouver',
];

export const CollectionsCard = ({ title }: CollectionsCardProps) => (
  <div className="w-full h-full mx-auto">
    {dummyData.map((data, index) => (
      <div className="bg-orange-500 p-5 rounded-exlg w-10/12 mx-auto my-4" key={index}>
        <div className="w-full">
          {data.split('\n').map((item, i) => (
            <span className="text-white font-bold text-lg whitespace-no-wrap overflow-hidden" key={i}>
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CollectionsCard;
