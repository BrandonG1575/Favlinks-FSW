import React, { useState } from 'react';
import Table from './Table'
import Form from './Form'

function LinkContainer(){

    const linkData = [];
    const [favlinks,setfavlinks] = useState(linkData); 

    const handleRemove = (index) => {
        setfavlinks(oldValues => {return oldValues.filter((_, i) => i !== index)})
    }
    
    const handleSubmit = (favLink) => {
        console.log('Handling submit with data:', favLink);
       // setfavlinks([favLink, ...favlinks]);
       setfavlinks([...favlinks, favLink]);
       //adds your new link to the bottom 

    }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData = {favlinks} handleRemove = {handleRemove}/>
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    )

}
export default LinkContainer