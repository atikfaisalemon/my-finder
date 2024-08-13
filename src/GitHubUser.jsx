import useGithub from "./hooks/useGithub";

const GitHubUser = ({ username }) => {
  const [user, error, loading] = useGithub(username);
  return (
    <>
      <div>{loading && <p>Loading...</p>}</div>
      <div>{error && <p>{error.message}</p>}</div>
      <div className="flex flex-col w-300">
        {user && (
          <ul>
            <img
              className="w-100 h-100 rounded-full"
              src={user.avatar_url}
              alt=""
            />
            <li>
              <p> Name: {user.name}</p>
            </li>
            <li>
              <p> Bio: {user.bio}</p>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
export default GitHubUser;
