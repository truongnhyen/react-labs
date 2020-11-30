import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import postApi from '../../../../api/postApi';

PostDetailPage.propTypes = {};

function PostDetailPage(props) {
//   const { params } = useRouteMatch();

//   const [postDetail, setPostDetail] = useState('');

//   useEffect(() => {
//     (async () => {
//       //Get post id from url params

//       if (params.postId) {
//         //Fetch post via id
//         const post = await postApi.get(params.postId);

//         // Render post detail
//         setPostDetail(post);
//       }
//     })();
//   }, []);

  return (
    <div>
    {/* {postDetail.map((post) => (
      <h2>{post.title}</h2>
      ))} */}
    </div>

  );
}

export default PostDetailPage;
