import React from 'react';
import { TextField, Label, Input } from 'react-aria-components';

function AriaTextField() {
  return (
    <TextField>
      <Input aria-label='Your content' placeholder="Type here..." />
    </TextField>
  );
}

export default AriaTextField;