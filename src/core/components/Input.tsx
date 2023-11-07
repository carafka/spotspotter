import React from "react";
import { TextField, StandardTextFieldProps, styled } from "@mui/material";

interface InputProps extends StandardTextFieldProps {}

export const Input = (props: InputProps) => {
  return <CustomTextField {...props} />;
};

const CustomTextField = styled(TextField)``;
