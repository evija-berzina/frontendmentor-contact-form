export function InputField({person, errorMsg, handleInputChange}) {
  
  return (
    <>
      <div>
        <label htmlFor="first-name">First Name *</label>
        <input value={person.firstName} onChange={(e) => handleInputChange(e, 'firstName')} type="text" id="first-name" name="first-name" autoComplete="given-name" required />
        <p>{errorMsg.firstNameMsg}</p>

        <label htmlFor="last-name">Last Name *</label>
        <input value={person.lastName} onChange={(e) => handleInputChange(e, 'lastName')} type="text" id="last-name" name="last-name" autoComplete="family-name" required />
        <p>{errorMsg.lastNameMsg}</p>
      </div>

      <label htmlFor="email">Email Adress *</label>
      <input value={person.email} onChange={(e) => handleInputChange(e, 'email')} type="email" id="email" name="email" autoComplete="email" required />
      <p>{errorMsg.emailMsg}</p>
    </>
  )
}