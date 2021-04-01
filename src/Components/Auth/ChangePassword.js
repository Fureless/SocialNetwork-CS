import React from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {Formik} from 'formik'
import authStyles from '../../assets/styles/auth.css'

function ChangePassword(props) {
  return (
    <Modal size='md' show={props.isActive} backdrop='static' centered>
      <Modal.Body className='auth-window'>
        <Modal.Title className='auth-title' id='password-title'>Смена пароля</Modal.Title>
        <div id='change-password'>Мы отправим письмо со ссылкой на смену пароля</div>
        <Formik
          initialValues={{email: ''}}
          validate={values => {
            const errors = {}

            if (!values.email) {
              errors.email = 'E-mail обязателен'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Некорректный формат'
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

              {errors.email && touched.email && errors.email}

              <Button
                type='submit'
                disabled={isSubmitting}
                className='auth-button shadow-none'
              >Продолжить</Button>

            </Form>
          )}
        </Formik>

      </Modal.Body>
    </Modal>
  )
}

export default ChangePassword
