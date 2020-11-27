import React from 'react';
import { useRouteMatch } from 'react-router-dom';

StudentDetailPage.propTypes = {};

function StudentDetailPage(props) {
  //using params trong match de lay tham so truyen ve
  const { params } = useRouteMatch();
  return <div>STUDENT DETAIL PAGE - {params.studentId}</div>;
}

export default StudentDetailPage;
