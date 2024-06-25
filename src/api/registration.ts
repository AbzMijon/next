import instance from "./instanse";

export const fetchCreateUser = (data:any) => {
    instance.post('/auth/registration', {
        email: data.email,
        password: data.password,
    });
};