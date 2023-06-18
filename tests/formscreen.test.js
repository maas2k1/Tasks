import { handleFormSubmit } from './formscreen';


const navigationMock = {
  navigate: jest.fn(),
};

const alertMock = jest.fn();

describe('Form Submission Feature', () => {
  test('should navigate and show an alert message on form submission', () => {
    const name = 'Ahmed';
    const age = 22;

    
    handleSubmitForm(name, age, navigationMock, alertMock);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home');
    expect(alertMock).toHaveBeenCalledWith(`Welcome, ${name}! Your age is ${age}.`);
  });
});
