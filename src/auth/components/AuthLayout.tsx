import { Box, styled } from '@mui/material';
import { LanguageSwitcher } from '@/core/components/LanguageSwitcher';
import SpotspotterLogo from '../../assets/spotspotter-logo.svg';

type AuthLayoutProps = {
  children: React.ReactNode;
};
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <AuthPageContainer>
      <Header>
        <div>test</div>
        <LanguageSwitcher />
      </Header>
      <FormContainer>
        <img src={SpotspotterLogo} alt="" />
        {children}
      </FormContainer>
    </AuthPageContainer>
  );
};

const AuthPageContainer = styled(Box)`
  position: relative;
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

const Header = styled(Box)`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: calc(100% - 175px);
`;
