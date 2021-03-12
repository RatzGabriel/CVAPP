const DisplayPractical = ({ item, removeEducationElement }) => {
  console.log("itttem", item);
  const onInputChange = (e) => {
    e.target.textContent = prompt("please enter new value");
  };
  const returnNewArray = () => {
    console.log("izem key", item.key);
    removeEducationElement(item.key, "company");
  };
  return (
    <div className="container-cv">
      <div className="container-cv">
        <h2 className="desc">Company:</h2>
        <h2 onClick={onInputChange}>{item.company}</h2>
        <h2 className="desc">Position:</h2>
        <h3 onClick={onInputChange}>{item.position}</h3>
        <h2 className="desc">From::</h2>
        <h3 onClick={onInputChange}>{item.fromDatePractical}</h3>
        <h2 className="desc">To::</h2>
        <h3 onClick={onInputChange}>{item.toDatePractical}</h3>
        <button onClick={returnNewArray}>Remove</button>
        <br />
      </div>
    </div>
  );
};

export default DisplayPractical;
