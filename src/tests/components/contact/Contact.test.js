import { screen, render } from "@testing-library/react";
import { Contact } from '../../../components';


describe('Tests about Contact Component', () => {

    test('Should have an id with contact value', () => {
        render(<Contact />)
        screen.getByTestId('contact');
    })
})