import { downloadCV } from '../constants/index.js';

const Button = ({ name, isBeam = false, containerClass }) => {
    return (
      <button onClick={downloadCV} className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </button>
    );
  };
  
  export default Button;