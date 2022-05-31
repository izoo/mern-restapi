
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
function  Register()
{
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        passwordtwo:'',
    })

    const {name,email,password,passwordtwo} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
           ...prevState,
           [e.target.name]:e.target.value
        }))
    }

    const onSubmit = (e)  => {
        e.preventDefault()
    }

    return <>
    <section className='heading'>
    <h1>
        <FaUser /> Register
    </h1>
    <p>Please create an account</p>
    </section>
    <section className="form">
        <form onSubmit={onSubmit}>
           <div className="form-group">
           <input type="text" name="name" className="form-control" 
            id="name" value={name} placeholder="Ener your name"
            onChange={onChange} />
           </div>
           <div className="form-group">
           <input type="text" name="name" className="form-control" 
            id="name" value={name} placeholder="Ener your name"
            onChange={onChange} />
           </div>
           <div className="form-group">
           <input type="text" name="email" className="form-control" 
            id="email" value={email} placeholder="Ener your email"
            onChange={onChange} />
           </div>
           <div className="form-group">
           <input type="password" name="password" className="form-control" 
            id="name" value={password} placeholder="Etner your password"
            onChange={onChange} />
           </div>
           <div className="form-group">
           <input type="password" name="passwordtwo" className="form-control" 
            id="passwordtwo" value={passwordtwo} placeholder="Confirm Password"
            onChange={onChange} />
           </div>
           <div className="form-group">
               <button type="submit" className='btn btn-block'>Submit</button>
           </div>
        </form>
    </section>
    </>
    
}

export default Register