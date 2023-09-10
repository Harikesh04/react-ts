import { useState } from 'react';

// Define a generic DropdownProps with a type parameter T for option type
type DropdownProps<T> = {
  options: T[]; // An array of options of type T
  onSelect: (selectedOption: T) => void; // A function to handle option selection
};

// Generic Dropdown component
function Dropdown<T>({ options, onSelect }: DropdownProps<T>) {
  const [selectedOption, setSelectedOption] = useState<T | null>(null);

  const handleOptionSelect = (option: T) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <label>Select an option:</label>
      <select
        value={selectedOption ?? ''}
        onChange={(e) => handleOptionSelect(options.find((opt) => opt === e.target.value) as T)}
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option.toString()}>
            {option.toString()}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
}

// Example usage:
function App() {
  const numbers = [1, 2, 3, 4, 5];
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];

  const handleNumberSelect = (selectedNumber: number) => {
    console.log(`Selected number: ${selectedNumber}`);
  };

  const handleFruitSelect = (selectedFruit: string) => {
    console.log(`Selected fruit: ${selectedFruit}`);
  };

  return (
    <div>
      <h1>Generic Dropdown Component Example</h1>

      {/* Render a dropdown for selecting numbers */}
      <Dropdown options={numbers} onSelect={handleNumberSelect} />

      {/* Render a dropdown for selecting fruits */}
      <Dropdown options={fruits} onSelect={handleFruitSelect} />
    </div>
  );
}

export default App;
