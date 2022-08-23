// index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const validateEmail = (email) => { 
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  const [errors, setErrors] = useState({
    firstName: {msg: '', isError: false},
    lastName: {msg: '', isError: false},
    email: {msg: '', isError: false},
    age: {msg: '', isError: false},
    country: {msg: '', isError: false},
    cv: {msg: '', isError: false},
  });

  const [isValidForm, setIsValidForm] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    e.persist();
    
    console.log('Validation will start here');
    setErrors(errors => {
      const newErrors = {...errors};

      for (let key in newErrors) {
        newErrors[key].isError = false;
      }
      let isFormValid = true;

      if (!e.target.firstName.value) {
        let msg = '* First name can not be empty';
        newErrors.firstName = {msg: msg, isError: true};
        isFormValid = false;
      }

      if (!e.target.lastName.value) {
        let msg = '* Last name can not be empty';
        newErrors.lastName = {msg: msg, isError: true};
        isFormValid = false;
      }

      if (!e.target.country.value) {
        let msg = '* Please enter a country';
        newErrors.country = {msg: msg, isError: true};
        isFormValid = false;
      }

      if (isNaN(e.target.age.value)) {
        let msg = '* Age should be a number';
        newErrors.age = {msg: msg, isError: true};
        isFormValid = false;
      }

      if (!validateEmail(e.target.email.value)) {
        let msg = '* Email address must be a valid email address';
        newErrors.email = {msg: msg, isError: true};
        isFormValid = false;
      }

      if (e.target.cv.files[0] === undefined || e.target.cv.files[0].type.lastIndexOf('/pdf') === -1) {
        let msg = '* Please upload a pdf file';
        newErrors.cv = {msg: msg, isError: true};
        isFormValid = false;
      }

      setIsValidForm(isFormValid);

      return newErrors;
    });
  };

  return (
    <main className='form-container'>
      {isValidForm  ? <h1> Thank you for submitting We will connect with you soon!</h1> : <h1> Validate me Boi </h1>}

      <form action="" encType='multipart/form-data' onSubmit={handleSubmit}>
        <input type="text" className={errors.firstName.isError ? 'input-error': ''} name='firstName' placeholder="First Name" />
        {errors.firstName.isError &&  <p className="error"> {errors.firstName.msg} </p>}

        <input type="text" name='lastName' className={errors.lastName.isError ? 'input-error': ''} placeholder="Last Name" />
        {errors.lastName.isError &&  <p className="error"> {errors.lastName.msg} </p>}

        <input type="text" className={errors.age.isError ? 'input-error': ''} name='age' placeholder="Your Age" />
        {errors.age.isError &&  <p className="error"> {errors.age.msg} </p>}

        <input type="text" className={errors.email.isError ? 'input-error': ''} name='email' placeholder="Email" />
        {errors.email.isError &&  <p className="error"> {errors.email.msg} </p>}

        <select name="country" className={errors.country.isError ? 'input-error': ''}>
          <option value="">Select your country</option>
          <option value="india">India</option>
          <option value="japan">Japan</option>
          <option value="USA">USA</option>
        </select>
        {errors.country.isError &&  <p className="error"> {errors.country.msg} </p>}

        <input type="file" name='cv' className={errors.country.isError ? 'input-error': ''} />
        {errors.cv.isError &&  <p className="error"> {errors.cv.msg} </p>}

        <button type="submit">
          Save
        </button>
      </form>

    </main>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
