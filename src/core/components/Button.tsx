import { ButtonBase, ButtonBaseProps } from '@mui/material';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant: 'contained' | 'outlined' | 'text';
  color: 'primary' | 'secondary' | 'tertiary';
} & ButtonBaseProps;

export const Button = (props: ButtonProps) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};
