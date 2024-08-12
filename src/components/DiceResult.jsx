import React from 'react';
import { motion } from 'framer-motion';

const DiceResult = ({ results }) => {
  const total = results.reduce((sum, result) => sum + result, 0);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Results:</h2>
      <div className="flex flex-wrap gap-2 mb-2">
        {results.map((result, index) => (
          <motion.div
            key={index}
            className="bg-purple-100 text-purple-800 font-bold rounded-full w-10 h-10 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {result}
          </motion.div>
        ))}
      </div>
      {results.length > 0 && (
        <p className="text-lg">
          Total: <span className="font-bold text-purple-700">{total}</span>
        </p>
      )}
    </div>
  );
};

export default DiceResult;