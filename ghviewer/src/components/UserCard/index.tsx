import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from './styles';

interface UserProps {
  name: string;
  bio: string;
  avatarUrl: string;
  login: string;
}

const UserCard: React.FC<UserProps> = ({
  name,
  bio,
  avatarUrl,
  login,
}: UserProps) => {
  return (
    <Link to={`/details/${login}`}>
      <Card>
        <img src={avatarUrl} alt="user" />
        <div>
          <strong>{name}</strong>
          <p>{bio}</p>
        </div>
      </Card>
    </Link>
  );
};

export default UserCard;
