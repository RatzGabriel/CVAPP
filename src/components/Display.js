const Display = ({ personalArray }) => {
  const onInputChange = (e) => {
    e.target.textContent = prompt("please enter new value");
  };
  return (
    <div className="container-cv">
      <div className="container-general">
        <h1>Personal Information:</h1>
        <h3 className="desc">FirstName: </h3>
        <h3 onClick={onInputChange}>{personalArray.firstname}</h3>
        <h3 className="desc">LastName: </h3>
        <h3 onClick={onInputChange}>{personalArray.lastname}</h3>
        <h3 className="desc">BirthDate: </h3>
        <h3 onClick={onInputChange}>{personalArray.birthdate}</h3>
        <h3 className="desc">Phone: </h3>
        <h3 onClick={onInputChange}>{personalArray.phone}</h3>
        <h3 className="desc">Email: </h3>
        <h3 onClick={onInputChange}>{personalArray.email}</h3>
      </div>
    </div>
  );
};

export default Display;
