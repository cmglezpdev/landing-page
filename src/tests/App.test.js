import { screen, render } from "@testing-library/react";
import App from '../App';


describe('Tests about App Component', () => {

    test('Should exist the elements with the ids', () => {
        render(<App />)

        screen.getByTestId('home');
        screen.getByTestId('gallery');
        screen.getByTestId('services');
        screen.getByTestId('contact');
    })
})