import React, { useState } from 'react';

function TextCollapse(titulo, texto) {
  const [isColapsado, setIsColapsado] = useState(true);

  const handleToggle = () => {
    setIsColapsado(!isColapsado);
  };

  return (
    <div>
      <h2 onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {isColapsado ? ' + ' + titulo : ' - ' + titulo}
      </h2>
      {!isColapsado && (
        <p>
          {texto}
        </p>
      )}
    </div>
  );
}

export default TextCollapse;
