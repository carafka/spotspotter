import {
  styled,
  outlinedInputClasses,
  StandardTextFieldProps,
} from '@mui/material';
import { Input } from '@/core/components';

type AuthInputProps = {
  onChange: () => void;
} & StandardTextFieldProps;

export const AuthInput = (props: AuthInputProps) => {
  return (
    <CustomInput
      inputProps={{
        style: {
          fontFamily: 'Outfit',
        },
      }}
      InputLabelProps={{
        style: { color: 'rgba(99, 92, 92, 0.67)', fontFamily: 'Outfit' },
      }}
      {...props}
    />
  );
};

const CustomInput = styled(Input)`
  width: 100%;

  & .${outlinedInputClasses.notchedOutline} {
    border-color: #887E7E;
  }

  & .Mui-focused {
    & .${outlinedInputClasses.notchedOutline} {
      border-color: #34A853;
    },
  }
`;
