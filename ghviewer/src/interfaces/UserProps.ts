export default interface UserProps {
  login: string;
  name: string;
  bio: string;
  email?: string;
  avatarUrl: string;
  followers?: string;
  following?: string;
}
