import React, { Component } from 'react';

class Content extends Component {
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
                {listItems.length === 0 && <p>No items to display</p>}
                {listItems}
            </div>
        );
    }
}

export default Content;
