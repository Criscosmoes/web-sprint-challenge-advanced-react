import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {


    render(<CheckoutForm />)


    //get access to input fields 

    const firstNameInput = screen.getByLabelText(/first name/i); 
    const lastNameInput = screen.getByLabelText(/last name/i); 
    const addressInput = screen.getByLabelText(/address/i); 
    const cityInput = screen.getByLabelText(/city/i); 
    const stateInput = screen.getByLabelText(/state/i); 
    const zipInput = screen.getByLabelText(/zip/i); 


    // access and click our button 

    const button = screen.getByRole('button'); 
    fireEvent.click(button); 

    expect(firstNameInput).toBeTruthy(); 


});


