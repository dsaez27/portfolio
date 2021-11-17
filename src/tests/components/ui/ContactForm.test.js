import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { ContactForm } from '../../../components/ui/ContactForm';

describe('Pruebas en <ContactForm />', () => {
    const { findByLabelText, findByText, findByRole } = render(<ContactForm />);


    test('Debe de mostrarse correctamente', async() => {
        const wrapper = await findByRole('form');
        expect(wrapper).toBeInTheDocument();
    });

    test('mostrar error en input nombre', async () => {
        const { findByLabelText, findByText, findByRole } = render(<ContactForm />);
        const inputName = await findByLabelText('Nombre');
        await act(async () => {
            fireEvent.change(inputName, { target: { value: '' } });
            fireEvent.submit(await findByRole('button'));
        });
        const error = await findByText('Nombre es requerido');
        expect(error).toBeInTheDocument();
    });
    test('mostrar error en input email', async () => {
        const { findByLabelText, findByText, findByRole } = render(<ContactForm />);
        const inputEmail = await findByLabelText('Email');
        await act(async () => {
            fireEvent.change(inputEmail, { target: { value: '' } });
            fireEvent.submit(await findByRole('button'));
        });
        const error = await findByText('Email es requerido');
        expect(error).toBeInTheDocument();
    });
    test('Mostrar error al ingresar email inválido', async () => {
        const inputEmail = await findByLabelText('Email');
        await act(async () => {
            fireEvent.change(inputEmail, { target: { value: 'hola' } });
            fireEvent.submit(await findByRole('button'));
        });
        const error = await findByText('Por favor ingrese un email válido');
        expect(error).toBeInTheDocument();
    });
    test('mostrar error en input mensaje', async () => {
        const inputMessage = await findByLabelText('Mensaje');
        await act(async () => {
            fireEvent.change(inputMessage, { target: { value: '' } });
            fireEvent.submit(await findByRole('button'));
        });
        const error = await findByText('Mensaje es requerido');
        expect(error).toBeInTheDocument();
    });
    test('Debe de enviar el formulario', async () => {
        const inputName = await findByLabelText('Nombre');
        const inputEmail = await findByLabelText('Email');
        const inputMessage = await findByLabelText('Mensaje');
        await act(async () => {
            fireEvent.change(inputName, { target: { value: 'Juan' } });
            fireEvent.change(inputEmail, {
                target: { value: 'dssh27@gmail.com' },
            });
            fireEvent.change(inputMessage, { target: { value: 'Hola' } });
            fireEvent.submit(await findByRole('button'));
        });
        expect(inputName.value).toBe('Juan');
        expect(inputEmail.value).toBe('dssh27@gmail.com');
        expect(inputMessage.value).toBe('Hola');
    });
    test('should not display error when value is valid', async () => {
        const inputName = await findByLabelText('Nombre');
        const inputEmail = await findByLabelText('Email');
        const inputMessage = await findByLabelText('Mensaje');

        fireEvent.change(inputName, { target: { value: 'Juan' } });
        fireEvent.change(inputEmail, {
            target: { value: 'dssh27@gmail.com' },
        });
        fireEvent.change(inputMessage, { target: { value: '0123456789' } });
        fireEvent.submit(await findByRole('button'));

        await waitFor(async () => {
            const valid = await findByText('Éxito');
            expect(valid).toBeInTheDocument();
        });
    });
});
