import "./Students.css";

function students() {
  const student = {
    name: "ابراهيم",
    age: 26,
    gender: "male",
    degree: 90,
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>الاسم</th>
          <th>العمر</th>
          <th>الجنس</th>
          <th>الدرجة</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{student.age}</td>
          <td>{student.gender}</td>
          <td>{student.degree}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default students;
