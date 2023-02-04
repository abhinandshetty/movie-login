import React, { useEffect, useState, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Grid, InputAdornment, TextField, Pagination,
} from '@mui/material';
import { getMoviesBySearchQuery } from '../data/api/movie';
import CardContent from '../components/CardContent';
import ResultCount from '../components/ResultCount';
import MovieListItem from '../components/MovieListItem';
import { useLocalization } from '../hooks/useLocalization';

const DETAULT_VALUES = {
  totalResults: 0,
  page: 1,
  totalPages: 0,
  movies: [],
};

const MovieContainer = () => {
  useLocalization();
  const { t } = useTranslation();
  const searchInput = useRef(null);
  const [moviesResult, setMoviesResult] = useState(DETAULT_VALUES);
  const userLoginDetails = useSelector((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const debounce = (func) => {
    let timer;
    return (searchText) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.call(this, searchText); }, 1000);
    };
  };

  useEffect(() => {
    if (!userLoginDetails.email || !userLoginDetails.password) {
      navigate(`/${location.search}`);
    }
  }, [userLoginDetails, navigate]);

  const searchMovie = (name, pageNumber) => {
    getMoviesBySearchQuery(name, pageNumber)
      .then((response) => {
        if (!response.total_results) {
          setMoviesResult(DETAULT_VALUES);
        } else {
          const {
            page,
            total_pages: totalPages,
            total_results: totalResults,
            results,
          } = response;

          setMoviesResult({
            page,
            totalPages,
            totalResults,
            movies: results.map(({ title, poster_path: posterPath, id }) => ({
              title,
              posterPath,
              id,
            })),
          });
        }
      });
  };

  return (
    <Grid container>
      <Grid item lg={3} md={2} />
      <Grid item lg={6} md={8} xs={12}>
        <CardContent>
          <TextField
            inputRef={searchInput}
            variant="outlined"
            label={t('searchLabel')}
            placeholder={t('searchFieldPlaceholder')}
            onChange={debounce((event) => {
              const { target: { value } } = event;

              if (!value) return false;

              searchMovie(value, 1);
              return false;
            })}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
            sx={{
              marginBottom: 3,
            }}
            fullWidth
          />
          {moviesResult.totalResults > 0 ? (
            <ResultCount
              pageNumber={moviesResult.page}
              pageSize={20}
              totalResults={moviesResult.totalResults}
            />
          ) : null}

          { moviesResult.totalPages > 0 ? moviesResult.movies.map((movie) => (
            <MovieListItem title={movie.title} posterPath={movie.posterPath} key={movie.id} />
          )) : <Grid item xs={12} textAlign="center">{t('noResultsFound')}</Grid>}

          {moviesResult.totalResults ? (
            <Grid display="flex" justifyContent="center" marginTop="20px">
              <Pagination
                page={moviesResult.page}
                count={moviesResult.totalPages}
                color="primary"
                onChange={(e, count) => searchMovie(searchInput.current.value, count)}
              />
            </Grid>
          )
            : null}
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default MovieContainer;
