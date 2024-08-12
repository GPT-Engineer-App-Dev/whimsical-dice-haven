import React from 'react';
import DiceRoller from '../components/DiceRoller';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">Virtual Dice Roller</h1>
        <DiceRoller />
      </div>
    </div>
  );
};

export default Index;