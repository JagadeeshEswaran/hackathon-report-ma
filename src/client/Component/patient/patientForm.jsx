import React, { useState } from "react";

const bloodGroups = [
    { label: "A Positive (A+)", value: "A+" },
    { label: "A Negative (A-)", value: "A-" },
    { label: "B Positive (B+)", value: "B+" },
    { label: "B Negative (B-)", value: "B-" },
    { label: "AB Positive (AB+)", value: "AB+" },
    { label: "AB Negative (AB-)", value: "AB-" },
    { label: "O Positive (O+)", value: "O+" },
    { label: "O Negative (O-)", value: "O-" },
];

const patientFormList = [
    { label: "Name", field: "name", mandatory: true, formType: "input", type: "text" },
    { label: "Age", field: "age", mandatory: true, formType: "input", type: "number" },
    { label: "Date of Birth", field: "dob", mandatory: true, formType: "calendar", type: "date" },
    { label: "Sex", field: "sex", mandatory: true, formType: "radio", type: "selection" },
    { label: "Phone Number", field: "phNo", mandatory: true, formType: "input", type: "number" },
    { label: "Blood Group", field: "bloodGroup", mandatory: true, formType: "select", type: "select" },
    { label: "Address", field: "addr", mandatory: true, formType: "textarea" },
];

const PatientFormModal = () => {
    const [formData, setFormData] = useState({
        name: "",
        addr: "",
        age: "",
        dob: "",
        sex: "",
        phNo: "",
        bloodGroup: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        patientFormList.forEach((field) => {
            if (field.mandatory && !formData[field.field]) {
                newErrors[field.field] = `${field.label} is required`;
            }
        });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Patient Details:", formData);
            alert("Patient details submitted successfully!");
            setFormData({
                name: "",
                addr: "",
                age: "",
                dob: "",
                sex: "",
                phNo: "",
                bloodGroup: "",
            });
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: 'calc(100vh - 70px)' }}
        >
            <div className="bg-white rounded p-4 shadow">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Patient Registration Form</h4>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {patientFormList.map((element) => (
                            <div key={element.field} className="col-md-6 mb-3"> {/* Two-column layout */}
                                <label className="form-label text-start d-block">
                                    {element.label} {element.mandatory && <span className="text-danger">*</span>}
                                </label>

                                {element.formType === "input" && (
                                    <input
                                        type={element.type}
                                        className="form-control"
                                        name={element.field}
                                        placeholder={element.label}
                                        value={formData[element.field]}
                                        onChange={handleChange}
                                    />
                                )}

                                {element.formType === "textarea" && (
                                    <textarea
                                        className="form-control"
                                        name={element.field}
                                        rows="3"
                                        placeholder={element.label}
                                        value={formData[element.field]}
                                        onChange={handleChange}
                                    ></textarea>
                                )}

                                {element.formType === "calendar" && (
                                    <input
                                        type="date"
                                        className="form-control"
                                        name={element.field}
                                        value={formData[element.field]}
                                        onChange={handleChange}
                                    />
                                )}

                                {element.formType === "radio" && (
                                    <div className="text-start">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="sex"
                                                value="Male"
                                                checked={formData.sex === "Male"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="sex"
                                                value="Female"
                                                checked={formData.sex === "Female"}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label">Female</label>
                                        </div>
                                    </div>
                                )}

                                {element.formType === "select" && (
                                    <select
                                        className="form-select"
                                        name={element.field}
                                        value={formData[element.field]}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Blood Group</option>
                                        {bloodGroups.map((bg) => (
                                            <option key={bg.value} value={bg.value}>
                                                {bg.label}
                                            </option>
                                        ))}
                                    </select>
                                )}

                                {errors[element.field] && (
                                    <div className="text-danger mt-1">{errors[element.field]}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

export default PatientFormModal;