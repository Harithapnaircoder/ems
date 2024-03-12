import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme();

const SignUp = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const signupData = {
      fullName: formData.get('Name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
      
        console.log('Signup successful!');
        setSignupSuccess(true);
       
      } else {
       
        console.error('Signup failed:', response.statusText);
       
      }
    } catch (error) {
      console.error('Error during signup:', error);
      
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              backgroundColor: 'white',
              p: 3,
              borderRadius: 8,
              border: '2px solid #ccc',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              mt: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '90%',
              mx: 'auto',
              marginBottom: '20px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Name"
                    label="Full Name"
                    type="text"
                    id="Name"
                    autoComplete="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              {signupSuccess && (
                <Typography variant="body2" color="primary" align="center">
                  Signup successful! You can now proceed to <RouterLink to="/login">login</RouterLink>.
                </Typography>
              )}
              <Grid container justifyContent="center">
                <Grid item>
                  <RouterLink to="/login" variant="body2" style={{ textAlign: 'center' }}>
                    Already have an account? Sign in
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
