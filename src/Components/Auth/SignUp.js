import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {Formik} from 'formik'
import authStyles from '../../assets/styles/auth.css'

function SignUp(props) {
  const [successWindow, setSuccessWindow] = useState(false)

  return (
    <>
      <Modal size='md' show={props.isActive} animation={false} centered className='sign-up-animation'>
        <Modal.Body className='auth-window'>
          <Modal.Title className='auth-title'>Регистрация</Modal.Title>
          <Formik
            initialValues={{name: '', surname: '', email: '', password: '', repeatPassword: '', date: ''}}
            validate={values => {
              const errors = {}

              if (!values.name) {
                errors.name = 'Имя обязательно'
              }

              if (!values.surname) {
                errors.surname = 'Фамилия обязательна'
              }
              // document.querySelector('#surname').classList.toggle('test42')

              if (!values.email) {
                errors.email = 'Почта обязательна'
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Некорректный формат'
              }

              if (!values.password) {
                errors.password = 'Пароль обязателен'
              } else if (values.password.length > 12 || values.password.length < 6) {
                errors.password = 'Количество символов в пароле должно быть между 6 и 12'
              }

              const email = document.getElementById('email')

              email.addEventListener('input', function (event) {
                if (email.validity.typeMismatch) {
                  email.setCustomValidity('I expect an e-mail, darling!')
                } else {
                  email.setCustomValidity('')
                }
              })

              if (!values.repeatPassword) {
                errors.repeatPassword = 'Повтор пароля обязателен'
              } else if (values.repeatPassword !== values.password) {
                errors.repeatPassword = 'Пароли не совпадают'
              }

              return errors
            }}

            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
              <Form onSubmit={handleSubmit}>

                <Form.Control
                  type='name'
                  name='name'
                  placeholder='Имя'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className='form-control'
                />

                <Form.Control
                  type='surname'
                  name='surname'
                  id='surname'
                  placeholder='Фамилия'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  className='form-control'
                />

                <Form.Control
                  type='date'
                  name='date'
                  min='1921-01-01'
                  max='2021-01-01'
                  placeholder='Дата рождения'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  className='form-control'
                />

                <Form.Control
                  type='email'
                  name='email'
                  id='email'
                  placeholder='E-mail'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='form-control'
                />

                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Пароль'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className='form-control'
                />

                <Form.Control
                  type='password'
                  name='repeatPassword'
                  placeholder='Повтор пароля'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatPassword}
                  className='form-control'
                />

                {/*{errors.name && touched.name && errors.name}*/}
                {/*<br/>*/}
                {/*{errors.surname && touched.surname && errors.surname}*/}
                {/*<br/>*/}
                {/*{errors.email && touched.email && errors.email}*/}
                {/*<br/>*/}
                {/*{errors.password && touched.password && errors.password}*/}
                {/*<br/>*/}
                {/*{errors.repeatPassword && touched.repeatPassword && errors.repeatPassword}*/}

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='auth-button shadow-none mt-5'
                  onClick={() => {
                    props.updateState()
                    setSuccessWindow(true)
                  }}
                >Продолжить</Button>

              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal size='md' show={successWindow} centered animation={false} className='modal-animation'>
        <Modal.Body className='auth-window'>
          <Modal.Title className='auth-title' id='successful-title'>Регистрация</Modal.Title>

          <div className='check-mark'>
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.2123 57.5592C33.5669 56.514 35.5047 56.7748 36.5405 58.1417L47.793 72.9918C48.8288 74.3587 48.5703 76.3141 47.2157 77.3592C45.8611 78.4044 43.9233 78.1436 42.8875 76.7767L31.635 61.9266C30.5992 60.5597 30.8577 58.6043 32.2123 57.5592Z" fill="#1A1A1A"/>
              <path d="M44.5402 76.8083C43.1979 75.7471 42.9623 73.7887 44.014 72.4343L74.4819 33.1942C75.5335 31.8397 77.4742 31.602 78.8165 32.6632C80.1588 33.7245 80.3944 35.6828 79.3427 37.0373L48.8749 76.2773C47.8232 77.6318 45.8825 77.8695 44.5402 76.8083Z" fill="#1A1A1A"/>
              <circle cx="55" cy="55" r="53" stroke="#1A1A1A" stroke-width="4"/>
            </svg>
          </div>

          <div className='success-text'>Данные сохранены</div>

        </Modal.Body>
      </Modal>

    </>
  )
}

export default SignUp
