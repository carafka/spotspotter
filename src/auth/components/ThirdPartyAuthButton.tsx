import { Box, styled } from '@mui/material';

type ThirdPartyAuthButtonProps = {
  externalAuthHandler: () => void;
  children: React.ReactNode;
};

export const ThirdPartyAuthButton = ({
  externalAuthHandler,
  children,
}: ThirdPartyAuthButtonProps) => {
  return (
    <ButtonContainer onClick={externalAuthHandler}>{children}</ButtonContainer>
  );
};

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 0.4px solid #a7a7a7;
  background-color: #ece9ec;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;
