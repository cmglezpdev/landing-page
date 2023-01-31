import { screen, render } from "@testing-library/react";
import { Home } from '../../../components';

describe('Tests about Home Component', () => {

    test('Should have an id with home value', () => {
        render(<Home />)
        screen.getByTestId('home');
    })


    test('Should have a link with "#gallery" url', () => {

        render(<Home />)

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '#gallery');
        expect(link).toHaveTextContent('Galería de coches');
    })

})