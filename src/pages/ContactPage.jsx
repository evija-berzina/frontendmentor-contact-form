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
    message: '',
    checkbox: false
  });
  const [errorMsg, setErrorMsg] = useState({
    firstNameMsg: '',
    lastNameMsg: '',
    emailMsg: '',
    queryMsg: '',
    messageMsg: '',
    checkboxMsg: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      firstNameMsg: '',
      lastNameMsg: '',
      emailMsg: '',
      queryMsg: '',
      messageMsg: '',
      checkboxMsg: ''
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

    if(person.checkbox === false) {
      newErrors.checkboxMsg = 'To submit this form, please consent to being contacted';
    }

    setErrorMsg(newErrors);
  } 

  function handleInputChange (e, fieldName) {
    setPerson({...person, [fieldName]: e.target.value})
  }

  function handleRadioInput(value) {
    setPerson({...person, queryType: value})
  }

  function handleCheckboxField(fieldName) {
    //!person[fieldName] apgriež boolean vērtību, tātad true kļūst par false un otrādi. Tādējādi var vienkārši pārslēgt checkbox vērtību.
    setPerson({...person, [fieldName]: !person[fieldName]});
    // person[fieldName] === false
    // ? setPerson({...person, [fieldName]: true})
    // : setPerson({...person, [fieldName]: false})
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
    <main className="bg-[hsl(var(--white))] flex flex-col rounded-xl p-8 md:w-xl">
      <h1 className="text-3xl font-bold pb-2">Contact Us</h1>
      <form
        className="flex flex-col gap-4 mt-4"
        action="" onSubmit={handleSubmit} noValidate
      >
        <InputField
          handleInputChange={handleInputChange}
          person={person}
          errorMsg={errorMsg}
        />
        <QueryType
          handleRadioInput={handleRadioInput}
          person={person}
          errorMsg={errorMsg}
        />
        <MessageField
          handleInputChange={handleInputChange}
          person={person}
          errorMsg={errorMsg}
        />
        <ConsentCheckbox
          handleCheckboxField={handleCheckboxField}
          person={person}
          errorMsg={errorMsg}
        />
        <button className="bg-[hsl(var(--green-600))] text-[hsl(var(--white))] font-bold py-3 px-6 rounded-md cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </main>
  )
}