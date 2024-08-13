import useGithub from "./hooks/useGithub";

const GitHubUser = ({ user, loading, error }) => {
  return (
    <>
      <div>{loading && <p>Loading...</p>}</div>
      <div>{error && <p>{error.message}</p>}</div>

      <div className="flex justify-center mt-20 ">
        <div className="flex flex-col justify-center w-[400px] border-4 p-5 rounded-xl border-black-400">
          {user && (
            <ul>
              <li>
                <div className="flex justify-center mb-6">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src={user.avatar_url}
                    alt=""
                  />
                </div>
              </li>
              <li>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
              </li>
              <li>
                <p>
                  <strong>Bio:</strong> {user.bio}
                </p>
              </li>
              <li>
                <p>
                  <strong>Followers:</strong> {user.followers}
                </p>
              </li>
              <li>
                <p>
                  <strong>Following:</strong>
                  {user.following}
                </p>
                <p>
                  <strong>Blog :</strong>
                  {user.blog}
                </p>
                <p>
                  <strong>Public Repos :</strong>
                  {user.public_repos}
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default GitHubUser;
