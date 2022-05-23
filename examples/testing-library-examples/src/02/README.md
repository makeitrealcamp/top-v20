# Multiple element testing

La mayoría de sus casos de prueba de React deben usar métodos para encontrar elementos. React Testing Library le proporciona varios métodos para encontrar un elemento por atributos específicos además del método `getByText()`:

- `getByText()`: encontrar el elemento por su valor textContent
- `getByRole()`: por su valor de atributo de `role`
- `getByLabelText()`: por su valor de atributo de `label`
- `getByPlaceholderText()`: por su valor de atributo de `placeholder`
- `getByAltText()`: por su valor de atributo de `alt`
- `getByDisplayValue()`: por su atributo de valor, generalmente para elementos `<input>`
- `getByTitle()`: por su valor de atributo de `title`
