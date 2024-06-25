import { Formik, Form } from 'formik';
import styled from 'styled-components';
import LoginFormikInput from './FormikInputs/LoginFormikInput';
import * as yup from 'yup';
import { useRouter } from 'next/router'
import { ROUTES } from '@/constants';
import { fetchCreateUser } from '@/api/registration';
import { useMutation } from 'react-query'
import { useAuthStore } from '@/bookStore/bookStore';

const StyledSignupCard = styled.div `
    .login__form {
        margin-top: 35px;
    }
`

function SignupCard() {

    const router = useRouter();
    type initialFormvaluesTypes = {
        username: string,
        email: string,
        password: string,
    }
    const initialFormValues:initialFormvaluesTypes = {
        username: '',
        email: '',
        password: '',
    }

    const validateSchema = yup.object().shape({
        username: yup.string().required('Field is required!').min(3, 'Too short!').max(18, 'Too long!'),
        email: yup.string().required('Field is required!').email('Invalid email address'),
        password: yup.string().required('Field is required!').min(4, 'unreliable password!').max(50, 'password is so loong..'),
    });

    const createUser = async (data:any) => {
        fetchCreateUser(data);
    };

    const mutation = useMutation((newUser) => createUser(newUser).catch(err => console.log(err)));
    const redirectAfterSuccess = useAuthStore(state => state.redirectAfterSuccess);

    return (
        <StyledSignupCard>
            <div className='login'>
                <button className='login__google'>Continue with Google</button>
                <Formik initialValues={initialFormValues} validationSchema={validateSchema} onSubmit={(formValues:any) =>{
                    mutation.mutate(formValues);
                    if(redirectAfterSuccess === 'join') {
                        router.push(ROUTES.joinRoomPage);
                    }   else {
                            router.push(ROUTES.createRoomPage);
                    }
                }}>
                    <Form className='login__form'>
                        <div className='login__input-wrap'>
                            <LoginFormikInput name='username' type='text' placeholder='Username' required />
                        </div>
                        <div className='login__input-wrap'>
                            <LoginFormikInput name='email' type='email' placeholder='Email' required />
                        </div>
                        <div className='login__input-wrap'>
                            <LoginFormikInput name='password' type='password' placeholder='Password' required />
                        </div>
                        <button className='btn-contact modal__btn' type='submit'>Submit</button>
                    </Form>
                </Formik>
            </div>
        </StyledSignupCard>
    )
}

export default SignupCard;

/* export const getStaticProps = async (context:any) => {
    return {
        props: {}
    }
} */