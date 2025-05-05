import React from 'react';
import { useButton } from 'react-aria';

export default function AriaSubmitButton(props) {
  const { onPress } = props;
  const { buttonProps } = useButton(props);

  return (
    <button {...buttonProps} onClick={onPress}>
      Submit
    </button>
  );
}