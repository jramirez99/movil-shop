import React from 'react'

export const Form = () => {
    return (
        <form className="form">
            <div className="section">
                <label 
                    htmlFor="name"> Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="your name"
                />
            </div>
            <div className="section">
                <label 
                    htmlFor="lastname"> Last Name: </label>
                <input 
                    type="text" 
                    id="lastaname" 
                    placeholder="Your Last Name"
                />
            </div>  
            <div className="section">
                <label 
                    htmlFor="email"> Email: </label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="You Email"
                />
            </div>  
            <div className="section">
                <label 
                    htmlFor="cell"> Cellphone: </label>
                <input 
                    type="text" 
                    id="cell" 
                    placeholder="You number"
                />
            </div>
            <div className="section">
                <input 
                    type="submit" 
                    value="Submit" 
                />
            </div>
        </form>
    );
};
