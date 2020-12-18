import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext, { themes } from 'themeContext';
import './Header.scss';

Header.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#fff',
    textDecoration: 'none',
  },
}));
function Header(props) {
  const classes = useStyles();

  const { setCurrentTheme } = useContext(ThemeContext);

  const handleToggleCllick = () => {
    setCurrentTheme((theme) => (theme.name === 'light' ? themes.dark : themes.light));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink className={`${classes.title} ${classes.link}`} to="/" exact>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink className={classes.link} to="/magic-box">
            <Button color="inherit">Magic Box</Button>
          </NavLink>

          <NavLink className={classes.link} to="/rendering">
            <Button color="inherit">Rendering</Button>
          </NavLink>

          <NavLink className={classes.link} to="/color-box">
            <Button color="inherit">Color Box</Button>
          </NavLink>

          <NavLink className={classes.link} to="/students">
            <Button color="inherit">Students</Button>
          </NavLink>

          <NavLink className={classes.link} to="/posts">
            <Button color="inherit">Posts</Button>
          </NavLink>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <a
            className={classes.link}
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="inherit">Go to Google</Button>
          </a>
          <Button color="inherit" onClick={handleToggleCllick}>
            Toggle Theme
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
