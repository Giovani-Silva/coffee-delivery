import { Minus, Plus } from 'phosphor-react';
import { StepperWrapper } from './styles';

export function Stepper() {
  return (
    <StepperWrapper>
      <button type="button">
        <Plus size={16} />
      </button>
      <input type="number" pattern="[0-9]+" inputMode="numeric" min="1" max="10" />
      <button type="button">
        <Minus size={16} />
      </button>
    </StepperWrapper>
  );
}
