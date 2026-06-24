import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentarios', () => {
        render(<PostComment />);
        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-button');

        //insere o primeiro comentario
        fireEvent.change(input, {target: {value: 'Primeiro comentário'}});
        fireEvent.click(button);

        //Isere o segundo comentario
        fireEvent.change(input, {target: {value: 'Segundo comentário'}});
        fireEvent.click(button);
    })
});