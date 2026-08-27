import "./Students.css"

function students() {
    const student ={
        name: "ابراهيم",
        age:26,
        gender:"male",
        degree:90,
    }
  return (
    <div>
        <p>{student.name}</p>
        <p>{student.age}</p>
        <p>{student.gender}</p>
        <p>{student.degree}</p>
    </div>
  )
};

export default students