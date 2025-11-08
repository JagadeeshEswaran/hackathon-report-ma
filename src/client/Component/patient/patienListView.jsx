import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientDetails from './dashboard/patientDashBoard';

const patientList = Array(30).fill().map((_, index) => {
    const value = index + 1;
    return {
        name: "Jane" + value,
        addr: "456 Elm St " + value,
        age: 28 + value,
        dob: "1995-08-22",
        sex: index % 2 === 0 ? "Female" : "Male",
        phNo: "9876543210",
        bloodGroup: "B+",
    };
});



function PatientTable() {

    const [selectedPatient, setSelectedPatient] = useState(null);

    const openDetails = (patient) => {
        setSelectedPatient(patient);
    };

    const closeDetails = () => {
        setSelectedPatient(null);
    };

    return (
        <div
            className="table-responsive" style={{ maxHeight: 'calc(100vh - 70px)', overflowY: 'auto', padding: '2% 1%' }}
        >
            <div className="container flex-grow-1 d-flex flex-column">
                <h4 className="mb-4 text-center">Patient List</h4>

                {/* Table wrapper with vertical scroll */}
                <div className="table-responsive flex-grow-1" style={{ overflowY: 'auto' }}>
                    <table className="table table-bordered w-100 text-center">
                        <thead style={{ backgroundColor: "#4CAF50", color: "white", position: 'sticky', top: 0, zIndex: 1 }}>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Age</th>
                                <th>DOB</th>
                                <th>Sex</th>
                                <th>Phone</th>
                                <th>Blood Group</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patientList.map((patient, index) => (
                                <tr key={index}>
                                    <td>{patient.name}</td>
                                    <td>{patient.addr}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.sex}</td>
                                    <td>{patient.phNo}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>
                                        <button
                                            className="btn btn-link p-0"
                                            onClick={() => openDetails(patient)}
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedPatient && (
                <div
                    className="border-start bg-white shadow"
                    style={{
                        width: '420px',
                        height: '100vh',
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        overflowY: 'auto',
                        zIndex: 1050,
                    }}
                >
                    <PatientDetails patient={selectedPatient} onClose={closeDetails} />
                </div>
            )}
        </div>
    );
}

export default PatientTable;
