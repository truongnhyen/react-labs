import { Box, Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onDelete: null,
  onEdit: null,
};
const useStyles = makeStyles(() => ({
  root: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    marginBottom: '20px',
    padding: '0',
  },
  button: {
    margin: '0 5px',
  },
}));
function TodoList({ todos, onDelete, onEdit }) {
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      {todos.map((todo) => (
        <Box component="ul" className={classes.item} key={todo.id}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography component="p" variant="body1">
                    {todo.value}
                  </Typography>
                  <Typography component="p" variant="body1">
                    {todo.description}
                  </Typography>
                  <Typography component="p" variant="body1" style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
                    {todo.value}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Edit />}
                    onClick={() => onEdit && onEdit(todo)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<Delete />}
                    onClick={() => onDelete && onDelete(todo)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default TodoList;
