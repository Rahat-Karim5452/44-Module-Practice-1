import UserCard from "../../components/UserCard"

const UserPage = async () => {
  const res = await fetch("http://localhost:5000/users")
  const users = await res.json()
  return (
    <div>
      <h2>Total User: {users.length}</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}
export default UserPage
