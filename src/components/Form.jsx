import React, { useState } from 'react';

function Form({ handleSubmit }) {
  const [linkN, setlinkN] = useState("");
  const [linkU, setlinkU] = useState("");

  const submitForm = (e) => {
    console.log("testing INSIDE SUBMITFORM" );

    e.preventDefault(); 
    handleSubmit({ name: linkN, URL: linkU });
    setlinkN( '');
    console.log("Testing");
    setlinkU('');
    console.log("Testing");
  };
//testing
  return (
    <form>
      <label htmlFor="linkName">Link Name:</label>
      <input type="text" id="linkName" name="linkName" value={linkN} onChange={(e) => setlinkN(e.target.value)} />
      <br />
      <br />
      <label htmlFor="URL">Link URL:</label>
      <input type="text" id="linkURL" name="linkURL" value={linkU} onChange={(e) => setlinkU(e.target.value)} />
      <br />
      <br />
      <button type="button" onClick={submitForm}>Submit</button>
    </form>
  );
}

export default Form;