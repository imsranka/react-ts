import React, { useState } from "react";
const defaultFormData = {
  fname: "",
  lname: "",
};
const Form = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const sumbitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  return (
    <form onSubmit={sumbitForm}>
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        value={formData.fname}
        onChange={onChange}
      />
      <br />
      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        value={formData.lname}
        onChange={onChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
