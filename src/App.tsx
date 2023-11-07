import { Route, Routes } from "react-router-dom";

import { Login } from "@/auth/pages";
// import { ProtectedRoutes } from "@/core/components";
import { Home } from "@/map/pages";
import { styled } from "@mui/material";

// import { Home } from './home';
// import { ESchemaLayout } from '@/e-schema/layout';
// import { Structure, OrganizationTree, Employees } from '@/e-schema/pages';

export default function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* <Route element={<ProtectedRoutes />}></Route> */}
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled("div")`
  width: 100vw;
  height: 100vh;
`;
