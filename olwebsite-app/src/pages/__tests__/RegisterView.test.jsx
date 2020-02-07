import React from 'react';

import { 
    act,
    clickEventByText,
    fireEvent, 
    queryByLabelText, 
    queryByText,
    renderWithRouter, 
} from 'test-utils';

import RegisterView from '../RegisterView';
import {
    ERROR_EMPTY_EMAIL, 
    ERROR_EMPTY_PASSWORD, 
    ERROR_EMPTY_REENTERED_PASSWORD
} from '../../constants/authentication-constants';

/************************************
 * Constants
 ************************************/

const VALID_EMAIL = 'test1@gmail.com';
const VALID_PASSWORD = 'Test123!';

describe("Register View Component Tests", function() {
    let renderedComponent;

    beforeEach(() => {
        renderedComponent = renderWithRouter(<RegisterView />);
    });

    test("initial render, registration inputs should be in view", () => {
        const inputs = queryByLabelText(renderedComponent.container, 'Email');
        expect(inputs).toBeInTheDocument();
    });

    test("Valid inputs entered, fetch should be called", async () => {
        const emailInput = queryByLabelText(renderedComponent.container, 'Email-input');
        const passwordInput = queryByLabelText(renderedComponent.container, 'Password-input');
        const reenteredPasswordInput = queryByLabelText(renderedComponent.container, 'Reenter Password-input');

        fireEvent.change(emailInput, { target: { value:  VALID_EMAIL} })
        fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } })
        fireEvent.change(reenteredPasswordInput, { target: { value: VALID_PASSWORD } })

        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });

        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        await act(async () => {
            clickEventByText(renderedComponent.container,'Sign up');
        });

        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    test("Inputs not entered, error messages should be displayed", () => {
        clickEventByText(renderedComponent.container,'Sign up');
        const emailErrorMessage = queryByText(renderedComponent.container, ERROR_EMPTY_EMAIL);
        const passwordErrorMessage = queryByText(renderedComponent.container, ERROR_EMPTY_PASSWORD);
        const reenteredPasswordErrorMessage = queryByText(renderedComponent.container, ERROR_EMPTY_REENTERED_PASSWORD);

        expect(emailErrorMessage).toBeInTheDocument();
        expect(passwordErrorMessage).toBeInTheDocument();
        expect(reenteredPasswordErrorMessage).toBeInTheDocument();
    });
});
