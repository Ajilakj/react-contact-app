import React from 'react'

class AddContact extends React.Component{
  state={
    name:"",
    email:""
  };

  add= (e) =>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""})
  }

  render(){ // when we use class we have to wrap return in rende function
  return (
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label for = "name">Name</label> 
                <input type="text" name="name" placeholder="name"
                value={this.state.name}
                onChange={(e) => this.setState({name:e.target.value})}
                />
            </div>
            <div className="field">
                <label for = "email">email</label> 
                <input type="text" name="email" placeholder="email"
                value={this.state.email}
                onChange={(e) => this.setState({email:e.target.value})}
                />
            </div>
            <button className="ui buttton blue">Add</button>
        </form>
    </div>
  )
  }
}

export default AddContact
