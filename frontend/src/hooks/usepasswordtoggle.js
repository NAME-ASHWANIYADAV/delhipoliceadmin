import { useState } from 'react';
import { faUser, faEnvelope , faLock , faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons"

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const [inputType, setInputType] = useState('password');

  const toggleVisibility = () => {
    setVisible(!visible);
    setInputType(visible ? 'password' : 'text');
  };

  const toggleIcon = visible ? (
    <i className="faEyeSlash" onClick={toggleVisibility}></i>
  ) : (
    <i className="faEye" onClick={toggleVisibility}></i>
  );

  return [inputType, toggleIcon];
};

export default usePasswordToggle;