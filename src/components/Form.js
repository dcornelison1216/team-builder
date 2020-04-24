import React, { useState } from 'react';



const Form = ({ addNewMember }) => {

  const [member, setMember] = useState({name: "", email: "", role: ""});

  const handleChanges = event => {
    console.log(event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        value={member.name}
        name="name"
        onChange={handleChanges}
      /><br /><br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        placeholder="Enter your email"
        value={member.email}
        name="email"
        onChange={handleChanges}
      /><br /><br />
      <label htmlFor="role">Role: </label>
      <select id="role" style={{width: "150px"}}>
        <option value="backendEngineer">Backend Engineer</option>
        <option value="designer">Designer</option>
        <option value="frontendEngineer">Frontend Engineer</option>
        <option value="lightningRod">The person who doesn't do any work and everyone else in the group actively hates</option>
        <option value="ux">UX</option>
        <option value="other">Other</option>
      </select><br /><br />
      <button type="submit">Add Member</button>
    </form>
  )
}

export default Form;
