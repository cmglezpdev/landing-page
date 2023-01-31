import { screen, render } from "@testing-library/react";
import { Navbar } from '../../../components';


describe('Tests about Navbar Component', () => {

    test('Should have all links with the id of the sections', () => {
        render(<Navbar />)
    
        const options = screen.getAllByRole('listitem');
        expect(options).toHaveLength(4);

        const home = screen.getByText('Inicio');
        expect(home).toHaveAttribute('href', '#home');

        const gallery = screen.getByText('Galería');
        expect(gallery).toHaveAttribute('href', '#gallery');

        const services = screen.getByText('Servicios');
        expect(services).toHaveAttribute('href', '#services');

        const contact = screen.getByText('Contacto');
        expect(contact).toHaveAttribute('href', '#contact');
    })

    test('Should change when to do click in the menu icon', () => {
        // render(<Navbar />)
    
        // const btnOpen = screen.getByAltText('open');
        // const btnClose = screen.queryByAltText('close');
      
    })
})