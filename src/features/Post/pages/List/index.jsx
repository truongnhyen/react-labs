import React, { useEffect, useState } from 'react';
import postApi from '../../../../api/postApi';
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import utils from '../../../../constant/utils';
import { Link, useRouteMatch } from 'react-router-dom';

PostListPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  postWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none'
  },
  post: {
    maxWidth: 345,
    margin: '0 15px 30px 15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
function PostListPage(props) {
  const match = useRouteMatch();

  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await postApi.getAll({
          _page: 1,
          _limit: 10,
        });

        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list', error);
      }

      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {loading && <CircularProgress />}

      <h2>Post List</h2>
      <div className={classes.postWrap}>
        {postList.map((post) => (
          <Card key={post.id} className={classes.post}>
            <Link className={classes.link} to={`${match.path}/${post.id}`}>
              <CardMedia className={classes.media} image={post.imageUrl} title="Paella dish" />
              <CardContent>
                <Typography variant="h5" color="primary" component="h5">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  {utils.truncateTextlength(post.description, 100)}
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  by <strong>{post.author}</strong> -{utils.formatDate(post.createdAt)}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PostListPage;
