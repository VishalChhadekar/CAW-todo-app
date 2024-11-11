import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/components/Footer';

describe('Footer', () => {
    test('displays contact information', () => {
        const { getByText } = render(<Footer />);
        expect(getByText('Contact us at contact@todoapp.com')).toBeInTheDocument();
    });
});
