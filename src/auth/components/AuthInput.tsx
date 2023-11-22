import { styled } from '@mui/material';
import { Input } from '@/core/components';

type AuthInputProps = {
  onChange: () => void;
  children: React.ReactNode;
};

export const AuthInput = (props: AuthInputProps) => {
  return <CustomInput {...props}>{props.children}</CustomInput>;
};

const CustomInput = styled(Input)`
  width: 100%;
`;
