import React from 'react';


const Form = (props) => {

  return (
<form class="form-inline" onSubmit={(event) => props.handleUserFormSubmit(event)}>
    <div>
      <label>
        <input class="form-control"
        name="username"
        type="text"
        placeholder="Search username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />
      <input
        class="form-control"
        type="submit"
        value="Submit"
      />
      </label>
    </div>
 </form>
)};
export default Form;
