import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  styled,
  outlinedInputClasses,
  StandardTextFieldProps,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Input } from '@/core/components';

type AuthInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPasswordField?: boolean;
} & StandardTextFieldProps;

export const AuthInput = (props: AuthInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleClickisPasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const handleMouseDownPassword = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <CustomInput
      type={props.isPasswordField && isPasswordVisible ? 'text' : 'password'}
      inputProps={{
        style: {
          fontFamily: 'Outfit',
        },
      }}
      InputLabelProps={{
        style: { color: 'rgba(99, 92, 92, 0.67)', fontFamily: 'Outfit' },
      }}
      InputProps={{
        endAdornment: (
          <>
            {props.isPasswordField && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickisPasswordVisible}
                  onMouseDown={handleMouseDownPassword}
                >
                  {isPasswordVisible ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            )}
          </>
        ),
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
      border-color: ${({ theme }) => theme.palette.primary.main};
    },
  }
`;
