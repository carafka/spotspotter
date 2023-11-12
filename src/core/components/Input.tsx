import { TextField, StandardTextFieldProps, styled } from '@mui/material';

type TextInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & StandardTextFieldProps;

export const Input = (props: TextInputProps) => {
  return <CustomTextField {...props} />;
};

const CustomTextField = styled(TextField)``;
