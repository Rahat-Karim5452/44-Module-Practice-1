import React from "react"

const UserDetailPage = async ({ params }) => {
  const { userId } = await params
  const res = await fetch(`http://localhost:5000/users/${userId}`)
  const user = await res.json()
  return (
    <div>
      <h2>User ID:{userId}</h2>
      <p>Name: {user.name}</p>
      <p>Name: {user.email}</p>
    </div>
  )
}

export default UserDetailPage
