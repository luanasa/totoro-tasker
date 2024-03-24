import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function BackArrow({ url, className }) {
  return (
    <Link className={`arrow ${className}`} to={url}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
    </Link>
  );
}

export default BackArrow;
