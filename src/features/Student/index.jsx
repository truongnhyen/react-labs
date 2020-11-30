import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StudentDetailPage from './pages/Detail';
import StudentListPage from './pages/List';

StudentFeature.propTypes = {};

function StudentFeature(props) {
  //using match.path de get Routing tu thang cha ben ngoai App, de tranh truong hop
  // routing parent thay doi phai vo trong sub routing de doi
  const match = useRouteMatch();

  return (
    <div>
      <h2>Student Feature</h2>
      <Switch>
        <Route exact path={match.path} component={StudentListPage} />
        <Route path={`${match.path}/:studentId`} component={StudentDetailPage} />
      </Switch>
    </div>
  );
}

export default StudentFeature;
