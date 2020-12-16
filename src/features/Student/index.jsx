import { Button, Container, Dialog, DialogContent, LinearProgress } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import studentApi from 'api/studentApi';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function StudentFeature(props) {
  const match = useRouteMatch();
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 80,
    _sort: 'updatedAt',
    _order: 'desc',
  });
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  //set submitting loading
  const [submitting, setSubmitting] = useState(false);
  //set state cho dialog
  const [open, setOpen] = useState(false);
  //set state cho edit student
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll(filters);
        setStudentList(data);
      } catch (error) {
        console.log('Failed to fetch student list:', error);
      }
    })();
  }, [filters]);

  const handleEditClick = (student) => {
    //setSelectedStudent(student);
    // set gia tri cho field de tranh bi loi trong truong hop khong co data
    setSelectedStudent({
      gender: '',
      city: '',
      ...student,
    });
    setOpen(true);
  };

  const handleSubmit = async (values) => {
    const isAdd = !selectedStudent;
    if (isAdd) {
      await studentApi.add(values);
      //re-fetch student list with current filters
      setFilters((x) => ({ ...x }));
      setOpen(false);

      return;
    }

    //Edit mode
    try {
      setSubmitting(true);

      values.id = selectedStudent.id;
      const updatedStudent = await studentApi.update(values);

      //update student item
      setStudentList((currentList) => {
        const newList = [...currentList];

        const updatedIdx = newList.findIndex((x) => x.id === selectedStudent.id);
        if (updatedIdx < 0) return currentList;

        //clone student item
        newList[updatedIdx] = {
          ...newList[updatedIdx],
          ...updatedStudent,
        };

        return newList;
      });
      setSelectedStudent(null);

      //close dialog
      setOpen(false);
    } catch (error) {
      console.log('Failed to update student', error);
    }

    setSubmitting(false);
  };
  const handleAddClick = () => setOpen(true);

  const handleRemoveClick = async (student) => {
    try {
      const message = `Are you sure to remove student namd "${student.name}"?`;
      if (window.confirm(message)) {
        await studentApi.remove(student.id);
        //re-fetch student list with current filters
        setFilters((x) => ({ ...x }));
      }
    } catch (error) {
      console.log('Failed to remove student', error);
    }
  };
  return (
    <div>
      <Container fixed>
        <h2>STUDENT FEATURE</h2>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddClick}>
          Add new student
        </Button>
        <StudentList data={studentList} onEdit={handleEditClick} onRemove={handleRemoveClick} />
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          {submitting && <LinearProgress />}
          <DialogContent>
            <StudentForm initialValues={selectedStudent} onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
}

export default StudentFeature;
