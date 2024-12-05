import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

class Nav extends React.Component {
    render(){
        return (
            <Router>
                <div className="container mt-4">
                    <Routes>
                        <Route exact path="/" element={<Home data={this.props.data} handleDeleteData={this.props.handleDeleteData} 
                                handleAdd={this.props.handleAdd}
                                handleAge={this.props.handleAge}
                                handleName={this.props.handleName}  // Passing down the handlers to the Nav component for use in the form.
                                newName={this.props.newName}
                                newAge={this.props.newAge}
                            
                        /> } />
                        <Route exact path="/features" element={<Features />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/thank-you" element={<ThankYou />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default Nav;
