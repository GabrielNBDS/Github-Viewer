import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import { UserInfo, Info } from './styles';

import RepoProps from '../../interfaces/RepoProps';
import UserProps from '../../interfaces/UserProps';

interface RouteParam {
  user: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<RouteParam>();

  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<RepoProps[]>();
  const [followers, setFolloweres] = useState<number>();
  const [following, setFollowing] = useState<number>();

  useEffect(() => {
    api
      .get(params.user, {
        headers: {
          Authorization: 'TOKEN be8dfaa7e2e1f95d35b56e70ad07c101d44f2dab',
        },
      })
      .then((response) => {
        const {
          login,
          name,
          bio,
          email,
          avatar_url: avatarUrl,
        } = response.data;
        setUser({ login, name, bio, email, avatarUrl });
      });

    if (!!user) {
      api
        .get(`${params.user}/followers`, {
          headers: {
            Authorization: 'TOKEN be8dfaa7e2e1f95d35b56e70ad07c101d44f2dab',
          },
        })
        .then((response) => setFolloweres(response.data.length));

      api
        .get(`${params.user}/following`, {
          headers: {
            Authorization: 'TOKEN be8dfaa7e2e1f95d35b56e70ad07c101d44f2dab',
          },
        })
        .then((response) => setFollowing(response.data.length));
    }
  }, [params.user, user]);

  return (
    <>
      <Header />
      {!!user ? (
        <UserInfo>
          <header>
            <img src={user.avatarUrl} alt="user" />
            <div>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </div>
          </header>
          <div className="infos">
            <Info>
              <p>Email</p>
              <strong>{!!user.email ? user.email : 'Email privado'}</strong>
            </Info>
            <Info>
              <p>Followers</p>
              <strong>{followers}</strong>
            </Info>
            <Info>
              <p>Following</p>
              <strong>{following}</strong>
            </Info>
          </div>
        </UserInfo>
      ) : null}
    </>
  );
};

export default Details;
