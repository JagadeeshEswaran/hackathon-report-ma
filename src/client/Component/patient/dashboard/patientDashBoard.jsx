import React from 'react';

function PatientDetails({ patient, onClose }) {
    if (!patient) return null;

    return (
        <div className="p-0">
            <div className="d-flex justify-content-between align-items-center border-bottom p-2 pb-2 mb-3">
                <h5 className="m-0">{patient.name}</h5>
                <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>
                    X
                </button>
            </div>

            <div className="d-flex align-items-center justify-content-between border-bottom p-2 mb-3" style={{ gap: '1rem' }}>
                <button className="btn btn-outline-primary btn-sm" aria-label="Previous Date">
                    &#8592;
                </button>
                <div className="text-center" style={{ minWidth: '100px' }}>
                    <strong>{patient.dob}</strong>
                </div>
                <button className="btn btn-outline-primary btn-sm" aria-label="Next Date">
                    &#8594;
                </button>
            </div>
            <div className='p-2'>
                <p><strong>Address:</strong> {patient.addr}</p>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Sex:</strong> {patient.sex}</p>
                <p><strong>Phone:</strong> {patient.phNo}</p>
                <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
            </div>
        </div>

    );
}

export default PatientDetails;
