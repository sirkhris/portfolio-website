import { useFormik } from 'formik';
import * as Yup from 'yup';

function Error({ error, touched }) {
  return (
    <div className='contact__error'>
      {error && touched ? <div>Required</div> : <div>&nbsp;</div>}
    </div>
  );
}

export function FooterBar() {
  //
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
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Must enter a First Name'),
      lastName: Yup.string().required('Must enter a Last Name'),
      email: Yup.string()
        .email('Invaild Email Address')
        .required('Must enter an Email'),
      message: Yup.string().required('Must enter a Message'),
    }),

    onSubmit: /*async*/ function (values) {
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
    <main>
      <div className='home__section-final-container'>
        <div className='home__subtitle'>Interested in working with me?</div>
      </div>
      <form className='contact' onSubmit={handleSubmit}>
        <div className='contact__title'>Contact me!</div>
        <div className='contact__container'>
          <div className='contact__subject-wrapper'>
            <div className='contact__subject'>
              First Name*
              <div className='contact__input'>
                <input
                  type='text'
                  name='firstName'
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                />
                <Error error={errors.firstName} touched={touched.firstName} />
              </div>
            </div>
            <div className='contact__subject'>
              Last Name*
              <div className='contact__input'>
                <input
                  type='text'
                  name='lastName'
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                />
                <Error error={errors.lastName} touched={touched.lastName} />
              </div>
            </div>
          </div>
          <div className='contact__subject-wrapper'>
            <div className='contact__subject'>
              Email*
              <div className='contact__input'>
                <input
                  type='text'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  size='46'
                />
                <Error error={errors.email} touched={touched.email} />
              </div>
            </div>
          </div>
          <div className='subject-wrapper'>
            <div className='contact__subject'>
              Message
              <div className='contact__textarea'>
                <textarea
                  type='textarea'
                  name='message'
                  onChange={handleChange}
                  value={values.message}
                  onBlur={handleBlur}
                  rows='5'
                  cols='46'
                />
                <Error error={errors.message} touched={touched.message} />
              </div>
            </div>
          </div>
        </div>
        <button className='contact__button' type='submit'>
          Submit
        </button>
      </form>
      <div className='footer'>© 2022 - Khris Rhodes</div>
    </main>
  );
}
