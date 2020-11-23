import { useEffect, useState } from 'react';
import postApi from './api/postApi';
import studentApi from './api/studentApi';
import './App.scss';
import Button from './components/Button';
import Counter from './components/Counter';
import MagicBoxFeature from './features/MagicBox';

function App() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  // const [filter, setFilter] = useState({});

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

  const [loadingStudent, setLoadingStudent] = useState(true);
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll({
          _page: 1,
          _limit: 10,
        });

        setStudentList(data);
      } catch (error) {
        console.log('Failed to fetch student list', error);
      }

      setLoadingStudent(false);
    })();
  }, []);

  return (
    <div>
      {loading && <p>Loading ...</p>}

      <h2>Post List</h2>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {loadingStudent && <p>Loading ...</p>}
      <h2>Student List</h2>
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>

      <Counter />

      <MagicBoxFeature />

      <Button>Hello</Button>
      <Button onClick={() => alert('Hello')}>Click to show alert</Button>
    </div>
  );
}

export default App;
