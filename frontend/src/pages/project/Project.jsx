import React from 'react';
import {useParams} from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';

/**
 * Project component
 * @return {JSX.Element}
 * @constructor
 */
export default function Project() {
  const {id} = useParams();
  const {name} = useParams();
  if (name === undefined) {
    console.log('s');
  }
  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col lg:mx-16 mx-2.5 mt-3">
        <div className="w-1/5">
          <a href={'/project/' + id}>
            <span className="text-2xl font-bold text-gray-600">
              { id }
            </span>
          </a>
          <ul className="mt-2">
            <li className="text-gray-600 text-lg hover:underline
             underline-offset-4">
              <a href={'/project/' + id + '/file/' + 'test'}>
                <i className="bx bx-file mr-1">
                </i>
                English
              </a>
            </li>
            <li className="text-gray-600 text-lg hover:underline
             underline-offset-4">
              <a href={'/project/' + id + '/file/' + 'new'}>
                <i className="bx bx-plus mr-1">
                </i>
                New language
              </a>
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          {name}
        </div>
      </div>
    </>
  );
}
