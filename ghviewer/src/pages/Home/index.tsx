import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

import { Title, Form, UserCardsContainer, Error } from './styles';

import UserProps from '../../interfaces/UserProps';

const Home: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<UserProps[]>(() => {
    const savedUsers = localStorage.getItem('@GithubViewer:users');

    if (savedUsers) {
      return JSON.parse(savedUsers);
    }
    return [];
  });

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('@GithubViewer:users', JSON.stringify(users));
  }, [users]);

  async function handleAddUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('digite o nome do usuário');
      return;
    }

    try {
      const response = await api.get(newUser);

      const {
        login,
        name,
        bio,
        email,
        avatar_url: avatarUrl,
        followers_url: followers,
        following_url: following,
      } = response.data;

      setUsers([
        ...users,
        { login, name, bio, email, avatarUrl, followers, following },
      ]);
      setInputError('');
      history.push(`/details/${login}`);
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <Header />
      <Title>Procure por usuários do Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddUser}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Nome de usuário"
        />
        <button type="submit">Procurar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <UserCardsContainer>
        {users.map((user) => (
          <UserCard
            login={user.login}
            name={user.name}
            bio={user.bio}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </UserCardsContainer>
    </>
  );
};

export default Home;
