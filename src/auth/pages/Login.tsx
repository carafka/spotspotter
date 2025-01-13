import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  ThirdPartyAuthButton,
  AuthButton,
  AuthInput,
  AuthLayout,
} from '@/auth/components';
import { externalAuthApps } from '@/auth/constants';
import {
  AuthForm,
  AuthInputs,
  AuthIssuesRow,
  ExternalAuthApps,
  ThirdPartyDisclaimer,
} from '@/auth/styles';

export const Login = () => {
  const { t } = useTranslation();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values); // Handle form submission
    },
  });

  return (
    <AuthLayout>
      <AuthForm onSubmit={formik.handleSubmit}>
        <AuthInputs>
          <AuthInput
            label={t('auth.core.username')}
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <AuthInput
            label={t('auth.core.password')}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isPasswordField
          />
        </AuthInputs>

        <AuthIssuesRow align="space-between">
          <Link to="/register">{t('auth.login.no_account')}</Link>
          <Link to="/forgot-password">{t('auth.login.forgot_password')}</Link>
        </AuthIssuesRow>

        <AuthButton onClick={() => {}}>{t('auth.login.sign_in')}</AuthButton>
      </AuthForm>

      <ThirdPartyDisclaimer>{t('auth.login.sign_up')}</ThirdPartyDisclaimer>
      <ExternalAuthApps>
        {externalAuthApps.map(({ icon, authHandler }, idx) => (
          <ThirdPartyAuthButton key={idx} externalAuthHandler={authHandler}>
            {icon}
          </ThirdPartyAuthButton>
        ))}
      </ExternalAuthApps>
    </AuthLayout>
  );
};
