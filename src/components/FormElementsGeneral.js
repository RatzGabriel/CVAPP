import React, { useState } from "react";
var uniqid = require("uniqid");

const FormElementsGeneral = ({ onGeneralSubmit }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    phone: "",
    key: uniqid(),
  });

  const [toggleClass, setToggleClass] = useState("");

  const toggle = (e) => {
    console.log("test");
    if (toggleClass === "") {
      setToggleClass("active");
    } else {
      setToggleClass("");
    }
  };

  const { firstname, lastname, birthdate, email, phone } = personalInfo;

  const onFormSubmit = (e) => {
    e.preventDefault();

    onGeneralSubmit(personalInfo);
  };

  const onChangeEvent = (e) => {
    const { name, value } = e.target;

    setPersonalInfo((prev) => {
      const newArray = { ...prev, [name]: value };
      return newArray;
    });
  };

  return (
    <div className="container-form">
      <form onSubmit={onFormSubmit}>
        <div onClick={() => toggle()}>
          <h1>
            Personal Information
            <i>⇓</i>
          </h1>
        </div>

        <div className={`${toggleClass} content`}>
          <label>FirstName:</label>
          <input
            placeholder="firstName"
            name="firstname"
            value={firstname}
            type="text"
            onChange={onChangeEvent}
          />
          <br />
          <label>LastName:</label>
          <input
            placeholder="lastName"
            name="lastname"
            value={lastname}
            type="text"
            onChange={onChangeEvent}
          />
          <br />
          <label>Birthdate:</label>
          <input
            name="birthdate"
            value={birthdate}
            type="date"
            onChange={onChangeEvent}
          />
          <br />
          <label>Email:</label>
          <input
            placeholder="example@gmail.com"
            name="email"
            value={email}
            type="email"
            onChange={onChangeEvent}
          />
          <br />
          <label>Phone:</label>
          <input
            placeholder="06605875896"
            name="phone"
            value={phone}
            type="number"
            onChange={onChangeEvent}
          />
          <button type="submit">Submit Personal Information</button>
        </div>
      </form>
    </div>
  );
};

export default FormElementsGeneral;
