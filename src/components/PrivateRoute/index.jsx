import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, Route } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
};

function PrivateRoute({ path, component }) {
  const PrivateComponent = component;
  return (
    <Route
      path={path}
      render={(props) => {
        //check đã login hay chưa từ local storage
        const isLoggedIn = localStorage.getItem('access_token');
        if (!isLoggedIn) {
          //neu chua login da ra ngoai home bang Redirect

          //return <Redirect to="/" />;

          //hoac co the return ve 1 content nao do co chua link da ve trang chu
          return (
            <Box>
              <Typography variant="h2">
                You're not logged in
                <Link to="/">
                  <Button variant="contained" color="primary">
                    Back home
                  </Button>
                </Link>
              </Typography>
            </Box>
          );
        }

        return <PrivateComponent {...props} />; //ten component phai viet hoa, nen gan component vao 1 ten bien
      }}
    />
  );
}

export default PrivateRoute;
