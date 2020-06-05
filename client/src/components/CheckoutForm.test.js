import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("rendering the checkout form", () => {
    render(<CheckoutForm />)

});

test("form header renders", () => {

    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    
});

test("form shows success message on submit with form details", () => {


});
