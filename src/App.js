import React, { useState } from "react";
import FormElementsGeneral from "./components/FormElementsGeneral";
import FormElementsEducation from "./components/FormElementsEducation";
import FormElementsPractical from "./components/FormElementsPractical";
import DisplayEducation from "./components/DisplayEducation";
import Display from "./components/Display";
import DisplayPractical from "./components/DisplayPractical";
import "./components/App.css";
var uniqid = require("uniqid");

const App = () => {
  const [personalArray, setPersonalArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);
  const [practicalArray, setPracticalArray] = useState([]);

  const removeEducationElement = (e, title) => {
    if (title === "school") {
      let newArr = educationArray.filter((item) => item.key !== e);
      setEducationArray(newArr);
    } else {
      let newArr = practicalArray.filter((item) => item.key !== e);
      setPracticalArray(newArr);
    }
  };

  const onEducationSubmit = (e) => {
    e.key = uniqid();
    let newArr = [...educationArray];
    newArr.push(e);
    setEducationArray(newArr);
  };
  const onPracticalSubmit = (e) => {
    e.key = uniqid();
    let newArray = [...practicalArray];
    newArray.push(e);
    setPracticalArray(newArray);
  };
  const onGeneralSubmit = (e) => {
    setPersonalArray(e);
    console.log(personalArray, "sss", educationArray, practicalArray);
  };

  return (
    <div>
      <div className="container-All-Forms">
        <FormElementsGeneral onGeneralSubmit={onGeneralSubmit} />
        <FormElementsEducation onEducationSubmit={onEducationSubmit} />
        <FormElementsPractical onPracticalSubmit={onPracticalSubmit} />
      </div>

      <Display personalArray={personalArray} />
      {educationArray.map((item) => {
        return (
          <DisplayEducation
            item={item}
            removeEducationElement={removeEducationElement}
          />
        );
      })}

      {practicalArray.map((item) => {
        return (
          <DisplayPractical
            item={item}
            removeEducationElement={removeEducationElement}
          />
        );
      })}
    </div>
  );
};

export default App;
