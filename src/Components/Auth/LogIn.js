import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {Formik} from 'formik'
import ChangePassword from './ChangePassword'
import SignUp from './SignUp'
import authStyles from '../../assets/styles/auth.css'

function LogIn() {
  const [logInWindow, setLogInWindow] = useState(true)
  const [signUpWindow, setSignUpWindow] = useState(false)
  const [changePasswordWindow, setChangePasswordWindow] = useState(false)

  const openChangePasswordWindow = () => {
    setLogInWindow(false)
    setChangePasswordWindow(true)
  }

  const openSignUpWindow = () => {
    setLogInWindow(false)
    setSignUpWindow(true)
  }

  return (
    <>
      <Modal show={logInWindow} backdrop='static' centered>
        <Modal.Body className='auth-window'>
          <Modal.Title className='auth-title'>Вход</Modal.Title>

          <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
              const errors = {}

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
                  id='less-margin'
                />

                <div className='text-right' >
                  <a
                    href='#'
                    onClick={openChangePasswordWindow}
                    className='forgotten-password'
                  >Забыли пароль?</a>
                </div>

                {/*{errors.email && touched.email && errors.email}*/}
                {/*<br/>*/}
                {/*{errors.password && touched.password && errors.password}*/}

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='auth-button shadow-none'
                  onClick={() => {
                    setLogInWindow(false)
                  }}
                >Войти</Button>

                <Button
                  className='auth-button shadow-none'
                  onClick={openSignUpWindow}
                >Зарегистрироваться</Button>

                <div className='line'>
                  <span>ИЛИ</span>
                </div>

                <Button href='https://www.google.com/' className='google-button shadow-none'>
                  <div className='google-logo'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                        <path d="M31.2535 16.2993C31.2535 14.9883 31.1471 14.0316 30.9169 13.0395H15.9463V18.9568H24.7337C24.5566 20.4273 23.5999 22.6419 21.4739 24.1301L21.4441 24.3282L26.1775 27.9951L26.5054 28.0278C29.5172 25.2463 31.2535 21.1537 31.2535 16.2993Z" fill="#4285F4"/>
                        <path d="M15.9465 31.8901C20.2516 31.8901 23.8657 30.4727 26.5056 28.0279L21.474 24.1301C20.1276 25.0691 18.3204 25.7246 15.9465 25.7246C11.7299 25.7246 8.15114 22.9432 6.87541 19.0986L6.68842 19.1145L1.76651 22.9236L1.70215 23.1026C4.3242 28.3113 9.71011 31.8901 15.9465 31.8901Z" fill="#34A853"/>
                        <path d="M6.87597 19.0986C6.53936 18.1065 6.34455 17.0434 6.34455 15.945C6.34455 14.8465 6.53936 13.7835 6.85826 12.7914L6.84934 12.5801L1.86577 8.70984L1.70272 8.7874C0.622045 10.9489 0.00195312 13.3761 0.00195312 15.945C0.00195312 18.5139 0.622045 20.941 1.70272 23.1025L6.87597 19.0986Z" fill="#FBBC05"/>
                        <path d="M15.9464 6.1654C18.9405 6.1654 20.9602 7.45872 22.1118 8.53951L26.6118 4.14574C23.8481 1.57682 20.2515 3.05176e-05 15.9464 3.05176e-05C9.71009 3.05176e-05 4.32419 3.57878 1.70215 8.78745L6.85769 12.7915C8.15113 8.94696 11.7299 6.1654 15.9464 6.1654Z" fill="#EB4335"/>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="31.2704" height="32" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  Продолжить через Google
                </Button>

              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <ChangePassword
        isActive={changePasswordWindow}
      />

      <SignUp
        isActive={signUpWindow}
        updateState={() => {
          setSignUpWindow(false)
        }}
      />
    </>
  )
}

export default LogIn
