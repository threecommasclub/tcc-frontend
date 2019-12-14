import React from 'react';
import Router from 'next/router';

type PropsType = {
  title: string;
};

const ReactPage = (props: PropsType) => (
  <div>
    <h1>{props.title}</h1>
    <p>This is React Page</p>
    <div>
      <button onClick={() => Router.push('/?history=react', '/')}>Home</button>
    </div>
  </div>
);

export default ReactPage;
