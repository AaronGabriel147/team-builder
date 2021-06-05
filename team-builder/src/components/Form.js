import React from 'react';


export default function Form(props) {
  

  const changeHandlerBanana = (e) => {
    const inputNameBanana = e.target.name;           {/* takes var name from input */}
    const inputValueBanana = e.target.value;         {/* takes var value from input */}
    props.updateBanana(inputNameBanana, inputValueBanana)
  }

  const submitHandlerBanana = (e) => {
    e.preventDefault();
    props.submitBanana();
  }


  return (
    <form onSubmit={submitHandlerBanana}>            {/* onSubmit is a keyword */}
        <label>

            <input 
              type="text" 
              name="name" 
              value={props.valuesBanana.name} 
              onChange={changeHandlerBanana}
            />

            <input 
              type="text" 
              name="email" 
              value={props.valuesBanana.email} 
              onChange={changeHandlerBanana}
            />

        </label>

    <button>CLICK</button>
    </form>
  );
};