import React from 'react'
import "./AllUsers.css"
import Users from '../../components/users/Users'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'


function AllUsers() {
  let user = useSelector(state => state.user.value)
  console.log(user);
  
  return (
    <div className='all__users'>
      {
        user.length ? <Users data={user}/> : <Empty/>
      }
    </div>
  )
}

export default AllUsers