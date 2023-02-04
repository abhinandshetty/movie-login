import React from 'react';
import { Grid } from '@mui/material';

const ResultCount = ({
  pageNumber,
  totalResults,
  pageSize,
}) => (
  <Grid textAlign="right">
    {`Showing
    ${pageNumber - 1 === 0 ? 1 : ((pageNumber - 1) * pageSize) + 1}
    -
    ${pageNumber * pageSize < totalResults ? pageNumber * pageSize : totalResults}
    of
    ${totalResults}`}
  </Grid>
);

export default ResultCount;
