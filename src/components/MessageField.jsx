export function MessageField({person, errorMsg, handleInputChange}) {

  return (
    <div className="flex flex-col">
      <label className="pb-2" htmlFor="message">Message *</label>
        <textarea
          className={`${errorMsg.messageMsg ? 'input-error' : 'input-normal'}`}
          value={person.message}
          onChange={(e) => handleInputChange(e, 'message')}
          id="message"
          name="message"
          rows="5"
          maxLength="500"
          lang="lv"
          required
        />
      
      <p className="error-message">{errorMsg.messageMsg}</p>
    </div>
  )
}