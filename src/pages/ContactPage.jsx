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
    email: '',
    queryType: '',
    message: ''
  });
  const [errorMsg, setErrorMsg] = useState({
    firstNameMsg: '',
    lastNameMsg: '',
    emailMsg: '',
    queryMsg: '',
    messageMsg: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      firstNameMsg: '',
      lastNameMsg: '',
      emailMsg: '',
      queryMsg: '',
      messageMsg: ''
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
    
    if(person.queryType === "") {
      newErrors.queryMsg = 'Please select a query type';
    }

    if(person.message === "") {
      newErrors.messageMsg = 'This field is required';
    }

    setErrorMsg(newErrors);
  } 

  function handleInputChange (e, fieldName) {
    setPerson({...person, [fieldName]: e.target.value})
  }

  function handleRadioInput(e) {
    setPerson({...person, queryType: e.target.value})
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
      <form action="" onSubmit={handleSubmit} noValidate>
        <InputField
          handleInputChange={handleInputChange}
          person={person}
          errorMsg={errorMsg}
        />
        <QueryType
          handleRadioInput={handleRadioInput}
          errorMsg={errorMsg}
        />
        <MessageField
          handleInputChange={handleInputChange}
          person={person}
          errorMsg={errorMsg}
        />
        <ConsentCheckbox />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}