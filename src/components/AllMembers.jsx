import { useEffect, useState } from 'react'
import api from '../services/config'
import styles from "./AllMember.module.css"
// import Member from './Member'

function AllMembers() {
    const [member , setMembers ] = useState([])


    useEffect(()=>{
      const fetchUsers = async ()=>{
        try {
            setMembers(await api.get("/users"))
            console.log(member);
        } catch (error) {
            console.log(error.message);
        }
      }
      fetchUsers()
    },[])
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {member.map((member) => (
          <tr key={member.id}>
            <td>{member.name.firstname}</td>
            <td>{member.name.lastname}</td>
            <td>{member.email}</td>
            <td>{member.address.city}</td>
            <td>{member.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default AllMembers