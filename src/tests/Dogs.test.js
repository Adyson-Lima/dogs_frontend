import {screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dogs from '../pages/Dogs';

describe('Testes da tela Dogs', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Dogs/>
      </BrowserRouter>
    );
  });

  it('Existe card em Dogs?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Dogs?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Dogs?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Dogs?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Dogs?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});
