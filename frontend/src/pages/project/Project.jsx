import React from 'react';
import {useParams} from 'react-router-dom';

/**
 * Project component
 * @returs {JSX.Element}
 * @constructor
 */
export default function Project() {
  const {id} = useParams();
  return (
    <>
      { id }
    </>
  );
}
