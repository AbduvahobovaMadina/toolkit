import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromUsers } from '../../redux/user-slice'


function Users({data}) {
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  console.log(user);
  
  return (
    <div className='users__wrapper'>
      {
        data?.map(user => 
          <div key={user.id} className="users__card">
              <img src={user.gender === "male" ? male : female} alt="" />
              <h2>{user.name}</h2>
              <p>{user.profession}</p>
              <p>{user.age}</p>
              <button onClick={()=> dispatch(removeFromUsers(user))}>Remove</button>
          </div>
        )
      }
    </div>
  )
}

export default Users