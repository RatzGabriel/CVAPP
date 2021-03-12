import React, { useState } from "react";

const FormElementsEducation = ({ onEducationSubmit }) => {
  const [educationInfo, seteducationInfo] = useState({
    schoolname: "",
    title: "",
    fromDate: "",
    toDate: "",
  });
  const [educationArray, setEducationArray] = useState([]);
  const { schoolname, title, fromDate, toDate } = educationInfo;

  const [toggleClass, setToggleClass] = useState("");

  const toggle = (e) => {
    console.log("test");
    if (toggleClass === "") {
      setToggleClass("active");
    } else {
      setToggleClass("");
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onEducationSubmit(educationArray);
  };

  const onChangeEvent = (e) => {
    const { name, value } = e.target;

    seteducationInfo((prev) => {
      const newArray = { ...prev, [name]: value };
      return newArray;
    });
    setEducationArray(educationInfo);
  };

  return (
    <div className="container-form">
      <form name="key" onSubmit={onFormSubmit}>
        <div onClick={() => toggle()}>
          <h1>
            Education
            <i>⇓</i>
          </h1>
        </div>

        <div className={`${toggleClass} content`}>
          <label>SchoolName:</label>
          <input
            placeholder="schoolName"
            name="schoolname"
            value={schoolname}
            type="text"
            onChange={onChangeEvent}
          />
          <label>Title of Study:</label>
          <input
            placeholder="title"
            name="title"
            value={title}
            type="text"
            onChange={onChangeEvent}
          />
          <label>From:</label>
          <input
            name="fromDate"
            value={fromDate}
            type="date"
            onChange={onChangeEvent}
          />
          <label>To:</label>
          <input
            name="toDate"
            value={toDate}
            type="date"
            onChange={onChangeEvent}
          />
          <button type="submit">Submit Educational Information</button>
        </div>
      </form>
    </div>
  );
};

export default FormElementsEducation;
