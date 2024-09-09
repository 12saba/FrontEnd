import { Outlet, useParams } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
      <h1>userAuth page</h1>
      <Outlet />
    </>
  );
};

export default UserAuth;
