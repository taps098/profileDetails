import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { RecoilRoot } from "recoil"

test('render the app without fail', () => {
  render(
    <RecoilRoot>
    <App />
    </RecoilRoot>
    );
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
  expect(app).toMatchSnapshot();
});
test('check for edit button and save button', () => {
  render(
    <RecoilRoot>
    <App />
    </RecoilRoot>
  );
    const editButton = screen.getByTestId('edit-button');
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    const saveButton = screen.getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();
});
test('check the the change name function', async () => {
  render(
    <RecoilRoot>
    <App />
    </RecoilRoot>
  );
  const editButton = screen.getByTestId('edit-button');
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);

    // dom should have the input element
    const nameInputField = screen.getByTestId('nameInput');
    fireEvent.change(nameInputField, {target: {value: 'New Name'}})
    const saveButton = screen.getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();
    fireEvent.click(saveButton);
    await waitFor(() => {
      const newNameField = screen.getByTestId('nameField');
      expect(newNameField).toHaveTextContent('New Name');
    }) 
});
