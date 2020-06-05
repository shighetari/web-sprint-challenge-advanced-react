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
    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstname = screen.getByLabelText(/first name/i)
    const lastname = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    expect(firstname).toBeInTheDocument()
    expect(lastname).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(zip).toBeInTheDocument()

    //events
    fireEvent.change(firstname, { target: { value: 'Francisco' } })
    fireEvent.change(lastname, { target: { value: 'Barrios' } })
    fireEvent.change(address, { target: { value: '42 Wallaby Way, Sydney' } })
    fireEvent.change(city, { target: { value: 'Sydney' } })
    fireEvent.change(state, { target: { value: 'Australia' } })
    fireEvent.change(zip, { target: { value: '123456' } })

    const checkoutButton = screen.getByText('Checkout')
    fireEvent.click(checkoutButton)

    const newName = screen.getByText(/francisco/i)
    expect(newName).toBeInTheDocument()

    const showSuccessMessage = screen.getByTestId('successMessage')
    expect(showSuccessMessage).toBeInTheDocument()


    // breakTheTest()

});


// function breakTheTest() {
//     if (someValue === true) {
//         //do nothing
//     } else {
//         throw
//     }
// }
// throw new Error("this test failed because we threw an error inside the breaktest")
