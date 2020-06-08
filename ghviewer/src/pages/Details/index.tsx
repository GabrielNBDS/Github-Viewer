import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RouteParam {
  user: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<RouteParam>();

  return <h1>Details {params.user}</h1>;
};

export default Details;
