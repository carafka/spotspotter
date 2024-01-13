import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ThirdPartyAuthButton,
  AuthButton,
  AuthInput,
  AuthLayout,
} from '@/auth/components';
import { externalAuthApps } from '@/auth/constants';
import {
  AuthDescription,
  AuthInputs,
  AuthIssuesRow,
  ExternalAuthApps,
  ThirdPartyDisclaimer,
} from '@/auth/styles';

export const ForgotPassword = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <AuthDescription>
        {t('auth.forgot_password.description')}{' '}
        <b>{t('auth.forgot_password.easy')}</b>
      </AuthDescription>

      <AuthInputs>
        <AuthInput label="E-mail" onChange={() => {}} />
      </AuthInputs>

      <AuthIssuesRow align="space-between">
        <Link to="/login">{t('auth.forgot_password.back_to_login')}</Link>
      </AuthIssuesRow>
      <AuthButton onClick={() => {}}>
        {t('auth.forgot_password.reset_password')}
      </AuthButton>
      <ThirdPartyDisclaimer>
        {t('auth.forgot_password.sign_up')}
      </ThirdPartyDisclaimer>

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
