import React, {useState} from "react";

const App = ()=>{

    const [fullName, setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });
    const inputEvent = (event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        //const value = event.target.value;
        //const name = event.target.name;

        const {value, name} = event.target;

        setFullName((preValue)=>{
            //console.log(preValue);
            if(name === "fname"){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            }else if(name === "lname"){
                    return{
                        fname: preValue.fname,
                        lname: value,
                        email: preValue.email,
                        phone: preValue.phone,
                    };
                }else if(name === "email"){
                    return{
                        fname: preValue.fname,
                        lname: preValue.lname,
                        email: value,
                        phone: preValue.phone,
                    };
                }else if(name === "phone"){
                    return{
                        fname: preValue.fname,
                        lname: preValue.lname,
                        email: preValue.email,
                        phone: value,
                    };
                }
            
        });
    };
    const onSubmits = (event) =>{
        event.preventDefault();
        alert("Form Submitted");
    
    };
    
    return(
    <>
    <div>
    <form onSubmit={onSubmits}>
    <div>
    <h1>Hello {fullName.fname}{fullName.lname}</h1>
    <p>{fullName.email}</p>
    <p>{fullName.phone}</p>
    <br/>
    <input type="text" placeholder="Enter Your Name" name="fname" onChange={inputEvent} value={fullName.fname}/>
    <br/>
    <input 
    type="text" 
    placeholder="Enter Your Name" 
    name="lname" 
    onChange={inputEvent} 
    value={fullName.lname}
    />
    <br/>
    <input 
    type="email" 
    placeholder="Enter Your Email" 
    name="email" 
    onChange={inputEvent} 
    value={fullName.email}
    />
    <br/>
    <input 
    type="number" 
    placeholder="Enter Your Phone number" 
    name="phone" 
    onChange={inputEvent} 
    value={fullName.number}
    />
    <br/>
    <button type="submit">Click Here</button>
    </div>
    </form>
    </div>
    </>
    );
};

export default App;

