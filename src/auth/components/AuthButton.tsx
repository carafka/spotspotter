import { styled } from '@mui/material';
import { Button } from '@/core/components';

type AuthButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const AuthButton = (props: AuthButtonProps) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

const CustomButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  height: 60px;
  background-color: black;
  color: white;
  transition: all 0.2s ease;

  &: hover {
    opacity: 0.8;
  }
`;
