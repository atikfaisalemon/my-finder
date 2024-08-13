import { useState } from "react";
import GitHubUser from "./GitHubUser";

const FindUser = () => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1 className="text-2xl font-mono">Find User</h1>
      <form>
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
          <button className="border-4 px-5 rounded-lg hover:bg-slate-500">
            Find
          </button>
        </div>
      </form>
      <div className="font-mono">
        {userName ? (
          <GitHubUser username={userName} />
        ) : (
          <p>Please insirt unermane..!!</p>
        )}
      </div>
    </div>
  );
};
export default FindUser;
