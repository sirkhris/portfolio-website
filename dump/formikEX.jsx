import { useFormik } from 'formik';
import * as Yup from 'yup';

function Error({ error, touched }) {
  return (
    <div className='contact__error'>
      {error && touched ? <div>Required</div> : <div>&nbsp;</div>}
    </div>
  );
}

export function ContactForm() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required('Must enter a First Name'),
      lastname: Yup.string().required('Must enter a Last Name'),
      email: Yup.string()
        .email('Invaild Email Address')
        .required('Must enter an Email'),
      subject: Yup.string().required('Must enter a Subject'),
      message: Yup.string().required('Must enter a Message'),
    }),

    onSubmit: async function (values) {
      console.log(values);
      resetForm();
      // try {
      //   await

      // } catch (err) {
      //   console.log(err);
      // }
    },
  });
  return (
    <form className='contact__form' onSubmit={handleSubmit}>
      <h1 className='contact__title'>Contact Me!</h1>
      <div className='contact__item'>
        <input
          type='text'
          name='firstname'
          placeholder='First Name'
          className=''
          onChange={handleChange}
          value={values.firstname}
          onBlur={handleBlur}
        />
        <Error error={errors.firstname} touched={touched.firstname} />
      </div>
      <div className='contact__item'>
        <input
          type='text'
          name='lastname'
          placeholder='Last Name'
          className=''
          onChange={handleChange}
          value={values.lastname}
          onBlur={handleBlur}
        />
        <Error error={errors.lastname} touched={touched.lastname} />
      </div>
      <div className='contact__item'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className=''
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        <Error error={errors.email} touched={touched.email} />
      </div>
      <div className='contact__item'>
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          className=''
          onChange={handleChange}
          value={values.subject}
          onBlur={handleBlur}
        />
        <Error error={errors.subject} touched={touched.subject} />
      </div>
      <div className='contact__item'>
        <textarea
          name='message'
          placeholder='Message'
          className=''
          onChange={handleChange}
          value={values.message}
          onBlur={handleBlur}
        />
        <Error error={errors.message} touched={touched.message} />
      </div>
      <button className='accent-button' type='submit'>
        submit
      </button>
    </form>
  );
}
