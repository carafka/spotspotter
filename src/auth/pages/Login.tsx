// import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { ThirdPartyAuthButton, AuthButton, AuthInput } from '@/auth/components';
import { externalAuthApps } from '@/auth/constants';
import SpotspotterLogo from '../../assets/spotspotter-logo.png';

export const Login = () => {
  // const { t } = useTranslation();

  return (
    <AuthPageContainer>
      <FormContainer>
        <img src={SpotspotterLogo} alt="" />
        <AuthInputs>
          <AuthInput label="Username" onChange={() => {}} />
          <AuthInput label="Password" onChange={() => {}} />
        </AuthInputs>

        <AuthIssuesRow>
          <Link to="/signup">No account yet...</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </AuthIssuesRow>
        <AuthButton variant="contained" color="primary">
          Sign in
        </AuthButton>
        <ThirdPartyDisclaimer>Or Sign up with</ThirdPartyDisclaimer>

        <ExternalAuthApps>
          {externalAuthApps.map(({ icon, authHandler }) => (
            <ThirdPartyAuthButton externalAuthHandler={authHandler}>
              {icon}
            </ThirdPartyAuthButton>
          ))}
        </ExternalAuthApps>
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

const AuthInputs = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  margin-top: 28px;
`;

const AuthIssuesRow = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 19px 0;

  * {
    color: #34a853;
  }
`;

const ThirdPartyDisclaimer = styled('p')`
  font-size: 14px;
  color: #555252;
  margin: 24px 0;
`;

const ExternalAuthApps = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
