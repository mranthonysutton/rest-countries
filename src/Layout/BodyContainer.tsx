import React from 'react';

export interface BodyContainerProps {
  children?: React.ReactNode;
}

const BodyContainer = (props: BodyContainerProps) => {
  return <div className="container mx-auto mt-10">{props.children}</div>;
};

export default BodyContainer;
