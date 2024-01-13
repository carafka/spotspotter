// import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import {
  ThirdPartyAuthButton,
  AuthButton,
  AuthInput,
  AuthLayout,
} from '@/auth/components';
import { externalAuthApps } from '@/auth/constants';
import {
  AuthInputs,
  AuthIssuesRow,
  ExternalAuthApps,
  ThirdPartyDisclaimer,
} from '@/auth/styles';

export const Login = () => {
  const { t } = useTranslation();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleClickisPasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const handleMouseDownPassword = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <AuthLayout>
      <AuthInputs>
        <AuthInput label="Username" onChange={() => {}} />
        <AuthInput
          label="Password"
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={() => {}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickisPasswordVisible}
                  onMouseDown={handleMouseDownPassword}
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

      <AuthIssuesRow align="space-between">
        <Link to="/register">{t('auth.login.no_account')}</Link>
        <Link to="/forgot-password">{t('auth.login.forgot_password')}</Link>
      </AuthIssuesRow>
      <AuthButton onClick={() => {}}>{t('auth.login.sign_in')}</AuthButton>
      <ThirdPartyDisclaimer>{t('auth.login.sign_up')}</ThirdPartyDisclaimer>

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
