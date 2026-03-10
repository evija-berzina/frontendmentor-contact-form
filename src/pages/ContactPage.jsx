import { InputField } from "../components/InputField";
import { QueryType } from "../components/QueryType";
import { MessageField } from "../components/MessageField";
import { ConsentCheckbox } from "../components/ConsentCheckbox";

export function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form action="">
        <InputField />
        <QueryType />
        <MessageField />
        <ConsentCheckbox />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}