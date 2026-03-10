import {useState} from 'react';
import { InputField } from "../components/InputField";
import { QueryType } from "../components/QueryType";
import { MessageField } from "../components/MessageField";
import { ConsentCheckbox } from "../components/ConsentCheckbox";

export function ContactPage() {
  const nameRegex = /^[A-Za-zÀ-ž]+(?:[-' ][A-Za-zÀ-ž]+)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [person, setPerson] = useState ({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errorMsg, setErrorMsg] = useState({
    firstNameMsg: '',
    lastNameMsg: '',
    emailMsg: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      firstNameMsg: '',
      lastNameMsg: '',
      emailMsg: ''
    };

    if(!nameRegex.test(person.firstName)) {
      newErrors.firstNameMsg = 'Please enter a valid first name';
    }

    if(!nameRegex.test(person.lastName)) {
      newErrors.lastNameMsg = 'Please enter a valid last name';
    }

    if(!emailRegex.test(person.email)) {
      newErrors.emailMsg = 'Please enter a valid email address';
    }

    setErrorMsg(newErrors);
  } 

  function handleInputChange (e, fieldName) {
    setPerson({...person, [fieldName]: e.target.value})
  }

  // function handleFirstNameInput(e) {
  //    setPerson({...person, firstName: e.target.value});
  // }  

  // function handleLastNameInput(e) {
  //   setPerson({...person, lastName: e.target.value});
  // }

  // function handleEmailInput(e) {
  //   setPerson({...person, email: e.target.value});
  // }

  return (
    <main>
      <h1>Contact Us</h1>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          handleInputChange={handleInputChange}
          person={person}
          errorMsg={errorMsg}
        />
        <QueryType />
        <MessageField />
        <ConsentCheckbox />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}