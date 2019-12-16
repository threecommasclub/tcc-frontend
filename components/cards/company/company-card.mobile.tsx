import React, { Fragment } from 'react';

type PropsType = {
  companyData: any;
};

export const CompanyCard = (props: PropsType) => (
  <Fragment>
    <div className="p-10">
      {console.log('props here?', props)}
      <p className="text-gray-600 text-2xl font-bold my-20 ml-10 mb-30">Companies</p>
      {props.companyData.map((data, index) => (
        <div
          className="p-6 rounded-exlg h-auto relative shadow-md border-gray-300 border mt-10 mb-30 bg-white"
          key={index}
        >
          <div className="w-1/6 h-1/6 inline-block m-0 align-middle">
            <div className="rounded-full bg-gray-600 w-60 h-60 absolute top-in20 shadow-md "></div>
          </div>
          <div className="w-5/6 inline-block align-middle pl-8 ">
            <div className="inline-block absolute top-3 right-05 top-1/10">bookmark</div>
            <div className="block">
              <span className="text-lg font-bold">{data.name}</span>
            </div>
            <div className=" block  mb-5">
              <span className="text-base text-gray-600 font-regular">{data.address}</span>
            </div>
          </div>
          <div className="inline-block ml-10 mt-10">
            {data.tags.map((tag, i) => (
              <div className="inline-block rounded-full bg-indigo-200 mr-5 my-10" key={i}>
                <span className="font-bold text-sm text-indigo-900 px-10">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Fragment>
);

export default CompanyCard;
