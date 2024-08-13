import { useState } from "react";
import GitHubUser from "./GitHubUser";
import useGithub from "./hooks/useGithub";

const FindUser = () => {
  const [userName, setUserName] = useState("");
  const [user, error, loading, onButton] = useGithub(userName);

  return (
    <div>
      <h1 className="text-2xl font-mono">Find User</h1>
      <div>
        <div className="flex flex-col gap-6 items-center">
          <label htmlFor=""></label>
          <input
            className="border-2 p-2 w-1/4 font-mono"
            type="text"
            placeholder="Enter username.."
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button
            className="border-4 px-5 rounded-lg hover:bg-slate-500"
            onClick={onButton}
          >
            Find
          </button>
        </div>
      </div>
      <div className="font-mono">
        {userName ? (
          <GitHubUser user={user} error={error} loading={loading} />
        ) : (
          <p>Please insirt unermane..!!</p>
        )}
      </div>
    </div>
  );
};
export default FindUser;
