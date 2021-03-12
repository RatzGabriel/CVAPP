import React, { useState } from "react";

const FormElementsPractical = ({ onPracticalSubmit }) => {
  const [practicalInfo, setpracticalInfo] = useState({
    company: "",
    position: "",
    fromDatePractical: "",
    toDatePractical: "",
  });

  const [practicalArray, setPracticalArray] = useState([]);

  const {
    company,
    position,
    fromDatePractical,
    toDatePractical,
  } = practicalInfo;

  const onFormSubmit = (e) => {
    e.preventDefault();
    onPracticalSubmit(practicalArray);
  };

  const onChangeEvent = (e) => {
    const { name, value } = e.target;

    setpracticalInfo((prev) => {
      const newArray = { ...prev, [name]: value };
      return newArray;
    });
    setPracticalArray(practicalInfo);
  };

  const [toggleClass, setToggleClass] = useState("");

  const toggle = (e) => {
    console.log("test");
    if (toggleClass === "") {
      setToggleClass("active");
    } else {
      setToggleClass("");
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={onFormSubmit}>
        <div onClick={() => toggle()}>
          <h1>
            Practical
            <i>⇓</i>
          </h1>
        </div>

        <div className={`${toggleClass} content`}>
          <label>Company:</label>
          <input
            placeholder="company"
            name="company"
            value={company}
            type="text"
            onChange={onChangeEvent}
          />
          <label>Position:</label>
          <input
            placeholder="position"
            name="position"
            value={position}
            type="text"
            onChange={onChangeEvent}
          />
          <label>From:</label>
          <input
            name="fromDatePractical"
            value={fromDatePractical}
            type="date"
            onChange={onChangeEvent}
          />
          <label>To:</label>
          <input
            name="toDatePractical"
            value={toDatePractical}
            type="date"
            onChange={onChangeEvent}
          />
          <button type="submit">Submit Practical Experience</button>
        </div>
      </form>
    </div>
  );
};

export default FormElementsPractical;
