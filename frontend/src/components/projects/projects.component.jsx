import React from 'react';

/**
 * Projects component
 * @constructor
 */
export default function Projects() {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
        <>
          <a
            href={'/project/project' + (i+1)}
          >
            <div
              className=
                '
              flex flex-row
              m-3
              py-3 px-6 rounded-lg
              border-solid border-gray-600 border-[2px]
              hover:bg-gray-100 cursor-pointer
            '
            >
              <i
                className='bx bx-home text-4xl text-gray-600'
              >
              </i>
              <p className="text-gray-600 text-4xl ml-2">
                Testowy
              </p>
            </div>
          </a>
        </>,
    );
  }
  return (
    <>
      <div
        className=
          '
            w-full overflow-hidden
            flex flex-wrap md:flex-row flex-col
            lg:mx-12 mx-0
          '
      >
        {items}
      </div>
    </>
  );
}
