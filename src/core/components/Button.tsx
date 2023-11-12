import { ButtonBase } from '@mui/material';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};
