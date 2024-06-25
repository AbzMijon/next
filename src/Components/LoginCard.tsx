import { Formik, Form } from 'formik';
import styled from 'styled-components';
import LoginFormikInput from './FormikInputs/LoginFormikInput';
import * as yup from 'yup';

const StyledLoginCard = styled.div `
    .login__form {
        margin-top: 35px;
    }
`

function LoginCard() {

    type initialFormvaluesTypes = {
        email: string,
        password: string,
    }
    const initialFormValues:initialFormvaluesTypes = {
        email: '',
        password: '',
    }

    const validateSchema = yup.object().shape({
        email: yup.string().required('Field is required!').email('Invalid email address'),
        password: yup.string().required('Field is required!').min(4, 'unreliable password!').max(50, 'password is so loong..'),
    })

    return (
        <StyledLoginCard>
            <div className='login'>
                <button className='login__google'>Continue with Google</button>
                <Formik initialValues={initialFormValues} validationSchema={validateSchema} onSubmit={(formValues) => console.log(formValues)}>
                    <Form className='login__form'>
                        <div className='login__input-wrap'>
                            <LoginFormikInput name='email' type='email' placeholder='Email' required />
                        </div>
                        <div className='login__input-wrap'>
                            <LoginFormikInput name='password' type='password' placeholder='Password' required />
                        </div>
                        <button className='btn-contact modal__btn'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </StyledLoginCard>
    )
}

export default LoginCard;