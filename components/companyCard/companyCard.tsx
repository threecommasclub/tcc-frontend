import React from 'react';
import * as Starbucks from '../../static/starbucks.png';

type CompnayCardProps = {
  children: React.ReactNode;
};

const CompanyCard: React.FC<CompnayCardProps> = ({ children }: CompnayCardProps) => (
  <div className="bg-green-400 text-white p-6 rounded-lg h-auto relative">
    <div className="w-1/6 h-1/6 inline-block m-0 align-top">
      <img src={Starbucks} alt="companylogo" />
    </div>
    <div className="w-5/6 inline-block align-bottom pl-8">
      <div className="inline-block absolute top-3 right-5% top-1/10">test</div>
      <div className="block">
        <span className="text-2xl">{children}</span>
      </div>
      <div className=" block">
        <span className="text-base">{children}</span>
      </div>
    </div>
  </div>
);

export default CompanyCard;
