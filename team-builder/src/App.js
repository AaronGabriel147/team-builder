import React, { useState } from 'react';
import Form from './components/Form'
import './App.css';
// {/* */}

const initialValues = { name:"", email:"", role:"" };

// const teamMembers = [
//   {
//     name:"Tim",
//     email:"timmythetooth@gmail.com",
//     role:"Conspiracy theorist."
//   },
//   {
//     name:"Dave",
//     email:"dtoon@gmail.com",
//     role:"Musician"
//   },
// ];


export default function App() {

  const [members, setMembers] = useState(teamMembers);                   // {name:"Tim", email:"timmythetooth@gmail.com", ...
  const [formValue, setFormValue] = useState(initialValues);             // { name:"", email:"", role:"" };

  console.log('_CONSOLE TEST_')

  function updateBananaApp(inputNameBanana, inputValueBanana) {
    setFormValue({ ...formValue, [inputNameBanana]: inputValueBanana })
  }

  function submitBananaApp() {
    const newMember = {
      name: formValue.name,
      email: formValue.email
    }
    setMembers([newMember, ...members])      // '...members' makes it so it saves the previous members. Needs to be an arr so .map works.
    setFormValue(initialValues)                               
  }

  return (
    <div className="test">

      {/* {members.map(member => (
        <div>
          {member.name}
          </div>
      ))} */}

      <Form 
      valuesBanana={formValue} 
      updateBanana={updateBananaApp} 
      submitBanana={submitBananaApp} 
      />                                                 {/* Passing state to the form component. */}

    </div>
  );
}


