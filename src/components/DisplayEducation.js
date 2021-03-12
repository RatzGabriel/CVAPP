import React from "react";

const DisplayEducation = ({ item, removeEducationElement, key }) => {
  const onInputChange = (e) => {
    e.target.textContent = prompt("please enter new value");
  };

  const returnNewArray = () => {
    removeEducationElement(item.key, "school");
  };

  return (
    <div>
      <div className="container-cv">
        <h3 className="desc">School: </h3>
        <h3 onClick={onInputChange}>{item.schoolname}</h3>
        <h3 className="desc">Title: </h3>
        <h3 onClick={onInputChange}>{item.title}</h3>
        <h3 className="desc">From: </h3>
        <h3 onClick={onInputChange}>{item.fromDate}</h3>
        <h3 className="desc">To :</h3>
        <h3 onClick={onInputChange}>{item.toDate}</h3>
        <button className="btn-remove" onClick={() => returnNewArray()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default DisplayEducation;
