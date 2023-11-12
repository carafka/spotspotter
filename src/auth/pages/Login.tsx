// import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { Box, Button, styled } from '@mui/material';
import { Input } from '@/core/components';
import SpotspotterLogo from '../../assets/spotspotter-logo.png';
import { ThirdPartyAuthButton } from '../components';
import { externalAuthApps } from '../constants';

export const Login = () => {
  // const { t } = useTranslation();

  return (
    <>
      <FormContainer>
        <img src={SpotspotterLogo} alt="" />
        <Input label="Username" />
        <Input label="Password" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/signup">No account yet...</Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </Box>
        <Button variant="contained" color="primary">
          Sign in
        </Button>

        <ExternalAuthApps>
          {externalAuthApps.map(({ icon, authHandler }) => (
            <ThirdPartyAuthButton externalAuthHandler={authHandler}>
              {icon}
            </ThirdPartyAuthButton>
          ))}
        </ExternalAuthApps>
      </FormContainer>
    </>
  );
};

const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ExternalAuthApps = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
