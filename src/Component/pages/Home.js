import React, { Component, createRef } from 'react';
import database from '../../database.gif';
class Home extends Component {

    constructor(props){

        super(props);
        this.inputRef = createRef();

    }

    componentDidMount(){
        this.inputRef.current.focus(); // Focus on input field on page load
    }
    render() {

        const { data, handleDeleteData } = this.props; // Destructure handleDelete from props
        
        const listItems = data.map((item) => {
            return (
                <div className="card mt-4 w-50 mx-auto" key={item.id}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">ID: {item.id}</li>
                        <li className="list-group-item">Name: {item.name}</li>
                        <li className="list-group-item">Age: {item.age}</li>
                    </ul>
                    <button 
                        className="btn btn-danger mt-2" 
                        style={{ width: '80px', height: '40px' }} // Fixed style object
                        onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
                                handleDeleteData(item.id); // Call handleDelete if confirmed
                            }
                        }} 
                    >
                        Delete
                    </button>
                </div>  
            
            
            );
        });

        return (
            <div className="items-list">
                <img src={database} alt="Example GIF" className="img-fluid rounded" />
                  {/* Form to add new data */}
                <form onSubmit={this.props.handleAdd} className="mt-4">
                    <input 
                        
                        type="text" 
                        placeholder="Add Name" 
                        value={this.props.newName} 
                        onChange={this.props.handleName} 
                        ref={this.inputRef}
                    />
                    <input 
                        className="ms-2"
                        type="number" 
                        placeholder="Add Age" 
                        value={this.props.newAge} 
                        onChange={this.props.handleAge} 
                        
                    />
                    <button className="ms-3 btn btn-success" type="submit"   style={{ width: '80px', height: '40px' }}>Add</button>
                </form>
                {listItems.length === 0 && <p>No items to display</p>}
                {listItems}
            </div>
        );
    }
}

export default Home;
