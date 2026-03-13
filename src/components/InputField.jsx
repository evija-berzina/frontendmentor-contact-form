export function InputField({person, errorMsg, handleInputChange}) {
  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col md:flex-1">
          <label htmlFor="first-name" className="
          pb-2">First Name *</label>
          <input
            className={`${errorMsg.firstNameMsg ? 'input-error' : 'input-normal'}`}
            value={person.firstName}
            onChange={(e) => handleInputChange(e, 'firstName')}
            type="text"
            id="first-name"
            name="first-name"
            autoComplete="given-name"
            required
          />
          <p className="error-message">{errorMsg.firstNameMsg}</p>
        </div>

        <div className="flex flex-col md:flex-1">
          <label htmlFor="last-name" className="
          pb-2">Last Name *</label>
          <input
            className={`${errorMsg.lastNameMsg ? 'input-error' : 'input-normal'}`}
            value={person.lastName}
            onChange={(e) => handleInputChange(e, 'lastName')}
            type="text"
            id="last-name"
            name="last-name"
            autoComplete="family-name"
            required
          />
          <p className="error-message">{errorMsg.lastNameMsg}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="
          pb-2">Email Adress *</label>
        <input
          className={`${errorMsg.emailMsg ? 'input-error' : 'input-normal'}`}
          value={person.email}
          onChange={(e) => handleInputChange(e, 'email')}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
        <p className="error-message">{errorMsg.emailMsg}</p>
      </div>
    </div>
  )
}