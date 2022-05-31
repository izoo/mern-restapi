import {useState,useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
function Login()
{
    const [formData,setFormData] = useState({
        email:'',
        password:'',
    })

    const {email,password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <>
        <section className="heading">
           <h1>
              <FaSignInAlt /> Login
           </h1>
           <p>Login and start setting goals</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                  <div className="form-group">
                      <input type="text" name="email" id="email" className="form-control" 
                      placeholder='Enter Email' />
                  </div>
                  <div className="form-group">
                      <input type="password" name="password" id="password" className="form-control" 
                      placeholder='Enter Password'  />
                   </div>
                   <div className="form-group">
                       <button type="submit" className='btn btn-default'>Login</button>
                   </div>


            </form>
        </section>
        </>
    )
}

export default Login