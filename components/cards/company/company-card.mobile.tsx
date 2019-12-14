import React from 'react';

type PropsType = {
  name: string;
  address: string;
};

const tags = ['Fintech', 'Employ Benefit', 'Consulting'];

export const CompanyCard = ({ name, address }: PropsType) => (
  <div className="p-10">
    <p className="text-gray-600 text-2xl font-bold my-20 ml-10 mb-30">Companies</p>
    <div className="p-6 rounded-exlg h-auto relative shadow-md border-gray-300 border mt-10 mb-5">
      <div className="w-1/6 h-1/6 inline-block m-0 align-middle">
        <div className="rounded-full bg-gray-600 w-60 h-60 absolute top-in20 shadow-md"></div>
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
      <div className="inline-block ml-10 mt-10">
        {tags.map((tag, index) => (
          <div className="inline-block rounded-full bg-indigo-200 mr-5 my-10" key={index}>
            <span className="font-bold text-sm text-indigo-900 px-10">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CompanyCard;
