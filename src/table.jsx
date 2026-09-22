import { useEffect, useState } from "react";
import "./Students.css";
import axios from "axios";

function Table() {
    // اكتب هنا الـ state الخاصة بالبيانات والحقول
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [isedit, setIsedit] = useState(false);
    const [student, setStudent] = useState([]);
    const [Newstudent, setNewPatients] = useState(0);
    const [search, setSearch] = useState('');


    const clearForm = () => {
        setName("");
        setAge("");
        setGender('')
        setPhone("");
        setIsedit(false);
    }

    const inputData = (student) => {
        setId(student.id);
        setName(student.name);
        setAge(student.age);
        setGender(student.gender)
        setPhone(student.phone);
        setIsedit(true)
    }





    const getNewPatients = async () => {
        const res = await axios.get(
            "http://localhost:5000/api/patients/new"
        );

        setNewPatients(res.data[0].newPatients);
    };



    // اكتب هنا دالة العرض
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/patients');
                const data = response.data;
                setStudent(data);

            } catch (error) {
                console.error(error.message);
            }
        };
        getData()
        getNewPatients()
    }, []);


    const addData = async (idStd) => {
        if (!isedit) {
            if (age>120 || age<18) {alert('العمر يجب ان يكون بين الـ18 و الـ 120');return}
                
            
            try {
                const response = await axios.post('http://localhost:5000/api/patients', {
                    name,
                    age,
                    gender,
                    phone
                });
                const data = response.data;
                setStudent([...student, {
                    id: data.id,
                    name,
                    age,
                    gender,
                    phone
                }
                ]);
                getNewPatients()
                clearForm()
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const response = await axios.put('http://localhost:5000/api/patients/' + idStd,
                    [
                        name,
                        age,
                        gender,
                        phone
                    ]);

                setStudent(
                    student.map(s => s.id == idStd ?
                        {
                            ...s,
                            name,
                            age,
                            gender,
                            phone
                        } :
                        s
                    )
                )
                setIsedit(false)
                clearForm()
            } catch (error) {
                console.error(error);
            }
        };


    };

    const searchStudent = student.filter(f=> f.name.includes(search))
      
            
        
    

    const deleteData = async (id) => {
        try {
            const response = await axios.delete('http://localhost:5000/api/patients/' + id);
            const data = response.data;
            setStudent(
                student.filter(f => f.id !== id)
            )
            getNewPatients()
        } catch (error) {
            console.error(error);
        }
    };

    const female = student.filter(f => f.gender.includes('أنثى')).length
    const male = student.filter(f => f.gender.includes('ذكر')).length




    // اكتب هنا دالة البحث

    return (
        <div className="app">

            {/* الهيدر */}
            <header className="header">
                <div>
                    <span className="badge">نظام الإدارة الطبية</span>
                    <h1>إدارة المرضى</h1>
                    <p>إضافة وإدارة بيانات المرضى بسهولة</p>
                </div>

                <div className="header-icon">
                    <i className="bi bi-hospital"></i>
                </div>
            </header>


            {/* الإحصائيات */}
            <section className="stats">

                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="bi bi-people-fill"></i>
                    </div>

                    <div>
                        <span>إجمالي المرضى</span>
                        {/* اكتب هنا عدد المرضى */}
                        <strong>{student.length}</strong>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="bi bi-person-plus-fill"></i>
                    </div>

                    <div>
                        <span>المرضى الجدد</span>
                        {/* اكتب هنا المنطق */}
                        <strong>{Newstudent}</strong>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="bi bi-gender-male"></i>
                    </div>

                    <div>
                        <span>الذكور</span>
                        {/* اكتب هنا المنطق */}
                        <strong>{male}</strong>
                    </div>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="bi bi-gender-female"></i>
                    </div>

                    <div>
                        <span>الإناث</span>
                        {/* اكتب هنا المنطق */}
                        <strong>{female}</strong>
                    </div>
                </div>

            </section>


            {/* نموذج الإضافة */}
            <section className="form-card">

                <div className="section-title">
                    <div>
                        <h2>إضافة مريض</h2>
                        <p>أدخل بيانات المريض الجديدة</p>
                    </div>

                    <i className="bi bi-person-plus"></i>
                </div>


                <div className="form-grid">

                    <div className="input-group">
                        <label>اسم المريض</label>

                        <div className="input-box">
                            <i className="bi bi-person"></i>

                            <input
                                type="text"
                                placeholder="أدخل اسم المريض" value={name} onChange={(e) => setName(e.target.value)}
                                maxLength={15}
                            // اكتب هنا onChange
                            />
                        </div>
                    </div>


                    <div className="input-group">
                        <label>العمر</label>

                        <div className="input-box">
                            <i className="bi bi-calendar3"></i>

                            <input
                                type="number"
                                placeholder="أدخل العمر" value={age} onChange={(e) => setAge(e.target.value)}
                            // اكتب هنا onChange
                            />
                        </div>
                    </div>


                    <div className="input-group">
                        <label>الجنس</label>

                        <div className="input-box">
                            <i className="bi bi-gender-ambiguous"></i>

                            <select onChange={(e) => setGender(e.target.value)} value={gender}>
                                <option value="">اختر الجنس</option>
                                <option value="ذكر">ذكر</option>
                                <option value="أنثى">أنثى</option>
                            </select>
                        </div>
                    </div>


                    <div className="input-group">
                        <label>رقم الهاتف</label>

                        <div className="input-box">
                            <i className="bi bi-telephone"></i>

                            <input
                                type="text"
                                placeholder="09xxxxxxxx" onChange={(e) => setPhone(e.target.value)} value={phone}
                            // اكتب هنا onChange
                            />
                        </div>
                    </div>

                </div>


                <div className="form-actions">

                    <button className="btn-primary" onClick={() => addData(id)}>
                        <i className="bi bi-plus-lg"></i>
                        {isedit ? 'حفظ' : ' إضافة المريض'}
                    </button>
                </div>

            </section>


            {/* جدول المرضى */}
            <section className="table-card">

                <div className="table-header">

                    <div>
                        <h2>قائمة المرضى</h2>
                        <p>جميع المرضى المسجلين في النظام</p>
                    </div>


                    <div className="search-box">

                        <i className="bi bi-search"></i>

                        <input
                            type="text"
                            placeholder="ابحث عن مريض..."
                        // اكتب هنا onChange
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        />

                    </div>

                </div>


                <div className="table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>المريض</th>
                                <th>العمر</th>
                                <th>الجنس</th>
                                <th>رقم الهاتف</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>


                        <tbody>
                            {searchStudent.map((s, index)=> (
                                <tr key={s.id}>
                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="patient">
                                            <div className="patient-avatar">

                                            </div>

                                            <div>
                                                <strong>{s.name}</strong>
                                                <span>مريض</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{s.age}</td>

                                    <td>
                                        <span className="gender male">
                                            {s.gender}
                                        </span>
                                    </td>

                                    <td>{s.phone}</td>

                                    <td>
                                        <div className="actions">

                                            <button className="edit" onClick={() => inputData(s)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>

                                            <button className="delete" onClick={() => deleteData(s.id)}>
                                                <i className="bi bi-trash3"></i>
                                            </button>

                                        </div>
                                    </td>

                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Table;