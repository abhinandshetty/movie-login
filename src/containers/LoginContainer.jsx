import React from 'react';
import {
  Button, Grid, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login } from '../redux/loginSlice';
import CardContent from '../components/CardContent';
import { useLocalization } from '../hooks/useLocalization';

const PASSWORD_REGEX = /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const LoginContainer = () => {
  useLocalization();
  useSelector((state) => state.login);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(t('validEmail'))
      .required(t('emailRequired')),
    password: Yup
      .string()
      .max(15, t('passwordMaxLength'))
      .required(t('passwordCriteria'))
      .matches(PASSWORD_REGEX, t('passwordCriteria')),
  });

  const {
    values, errors, touched, isValid, handleChange, handleSubmit, setFieldTouched,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema,
    onSubmit: (loginData) => {
      dispatch(login(loginData));
      navigate('/home');
    },
  });

  return (
    <Grid container>
      <Grid item lg={4} md={2} />
      <Grid item lg={4} md={8} xs={12}>
        <CardContent>
          <Typography variant="h4" fontWeight="700" marginBottom="20px" marginTop="12px" textAlign="center">
            Movie Central
          </Typography>
          <Typography variant="h6" marginBottom="4px">{t('welcome')}</Typography>
          <Typography variant="body1" color="text.secondary" marginBottom="30px">{t('loginPageSubText')}</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              label={t('emailLabel')}
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email && touched.email}
              sx={{
                marginBottom: 3,
              }}
              helperText={(errors.email && touched.email) ? errors.email : null}
              onBlur={() => {
                setFieldTouched('email', true);
              }}
              fullWidth
            />
            <TextField
              variant="outlined"
              label={t('passwordLabel')}
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password && touched.password}
              helperText={(errors.password && touched.password) ? errors.password : null}
              sx={{
                marginBottom: 3,
              }}
              onBlur={() => {
                setFieldTouched('password', true);
              }}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={!isValid}
              sx={{ marginBottom: 4, marginTop: 3 }}
            >
              {t('login')}
            </Button>
          </form>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
