export function QueryType({errorMsg, handleRadioInput}) {

  return (
    <>
      <div>
        Query Type *
        <label>
          <input onChange={ (e) => handleRadioInput(e)} type="radio" name="myRadio" value="general-enquiry" required />
          General Enquiry
        </label>
        <label>
          <input onChange={(e) => handleRadioInput(e)} type="radio" name="myRadio" value="support-request" required />
          Support Request
        </label>
      </div>
      <p>{errorMsg.queryMsg}</p>
    </>
  )
}