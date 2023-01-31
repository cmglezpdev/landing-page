import { render, screen } from "@testing-library/react";
import { CardCar } from "../../../components/gallery/CardCar";


describe('Test about CardCar Component', () => { 

    test('Should render CardCar component successfully', () => {

        render(<CardCar
            img="/img4.jpg"
            name="Card 1"
            info="This is a description of the car"
        />)

        screen.getByText('Card 1');
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', '/img4.jpg');

        screen.getByText("This is a description of the car");
        screen.getByRole('button');
    })
})