import React, { useState } from 'react';

const Form = ({ addNewMember }) => {
  const [member, setMember] = useState({name: '', email: '', role: ''});
  const handleChanges = event => {
    setMember({ ...member, [event.target.id]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    addNewMember(member);
    setMember({ name: '', email: '', role: 'No role specified'});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        style={{fontFamily: 'Chalkduster'}}
        id="name"
        type="text"
        placeholder="Enter your name"
        value={member.name}
        name="name"
        onChange={handleChanges}
      /><br /><br />

      <label htmlFor="email">Email: </label>
      <input
        style={{fontFamily: 'Chalkduster'}}
        id="email"
        type="text"
        placeholder="Enter your email"
        value={member.email}
        name="email"
        onChange={handleChanges}
      /><br /><br />

      <label htmlFor="role">Role: </label>
        <select id="role" style={{width: "150px", fontFamily: 'Chalkduster, fantasy'}} onChange={handleChanges}>
          <option value={null} onChange={handleChanges}>Select role</option>
          <option value='Backend Engineer' onChange={handleChanges}>Backend Engineer</option>
          <option value='Designer' onChange={handleChanges}>Designer</option>
          <option value='Frontend Engineer' onChange={handleChanges}>Frontend Engineer</option>
          <option value='Lightning Rod' onChange={handleChanges}>The person who doesn't do any work and everyone else in the group actively hates</option>
          <option value='UX' onChange={handleChanges}>UX</option>
          <option value='Other' onChange={handleChanges}>Other</option>
        </select><br /><br />

      <button type="submit" style={{fontFamily: 'Chalkduster'}}>Add Member</button>
    </form>
  )
}

export default Form;
