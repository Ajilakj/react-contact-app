import React from 'react'

const AddContact = () => {
  return (
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
            <div className="field">
                <label for = "name">Name</label> 
                <input type="text" name="name" placeholder="name"/>
            </div>
            <div className="field">
                <label for = "email">email</label> 
                <input type="text" name="email" placeholder="email"/>
            </div>
            <button className="ui buttton blue">Add</button>
        </form>
    </div>
  )
}

export default AddContact
