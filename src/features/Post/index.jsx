import { Route, Switch, useRouteMatch } from 'react-router-dom';
import React from 'react';
import PostDetailPage from './pages/Detail';
import PostListPage from './pages/List';

PostFeature.propTypes = {
    
};

function PostFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route exact path={match.path} component={PostListPage} />
                <Route path={`${match.path}/:postId`} component={PostDetailPage} />
            </Switch>
        </div>
    );
}

export default PostFeature;