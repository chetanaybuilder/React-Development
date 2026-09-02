function Profile({ name, role, bio, skills }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
      <p>{skills}</p>
    </div>
  )
}

export default Profile