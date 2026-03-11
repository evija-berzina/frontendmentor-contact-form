export function ConsentCheckbox({handleCheckboxField, person, errorMsg}) {

  return (
    <>
      <label htmlFor="myCheckbox">
        <input 
          checked={person.checkbox}
          onChange={() => handleCheckboxField('checkbox')}
          type="checkbox"
          name="myCheckbox"
          id="myCheckbox"
          required
        />
        I consent to bring contacted by the team *
      </label>
      <p>{errorMsg.checkboxMsg}</p>
    </>
  )
}
