// import { useTranslation } from "react-i18next";
import { styled } from "@mui/material";
import SpotspotterLogo from "../../assets/spotspotter-logo.png";
import { Input } from "@/core/components";

export const Login = () => {
  // const { t } = useTranslation();

  return (
    <>
      <FormContainer>
        <img src={SpotspotterLogo} alt="" />
        <Input label="Username" />
        <Input label="Password" />
        {/* Rows with 'No account yet...' and 'Forgot password?' */}
        {/* Button with Sign in */}
        {/* Or sign up With */}
        {/* Row with 3 social media icons */}
      </FormContainer>
    </>
  );
};

const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
