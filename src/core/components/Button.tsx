import { ButtonBase, ButtonBaseProps } from '@mui/material';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
} & ButtonBaseProps;

export const Button = (props: ButtonProps) => {
  return <ButtonBase {...props}>{props.children}</ButtonBase>;
};
