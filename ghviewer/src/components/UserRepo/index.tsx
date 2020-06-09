import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import { Repo } from './styles';

interface RepoProps {
  name: string;
  description: string;
  htmlUrl: string;
  stargazersCount: string;
}

const UserRepo: React.FC<RepoProps> = ({
  name,
  description,
  htmlUrl,
  stargazersCount,
}: RepoProps) => {
  return (
    <Repo href={htmlUrl}>
      <div>
        <strong>{name}</strong>
        <p>{description}</p>
      </div>
      <span>
        <AiOutlineStar size={20} />
        {stargazersCount}
      </span>
    </Repo>
  );
};

export default UserRepo;
