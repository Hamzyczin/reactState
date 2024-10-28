import { useState } from "react"
import "./Form.css"

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // const updateUsername = (e)=>{
    //     setUsername(e.target.value)
    // }
    // const updatePassword = (e)=>{
    //     setPassword(e.target.value)
    // }
    const ps ="password"
  return (
    <div>
        <form>
            <div className="input-wrap">
                <label>Username:</label>
                <input name="username" onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div className="input-wrap">
                <label>Password:</label>
                <input name="password" type={ps} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <button>Submit</button>
        </form>

        <h2>
            Form values
        </h2>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
    </div>
  )
}

export default Form