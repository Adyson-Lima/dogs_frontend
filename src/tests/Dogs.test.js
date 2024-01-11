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

});