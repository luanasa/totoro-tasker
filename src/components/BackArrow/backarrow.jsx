import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link se estiver usando o React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './backarrow.css';

function BackArrow({ url }) {
  return (
    <Link className='arrow' to={url}>
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
    </Link>
  );
}
export default BackArrow;
