import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import UserRepo from '../../components/UserRepo';
import {
  UserInfo,
  Info,
  ReposContainer,
  LoadingContainer,
  UserNotFound,
} from './styles';

import RepoProps from '../../interfaces/RepoProps';
import UserProps from '../../interfaces/UserProps';

interface RouteParam {
  user: string;
}

interface ApiRepoProps {
  name: string;
  description: string;
  fork: boolean;
  html_url: string; // eslint-disable-line camelcase
  stargazers_count: string; // eslint-disable-line camelcase
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<RouteParam>();

  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<RepoProps[]>();
  const [followers, setFolloweres] = useState<number>();
  const [following, setFollowing] = useState<number>();
  const [notFoundMessage, setNotFoundMessage] = useState('');

  setTimeout(() => {
    setNotFoundMessage('Usuário não encontrado.');
  }, 15000);

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
      })
      .catch(() => setUser(null));

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

      api
        .get(`${params.user}/repos`, {
          headers: {
            Authorization: 'TOKEN be8dfaa7e2e1f95d35b56e70ad07c101d44f2dab',
          },
        })
        .then((response) => {
          // if the repo is a fork returns null
          const unfilteredRepos = response.data.map((repo: ApiRepoProps) => {
            const {
              name,
              description,
              fork,
              html_url: htmlUrl,
              stargazers_count: stargazersCount,
            } = repo;

            if (!fork) {
              return {
                name,
                description,
                htmlUrl,
                stargazersCount,
              } as RepoProps;
            }
            return null;
          });

          // removes the nulls of the array
          const filteredRepos = unfilteredRepos.filter(Boolean);

          // orders the repos by the number of stars
          const orderedRepos = filteredRepos.sort(
            (a: RepoProps, b: RepoProps) =>
              (Number(b.stargazersCount) - Number(a.stargazersCount)),
          );

          setRepos(orderedRepos);
        });
    }
  }, [params.user, user]);

  return (
    <>
      <Header />
      {!!user ? (
        <>
          {!!repos ? (
            <>
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
                    <strong>
                      {!!user.email ? user.email : 'Email privado'}
                    </strong>
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
              <ReposContainer>
                {repos.map((repo) => (
                  <UserRepo
                    key={repo.htmlUrl}
                    name={repo.name}
                    description={repo.description}
                    htmlUrl={repo.htmlUrl}
                    stargazersCount={repo.stargazersCount}
                  />
                ))}
              </ReposContainer>
            </>
          ) : (
            <LoadingContainer>
              <FiLoader size={32} />
            </LoadingContainer>
          )}
        </>
      ) : (
        <UserNotFound>{notFoundMessage}</UserNotFound>
      )}
    </>
  );
};

export default Details;
