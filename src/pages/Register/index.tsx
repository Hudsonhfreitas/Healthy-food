import * as S from './styles'

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { ChangeEvent } from 'react';
import * as Yup from 'yup';

import getCep from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface customerData {
    name: string;
    birthdate: string;
    cpf: string;
    cep: string;
    street: string;
    city: string;
    district: string;
    state: string;
}

interface viaCepProps {
    bairro: string;
    logradouro: string;
    localidade: string;
    uf: string;
}

const ufs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC']

export function Register() {

    const initialValues: customerData = {
        name: '',
        birthdate: '',
        cpf: '',
        cep: '',
        street: '',
        city: '',
        district: '',
        state: '',
    }

    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        birthdate: Yup.date().required('Birthdate is required'),
        cpf: Yup.string().required('CPF is required'),
        cep: Yup.string().required('CEP is required'),
        street: Yup.string().required('Street is required'),
        city: Yup.string().required('City is required'),
        district: Yup.string().required('District is required'),
        state: Yup.string().required('State is required'),
    })

    async function onBlurCep(e: ChangeEvent<HTMLInputElement>, setFieldValue: any) {
        const { value } = e.target;

        const cep = value?.replace(/[^0-9]/g,'');

        if(cep?.length !== 8) {
            return;
        }

        const cepData: viaCepProps = await getCep(cep)

        setFieldValue('street', cepData.logradouro)
        setFieldValue('city', cepData.localidade)
        setFieldValue('state', cepData.uf)
        setFieldValue('district', cepData.bairro)
    }

    const history = useNavigate();

    return (
        <S.Container>
            <Formik 
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={(values: customerData, { setSubmitting }: FormikHelpers <customerData>) => {
                      localStorage.setItem('@CustomerFormData', JSON.stringify(values));
                      document.cookie = `@CustomerFormData=${JSON.stringify(values)}`;
                          
                      setSubmitting(false);
                      history('/');
                  }}
            >
            {({setFieldValue, isValid, errors, touched}) => (
            <S.Content>
                <Form>
                    <S.Logo to='/'>Healhy Food</S.Logo>

                    <label htmlFor="name">Name</label>
                    <Field
                        className='field'
                        id="name"
                        name="name"
                    />
                    {errors.name && touched.name ? <S.Error>{errors.name}</S.Error> : null}

                    <label htmlFor="birthdate">Birth date</label>
                    <Field
                        className='field'
                        id="birthdate"
                        name="birthdate"
                        type="date"
                    />
                    {errors.birthdate && touched.birthdate ? <S.Error>{errors.birthdate}</S.Error> : null}
            
                    <label htmlFor="cpf">CPF</label>
                    <Field
                        className='field'
                        id="cpf"
                        name="cpf"
                        type="text"
                        maxLength="11"
                    />
                    {errors.cpf && touched.cpf ? <S.Error>{errors.cpf}</S.Error> : null}

                    <label htmlFor="cep">CEP</label>
                    <Field
                        className='field'
                        id="cep"
                        name="cep"
                        type="text"
                        accept="number"
                        onBlur={((event: ChangeEvent<HTMLInputElement>) => onBlurCep(event, setFieldValue))}
                    />
                    {errors.cep && touched.cep ? <S.Error>{errors.cep}</S.Error> : null}

                    <label htmlFor="street">Street</label>
                    <Field
                        className='field'
                        id="street"
                        name="street"
                        type="text"
                    />
                    {errors.street && touched.street ? <S.Error>{errors.street}</S.Error> : null}

                    <label htmlFor="state">District</label>
                    <Field
                        className='field'
                        id="district"
                        name="district"
                        type="text"
                    />
                    {errors.district && touched.district ? <S.Error>{errors.district}</S.Error> : null}

                    <label htmlFor="city">City / Town</label>
                    <Field
                        className='field'
                        id="city"
                        name="city"
                        type="text"
                    />
                    {errors.street && touched.street ? <S.Error>{errors.street}</S.Error> : null}

                    <label htmlFor="state">State</label>
                    <Field
                        component='select'
                        className='field'
                        id="state"
                        name="state"
                    >
                        <option value={undefined}>Select your district</option> 
                        {ufs.map(uf => (
                            <option key={uf} value={uf}>{uf}</option>
                        ))}
                    </Field>
                {errors.street && touched.street ? <S.Error>{errors.street}</S.Error> : null}
            
                <S.SubmitButton type="submit" disabled={!isValid}>Submit</S.SubmitButton>
    
                </Form>
            </S.Content>
            )}
            
          </Formik>
        </S.Container>
    )
}
  