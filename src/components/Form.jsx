import React from 'react';

const mystyle = {
  color: "white",
  backgroundColor: "Black",
  padding: "10px",
  fontFamily: "Arial",
};


const Form = (props) => {

  return (
<form style={mystyle} onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label>
        <h2> Search</h2>
        <input name="username"
        type="text"
        placeholder="GitHub username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />
      </label>
      <div>
      <input
        type="submit"
        value="Submit"
      />
    </div>
    </form>
)};
export default Form;
