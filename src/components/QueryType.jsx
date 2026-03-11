export function QueryType({person, errorMsg, handleRadioInput}) {

  return (
    <>
      <div>
        Query Type *
        <label>
          <input onChange={() => handleRadioInput('general-enquiry')} type="radio" name="myRadio" checked={person.queryType === "general-enquiry"} required />
          General Enquiry
        </label>
        <label>
          <input onChange={() => handleRadioInput('support-request')} type="radio" name="myRadio" checked={person.queryType === "support-request"} required />
          Support Request
        </label>
      </div>
      <p>{errorMsg.queryMsg}</p>
    </>
  )
}