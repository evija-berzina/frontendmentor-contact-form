export function ConsentCheckbox({handleCheckboxField, person, errorMsg}) {

  return (
    <div>
      <label className="flex items-center gap-4 cursor-pointer" htmlFor="myCheckbox">
        <input 
          className="w-4 h-4 accent-[hsl(var(--green-600))] hover:accent-[hsl(var(--green-600))] hover:"
          checked={person.checkbox}
          onChange={() => handleCheckboxField('checkbox')}
          type="checkbox"
          name="myCheckbox"
          id="myCheckbox"
          required
        />
        I consent to being contacted by the team *
      </label>
      <p className="error-message">{errorMsg.checkboxMsg}</p>
    </div>
  )
}
