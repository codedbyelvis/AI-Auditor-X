import React from 'react';
import { TextField, Label, Input, Text } from 'react-aria-components';

function AriaTextField({ label, type, id, description, ...props }) {
  return (
    <TextField {...props}>
      <Label>{label}</Label>
      <Input id={id} type={type} placeholder="Type here..." />
      {description && <Text slot="description">{description}</Text>}
    </TextField>
  );
}

export default AriaTextField;