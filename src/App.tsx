import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, styled } from '@mui/material';
import { Login, Register } from '@/auth/pages';
import { Home } from '@/map/pages';
import { appTheme } from './themes';

// import { ProtectedRoutes } from "@/core/components";
// import { Home } from './home';
// import { ESchemaLayout } from '@/e-schema/layout';
// import { Structure, OrganizationTree, Employees } from '@/e-schema/pages';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled('div')`
  width: 100vw;
  height: 100vh;
`;
