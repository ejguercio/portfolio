// BoxIconWithHover.jsx
import { useState } from 'react';

const BoxIconWithHover = ({ type, name, color }) => {
  const [animation, setAnimation] = useState('none');

  return (
    <box-icon
      type={type}
      name={name}
      color={color}
      animation={animation}
      onMouseEnter={() => setAnimation('burst')}
      onMouseLeave={() => setAnimation('none')}>
    </box-icon>
  );
};

export default BoxIconWithHover;
