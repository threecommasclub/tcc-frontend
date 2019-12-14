import React from 'react';

type PropsType = {
  dummyData: string[];
};

export const CollectionsCard = (props: PropsType) => (
  <div className="w-full h-full mx-auto">
    {props.dummyData.map((data, index) => (
      <div className="bg-orange-500 p-20 rounded-exlg w-10/12 mx-auto my-4 mb-20" key={index}>
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
