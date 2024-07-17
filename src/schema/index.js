import * as Yup from 'yup';

export const saveVali = Yup.object().shape({
    email: Yup.string().label('Email').required('Please enter your Email.').email('Must a valid email address.'),
});