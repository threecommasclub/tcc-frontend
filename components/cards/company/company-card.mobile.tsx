import React from 'react';

type CompanyCardProps = {
  name: string;
  address: string;
};

const tags = ['Fintech', 'Employ Benefit', 'Consulting'];

export const CompanyCard = ({ name, address }: CompanyCardProps) => (
  <div className="p-5 rounded-exlg h-auto relative shadow-md border-gray-300 border mt-10 mb-5">
    <div className="w-1/6 h-1/6 inline-block m-0 align-middle">
      <div className="rounded-full bg-gray-600 w-16 h-16 absolute top-in20 shadow-md"></div>
    </div>
    <div className="w-5/6 inline-block align-middle pl-8">
      <div className="inline-block absolute top-3 right-05 top-1/10">bookmark</div>
      <div className="block">
        <span className="text-lg font-bold">{name}</span>
      </div>
      <div className=" block  mb-5">
        <span className="text-base text-gray-600 font-regular">{address}</span>
      </div>
    </div>
    {tags.map((tag, index) => (
      <div className="inline-block rounded-full bg-gray-500 mr-2 my-1" key={index}>
        <span className="font-bold text-base text-white px-4">{tag}</span>
      </div>
    ))}
  </div>
);

export default CompanyCard;
