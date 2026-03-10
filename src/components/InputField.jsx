

export function InputField() {

  return (
    <>
      <div>
        <label htmlFor="first-name">First Name *</label>
        <input type="text" id="first-name" name="first-name" />

        <label htmlFor="last-name">Last Name *</label>
        <input type="text" id="last-name" name="last-name" />
      </div>

      <label htmlFor="email">Email Adress *</label>
      <input type="email" id="email" name="email" />
    </>
  )
}