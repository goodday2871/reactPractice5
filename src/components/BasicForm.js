import useFormInput from '../hooks/use-FormInput';

const BasicForm = (props) => {
  const {
    value:enteredFirstName,
    isValid:enteredFirstNameIsValid,
    valueHasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameInputBlurHandler,
    reset:resetFirstName
  } = useFormInput(value=>value.trim()!=='');

  const {
    value:enteredLastName,
    isValid:enteredLastNameIsValid,
    valueHasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameInputBlurHandler,
    reset:resetLastName
  } = useFormInput(value=>value.trim()!=='');

  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    valueHasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailInputBlurHandler,
    reset:resetEmail
  } = useFormInput(value=>value.indexOf('@')>0);

  let formIsValid = false;

  if(enteredFirstNameIsValid &&
     enteredLastNameIsValid && 
     enteredEmailIsValid){
      formIsValid = true;
  }

  const formSubmissionHandler = event =>{
    event.preventDefault();
    if(!enteredFirstNameIsValid &&
      !enteredLastNameIsValid && 
      !enteredEmailIsValid){
       return
   }
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameInputClasses = firstNameHasError
  ? 'form-control invalid' 
  : 'form-control';
  const lastNameInputClasses = lastNameHasError
  ? 'form-control invalid' 
  : 'form-control';
  const emailInputClasses = emailHasError
  ? 'form-control invalid' 
  : 'form-control';

  return (
    <form  onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input 
            type='text' 
            id='firstName'
            value={enteredFirstName} 
            onChange={firstNameChangeHandler} 
            onBlur={firstNameInputBlurHandler} />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text' 
            id='lastName'
            value={enteredLastName} 
            onChange={lastNameChangeHandler} 
            onBlur={lastNameInputBlurHandler}/>
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='text' 
          id='email' 
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
