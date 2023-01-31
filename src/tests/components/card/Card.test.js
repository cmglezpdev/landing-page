import { render, screen } from "@testing-library/react";

import { Card } from "../../../components/card/Card";


describe("Tests about Card Component", () =>{

    test("Should render Card Component successfully", () =>{

        const { rerender } = render(
            <Card
                img="/img4.jpg"
                name="Card 1"
                price="1000"
                benefits={["Benefits 1", "Benefits 2", "Benefits 3"]}
                linkGetPlan="#"
            />
        ); 

        screen.getByText('Card 1');
        screen.getByText('1000', { exact: false });
        screen.getByText('€/mes', { exact: false });
        screen.getByText('Adquirir');

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', '/img4.jpg');

        const benefits = screen.getAllByRole('listitem');
        expect(benefits).toHaveLength(3);
        expect(benefits[0]).toHaveTextContent('Benefits 1');
        expect(benefits[1]).toHaveTextContent('Benefits 2');
        expect(benefits[2]).toHaveTextContent('Benefits 3');

        screen.getByRole('button');

        rerender(
            <Card
                img="/img4.jpg"
                name="Card 1"
                price="1000"
                time="año"
                benefits={["Benefits 1", "Benefits 2", "Benefits 3"]}
                linkGetPlan="#"
                limitations={["Limitations 1"]}
            />
        ); 

        screen.getByText('€/año', { exact: false });

        const info = screen.getAllByRole('listitem');
        expect(info.filter(i => i.classList.contains("limitation"))).toHaveLength(1);
    })

})