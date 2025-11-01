export default function Square({ value, onClick, disabled }){
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          width: 96, height: 96, fontSize: 32, fontWeight: 'bold',
          cursor: disabled ? 'default' : 'pointer'
        }}>
        {value || ''}
      </button>
    );
  }