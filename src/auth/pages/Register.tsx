// import { useTranslation } from "react-i18next";
import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment, styled } from '@mui/material';
import {
  ThirdPartyAuthButton,
  AuthButton,
  AuthInput,
  AuthLayout,
} from '@/auth/components';
import { externalAuthApps } from '@/auth/constants';

export const Register = () => {
  // const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleClickisPasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const handleMouseDownPassword = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <AuthLayout>
      <AuthInputs>
        <AuthInput label="Username" onChange={() => {}} />
        <AuthInput label="Email" onChange={() => {}} />
        <AuthInput
          label="Password"
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickisPasswordVisible}
                >
                  {isPasswordVisible ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {password && <PasswordStrengthBar password={password} />}

        <AuthInput
          label="Repeat Password"
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={() => {}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickisPasswordVisible}
                >
                  {isPasswordVisible ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </AuthInputs>

      <AuthIssuesRow>
        <Link to="/login">I already have an account!</Link>
      </AuthIssuesRow>
      <AuthButton variant="contained" color="primary">
        Sign up
      </AuthButton>
      <ThirdPartyDisclaimer>Or Use</ThirdPartyDisclaimer>

      <ExternalAuthApps>
        {externalAuthApps.map(({ icon, authHandler }) => (
          <ThirdPartyAuthButton externalAuthHandler={authHandler}>
            {icon}
          </ThirdPartyAuthButton>
        ))}
      </ExternalAuthApps>
    </AuthLayout>
  );
};

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
  justify-content: center;
  margin: 19px 0;
  font-size: 14px;

  * {
    color: #34a853;
  }

  & > a:hover {
    filter: brightness(0.8);
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
