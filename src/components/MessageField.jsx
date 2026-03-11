export function MessageField({person, errorMsg, handleInputChange}) {

  return (
    <>
      <label htmlFor="message">
        Message *
        <textarea
          value={person.message}
          onChange={(e) => handleInputChange(e, 'message')}
          id="message"
          name="message"
          rows="5"
          maxLength="500"
          lang="lv"
          required
        />
      </label>
      <p>{errorMsg.messageMsg}</p>
    </>
  )
}