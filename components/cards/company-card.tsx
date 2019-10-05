import React from 'react';

type CompanyCardProps = {
  children: React.ReactNode;
};

const CompanyCard = ({ children }: CompanyCardProps) => (
  <div className="p-5 rounded-exlg h-auto relative shadow before">
    <div className="w-1/6 h-1/6 inline-block m-0 align-middle">
      {/* <img src="/static/starbucks.png" alt="company logo" /> */}
      <div className="rounded-full bg-gray-600 w-16 h-16"></div>
    </div>
    <div className="w-5/6 inline-block align-middle pl-8">
      <div className="inline-block absolute top-3 right-05 top-1/10">bookmark</div>
      <div className="block">
        <span className="text-2xl">{children}</span>
      </div>
      <div className=" block">
        <span className="text-base">{children}</span>
      </div>
      <div className=" block py-2">
        <span className="text-base">11th Oct 2019</span>
      </div>
    </div>
  </div>
);

export default CompanyCard;
