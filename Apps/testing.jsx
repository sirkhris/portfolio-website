import { useRef, useState } from 'react';

const formData = {
  firstName: '',
  lastName: '',
};

export function TestingApp() {
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');

  const [inputFields, setInputFields] = useState(formData);

  const inputFn = () =>
    setInputFields({
      ...inputFields,
      firstName: firstNameRef.current.value,
    });

  const inputLn = () =>
    setInputFields({
      ...inputFields,
      lastName: lastNameRef.current.value,
    });

  function submitButton(e) {
    e.preventDefault();
    console.log(inputFields);
    setInputFields(formData);
  }

  return (
    <form onSubmit={submitButton}>
      Type your Name:
      <input
        ref={firstNameRef}
        value={inputFields.firstName}
        type='text'
        name='firstName'
        placeholder='first'
        onChange={inputFn}
      />
      <input
        ref={lastNameRef}
        value={inputFields.lastName}
        type='text'
        name='lastName'
        placeholder='last'
        onChange={inputLn}
      />
      <button type='submit'>submit</button>
    </form>
  );
}

//
//testing radio buttons
// <form>
//   <div>
//     Pick your sex:
//     <div>
//       <input type='radio' value='male' name='sex' /> Male
//     </div>
//     <div>
//       <input type='radio' value='female' name='sex' /> Female
//     </div>
//     <div>
//       <input type='radio' value='attack-helicopter' name='sex' /> Attack
//       helicopter
//     </div>
//   </div>
// </form>
//
