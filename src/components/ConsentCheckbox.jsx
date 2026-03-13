export function ConsentCheckbox({handleCheckboxField, person, errorMsg}) {

  return (
    <div>
      <label className="flex items-center gap-4" htmlFor="myCheckbox">
        <input 
          className="w-4 h-4"
          checked={person.checkbox}
          onChange={() => handleCheckboxField('checkbox')}
          type="checkbox"
          name="myCheckbox"
          id="myCheckbox"
          required
        />
        I consent to bring contacted by the team *
      </label>
      <p className="error-message">{errorMsg.checkboxMsg}</p>
    </div>
  )
}
