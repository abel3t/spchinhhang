import React, { useState, useEffect } from 'react';
import { Plus, Minus } from '../AllSvgIcon';
import InputIncDecWrapper from './InputIncDec.style';

type IncDecProps = {
  id?: any;
  type?: 'horizontal' | 'vertical';
  disabled?: boolean;
  label?: string;
  className?: string;
  value?: number;
  onUpdate?: Function;
  style?: React.CSSProperties;
  onClick?: any;
};

const InputIncDec = React.forwardRef<HTMLInputElement, IncDecProps>(({
  onUpdate,
  className,
  value,
  type,
  style,
  onClick,
}, ref) => {
  // Increment Decrement State
  const [state, setState] = useState(value);

  // Add all classs to an array
  const addAllClasses: string[] = ['quantity'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Type check and class
  if (type) {
    addAllClasses.push(type);
  }

  useEffect(() => {
    setState(value);
  }, [value]);

  // Increment Function
  const increment = (e: any) => {
    let currentValue: any = state;
    setState(++currentValue);
    onUpdate(currentValue, e);
  };

  // Decrement Function
  const decrement = (e: any) => {
    let currentValue: any = state;
    setState(currentValue > 0 ? --currentValue : 0);
    onUpdate(currentValue, e);
  };

  // OnChange Function
  const handleOnChange = (e: any) => {
    let currentValue: any = e.target.value;
    setState(currentValue);
    onUpdate(currentValue, e);
  };

  return (
    <InputIncDecWrapper
      className={addAllClasses.join(' ')}
      style={style}
      onClick={onClick}
    >
      <button className="btn decBtn" onClick={decrement}>
        <Minus />
      </button>
      <input
        ref={ref}
        className="qnt-input"
        type="number"
        value={state}
        onChange={handleOnChange}
      />
      <button className="btn incBtn" onClick={increment}>
        <Plus />
      </button>
    </InputIncDecWrapper>
  );
})

export default InputIncDec;
