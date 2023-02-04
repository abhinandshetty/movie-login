import React from 'react';
import { Grid, Typography } from '@mui/material';

const MovieListItem = ({
  title,
  posterPath,
}) => (
  <Grid container>
    <Grid item xs={3} marginBottom="10px">
      <img
        src={`https://image.tmdb.org/t/p/w200${posterPath}`}
        alt={`Poster for ${title}`}
        style={{ width: '100%' }}
      />
    </Grid>
    <Grid item xs={9} display="flex" alignItems="center" paddingLeft="20px">
      <Typography variant="h6">{title}</Typography>
    </Grid>
  </Grid>
);

export default MovieListItem;
