import { useState } from 'react';

const useInput = (validateValue)=>{
    const [enteredValue, setEnteredValue] = useState('');
    const [valueTouched,setValueTouched] = useState(false);
    console.log(enteredValue)
    const valueIsValid = validateValue(enteredValue) ;
    const hasError = !valueIsValid && valueTouched;

    const valueChangeHandler = (event)=>{
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event)=>{
        setValueTouched(true);
    }

    const reset = ()=>{
        setEnteredValue('');
        setValueTouched(false);
    }

    return {
        reset,
        value: enteredValue,
        isValid : valueIsValid, 
        hasError,
        valueChangeHandler,
        inputBlurHandler
    }
};

export default useInput