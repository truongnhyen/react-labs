import './index.scss';

function RenderingFeature() {
  const name = 'Yen Truong';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Yen',
    age: 18,
  };

  const showStudent = true;

  const studentList = [
    {
      id: 1,
      name: 'Yen',
      age: 18,
    },
    {
      id: 2,
      name: 'Truong',
      age: 20,
    },
  ];

  const colorList = ['green', 'red', 'blue'];
  return (
    <section className="app">
      <h1>Hi {name}</h1>
      <p>Age: {age + 2}</p>
      <p>Is Male: {isMale ? 'YES' : 'NO'}</p>
      <p>
        Render null/undefined: {null} {undefined}
      </p>

      {/*CACH VIET IF/ELSE */}
      {/* Kieu Boolean thi show binh thuong */}
      {true && <p>Render</p>}
      {false && <p>ko Render</p>}
      {null && <p>null Render</p>}
      {undefined && <p>undifined Render</p>}
      {/* Nhung kieu dac biet nhu ben duoi them phu dinh '!!' de ep kieu thanh true */}
      {!!0 && <p>0 Render</p>}
      {!!123 && <p>Number 123</p>}
      {!!'' && <p>empty Render</p>}
      {!!'Hello' && <p>string Render</p>}

      {showStudent && (
        <>
          <h2>Student:</h2>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
        </>
      )}
      {!showStudent && <p>Don&apos;t show student!</p>}

      <h2>Student List</h2>
      <ul className="student-list">
        {studentList.map((studentItem) => (
          <li key={studentItem.id}>
            <p>Name: {studentItem.name}</p>
            <p>Name: {studentItem.age}</p>
          </li>
        ))}
      </ul>
      <h2>Color List:</h2>
      <ul className="color-list">
        {colorList.map((color) => (
          <li key={color} style={{ color }}>
            {/* Khi thuoc tinh css trung voi bien co the ghi tat 1 lan */}
            {color}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RenderingFeature;
