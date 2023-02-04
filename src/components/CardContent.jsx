import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent as Content, useMediaQuery } from '@mui/material';

const CardContent = ({ children }) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Card sx={{
      height: isBelowMd ? '100vh' : 'auto',
      minHeight: '40vh',
      marginTop: isBelowMd ? 0 : 8,
      padding: isBelowMd ? 1 : 4,
      overflow: 'scroll',
    }}
    >
      <Content>
        {children}
      </Content>
    </Card>
  );
};

export default CardContent;
