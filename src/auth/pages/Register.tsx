import { useTranslation } from 'react-i18next';
import PasswordStrengthBar from 'react-password-strength-bar';
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
  AuthInputs,
  AuthForm,
  AuthIssuesRow,
  ExternalAuthApps,
  ThirdPartyDisclaimer,
} from '@/auth/styles';

export const Register = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
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
            label={t('auth.core.email')}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <AuthInput
            label={t('auth.core.password')}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isPasswordField
          />
          {formik.values.password && (
            <PasswordStrengthBar password={formik.values.password} />
          )}

          <AuthInput
            label={t('auth.core.repeat_password')}
            name="repeatPassword"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            isPasswordField
          />
        </AuthInputs>

        <AuthIssuesRow align="center">
          <Link to="/login">{t('auth.register.have_account')}</Link>
        </AuthIssuesRow>
        <AuthButton onClick={() => {}}>{t('auth.register.sign_up')}</AuthButton>
      </AuthForm>

      <ThirdPartyDisclaimer>{t('auth.register.or')}</ThirdPartyDisclaimer>

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
