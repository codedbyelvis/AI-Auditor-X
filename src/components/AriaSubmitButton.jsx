import React from 'react';
import { useButton } from 'react-aria';

export default function AriaSubmitButton(props) {
  const { onPress, ...restProps } = props;
  const { buttonProps } = useButton({ ...restProps, onPress });

  return (
    <button {...buttonProps} type="submit" onClick={onPress}>
      Submit
    </button>
  );
}