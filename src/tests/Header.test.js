import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../src/components/Header';

describe('Header', () => {
    test('renders links correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(getByText('Home')).toBeInTheDocument();
        expect(getByText('Todos')).toBeInTheDocument();
        expect(getByText('Contact')).toBeInTheDocument();
    });
});
