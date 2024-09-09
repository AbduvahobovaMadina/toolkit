import React, { useState } from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../redux/user-slice'


const initialState = {
  name: "",
  profession: "",
  age: ""
}

function CreateUser() {
  const [ data, setData] = useState(initialState)
  const dispatch = useDispatch()
  // const [ gender, setGender] = useState("")
  // const [title, setTitle] = useState("")
  const handleChange= (e) => {
    let {name,value} = e.target
    setData (prev => ({...prev, [name]:value}))
    // console.log(e.target.value);
    // console.log(e.target.name);
    
    
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
    let newUser = {
      id: new Date().getTime(),
      name:data.name,
      profession:data.profession,
      age: +data.age,
      gender:data.gender

    }
    console.log(newUser);
    dispatch(addToUsers(newUser))
    // data("")
    setData(initialState)
  }
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input  type="text" value={data.name} onChange={handleChange} name='name' required placeholder='name' />
        <input type="text" value={data.profession} onChange={handleChange} name='profession' required placeholder='profession' />
        <input type="number" value={data.age} onChange={handleChange} name='age' required placeholder='age' />
        <select value={data.gender} onChange={handleChange} name="gender" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}



export default CreateUser