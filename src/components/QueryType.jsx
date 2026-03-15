export function QueryType({person, errorMsg, handleRadioInput}) {

  return (
    <div className="flex flex-col">
      <label className="pb-2">Query Type *</label>
        <div className="flex flex-col gap-4 md:flex-row">
          <label className={`${person.queryType === "general-enquiry" ? 'checked-radio-container' : 'form-radio-container'} md:flex-1`} >
            <input
              className={`w-4 h-4 cursor-pointer ${person.queryType ? 'accent-[hsl(var(--green-600))]' : ''}`}
              onChange={() => handleRadioInput('general-enquiry')}
              type="radio"
              name="myRadio"
              checked={person.queryType === "general-enquiry"}
              required
            />
            General Enquiry
          </label>
          <label className={`${person.queryType === "support-request" ? 'checked-radio-container' : 'form-radio-container'} md:flex-1`} >
            <input
              className={`w-4 h-4 cursor-pointer ${person.queryType ? 'accent-[hsl(var(--green-600))]' : ''}`}
              onChange={() => handleRadioInput('support-request')}
              type="radio"
              name="myRadio"
              checked={person.queryType === "support-request"}
              required
            />
            Support Request
          </label>
        </div>
      <p className="error-message">{errorMsg.queryMsg}</p>
    </div>
  )
}