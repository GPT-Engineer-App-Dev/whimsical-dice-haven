import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import DiceResult from './DiceResult';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

const diceTypes = [
  { value: 'd4', label: 'D4', sides: 4 },
  { value: 'd6', label: 'D6', sides: 6 },
  { value: 'd8', label: 'D8', sides: 8 },
  { value: 'd10', label: 'D10', sides: 10 },
  { value: 'd12', label: 'D12', sides: 12 },
  { value: 'd20', label: 'D20', sides: 20 },
  { value: 'd100', label: 'D100', sides: 100 },
];

const DiceRoller = () => {
  const [selectedDice, setSelectedDice] = useState('d6');
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [results, setResults] = useState([]);

  const rollDice = () => {
    const dice = diceTypes.find(d => d.value === selectedDice);
    const rolls = Array.from({ length: numberOfDice }, () => 
      Math.floor(Math.random() * dice.sides) + 1
    );
    setResults(rolls);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Select value={selectedDice} onValueChange={setSelectedDice}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select dice" />
          </SelectTrigger>
          <SelectContent>
            {diceTypes.map(dice => (
              <SelectItem key={dice.value} value={dice.value}>{dice.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          min="1"
          max="10"
          value={numberOfDice}
          onChange={(e) => setNumberOfDice(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
          className="w-20"
        />
        <Button onClick={rollDice} className="bg-purple-600 hover:bg-purple-700">
          Roll
        </Button>
      </div>
      <DiceResult results={results} />
      <div className="flex justify-center space-x-2 mt-4">
        <Dice1 className="text-purple-600" />
        <Dice2 className="text-purple-600" />
        <Dice3 className="text-purple-600" />
        <Dice4 className="text-purple-600" />
        <Dice5 className="text-purple-600" />
        <Dice6 className="text-purple-600" />
      </div>
    </div>
  );
};

export default DiceRoller;