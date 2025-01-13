import { Box, styled } from '@mui/material';

export const AuthForm = styled('form')`
  width: 330px;
`;

export const AuthInputs = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  margin-top: 28px;
`;

export const AuthIssuesRow = styled(Box)<{ align: string }>`
  display: flex;
  width: 100%;
  justify-content: ${({ align }) => align};
  margin: 19px 0;
  font-size: 14px;

  * {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  & > a:hover {
    filter: brightness(0.8);
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const AuthDescription = styled('p')`
  font-size: 14px;
  color: #555252;
  margin: 0;
  margin-top: 24px;
  text-align: justify;
`;

export const ThirdPartyDisclaimer = styled('p')`
  font-size: 14px;
  color: #555252;
  margin: 24px 0;
`;

export const ExternalAuthApps = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
