import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PasswordStrengthBar from 'react-password-strength-bar';
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

export const Register = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleClickisPasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <AuthLayout>
      <AuthInputs>
        <AuthInput label="Username" onChange={() => {}} />
        <AuthInput label="Email" onChange={() => {}} />
        <AuthInput
          label="Password"
          type={isPasswordVisible ? 'text' : 'password'}
          onChange={onPasswordChange}
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

      <AuthIssuesRow align="center">
        <Link to="/login">{t('auth.register.have_account')}</Link>
      </AuthIssuesRow>
      <AuthButton onClick={() => {}}>{t('auth.register.sign_up')}</AuthButton>
      <ThirdPartyDisclaimer>{t('auth.register.or')}</ThirdPartyDisclaimer>

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
