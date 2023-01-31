import { screen, render } from "@testing-library/react";
import { Services } from '../../../components';


describe('Tests about Contact Component', () => {

    test('Should have an id with services value', () => {
        render(<Services />)
        screen.getByTestId('services');
    })
})