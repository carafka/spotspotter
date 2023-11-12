import { Navigate, Outlet, useParams } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const auth = { token: true };
  const { companyName } = useParams();

  if (companyName)
    return auth.token ? <Outlet /> : <Navigate to={`/${companyName}/auth`} />;
  else return <>Brak organizacji</>;
};
