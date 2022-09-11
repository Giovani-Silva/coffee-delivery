import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { StepperWrapper } from './styles';

export function Stepper() {
  const [value, setValue] = useState(1);

  function handleValue(value: number) {
    console.log(value);

    if (value < 0) {
      setValue(1);
      return;
    }

    setValue(value);
    return;
  }

  function handleClick(stepperValue: number) {
    console.log(value);
    if (value > 1 && stepperValue < 0) {
      handleValue(stepperValue + value);
      return;
    }

    handleValue(value + stepperValue);
  }

  return (
    <StepperWrapper>
      <button type="button" onClick={() => handleClick(1)}>
        <Plus size={16} />
      </button>
      <input
        type="number"
        pattern="[0-9]+"
        inputMode="numeric"
        min="1"
        max="10"
        value={value}
        onChange={(e) => handleValue(+e.target.value)}
      />
      <button type="button" onClick={() => handleClick(-1)}>
        <Minus size={16} />
      </button>
    </StepperWrapper>
  );
}
