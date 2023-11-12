import { styled } from '@mui/material';

export const BugReport = () => {
  const sendEmail = () => {
    window.open('mailto:spotspotterxyz@gmail.com');
  };

  return (
    <ReportContainer onClick={sendEmail}>
      You found a bug? Report the problem!
    </ReportContainer>
  );
};

const ReportContainer = styled('div')`
  color: rgba(0, 0, 0, 0.31);
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
