import React from 'react'

const Headliner = () => {
  return (
    <div className="max-w-7xl mx-auto md:p-5 p-2">

      <div className="max-w-7xl mx-auto lg:py-4 md:py-4 mt-10">
        <div className="items-start bg-slate-900 text-white p-4 md:p-10">
          <div className="md:px-10 space-y-5">
            <h1 className="lg:text-6xl md:text-4xl text-4xl max-w-2xl font-serif">
              <span className="underline decoration-red-600 decoration-4">
               Latest, aggregated news
              </span>{' '}
              from Payments & Remittance industry.
            </h1>
            <h2 className="lg:text-3xl md:text-2xl text-2xl font-bold">
              Enjoy the reading!
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headliner
