import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';
import { UserInfo, Info } from './styles';

interface RouteParam {
  user: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<RouteParam>();

  return (
    <>
      <Header />
      <UserInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/48018647?v=4"
            alt="user"
          />
          <div>
            <strong>Gabriel Nascimento</strong>
            <p>Front End Developer</p>
          </div>
        </header>
        <div className="infos">
          <Info>
            <p>Email</p>
            <strong>gabriel.nbds@gmail.com</strong>
          </Info>
          <Info>
            <p>Followers</p>
            <strong>11</strong>
          </Info>
          <Info>
            <p>Following</p>
            <strong>8</strong>
          </Info>
        </div>
      </UserInfo>
    </>
  );
};

export default Details;
