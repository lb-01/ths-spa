import { useState } from 'preact/hooks';
import { add, subtract } from '@lb-01/ths-calculator';

export function Calculator() {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [result, setResult] = useState<number | null>(null);

  const handleAdd = () => {
    setResult(add(Number(num1), Number(num2)));
  };

  const handleSubtract = () => {
    setResult(subtract(Number(num1), Number(num2)));
  };

  return (
    <div style={{
      background: 'rgba(94, 206, 210, 0.9)',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>Calculator</h2>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="number"
          value={num1}
          onInput={(e) => setNum1((e.target as HTMLInputElement).value)}
          style={{
            padding: '8px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100px',
          }}
        />
        <input
          type="number"
          value={num2}
          onInput={(e) => setNum2((e.target as HTMLInputElement).value)}
          style={{
            padding: '8px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100px',
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
        <button
          onClick={handleSubtract}
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            background: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Subtract
        </button>
      </div>
      {result !== null && (
        <div style={{
          padding: '12px',
          background: '#f5f5f5',
          borderRadius: '4px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#333',
        }}>
          Result: {result}
        </div>
      )}
    </div>
  );
}