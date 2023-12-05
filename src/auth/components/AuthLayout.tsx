import { Box, styled } from '@mui/material';
import SpotspotterLogo from '../../assets/spotspotter-logo.svg';

type AuthLayoutProps = {
  children: React.ReactNode;
};
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthPageContainer>
      <FormContainer>
        <img src={SpotspotterLogo} alt="" />
        {children}
      </FormContainer>
    </AuthPageContainer>
  );
};

const AuthPageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  * {
    font-family: Outfit;
  }
`;

const FormContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 330px;
`;
