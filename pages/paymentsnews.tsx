import React, { useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Headliner from '../components/Headliner'


const PaymentsNews = ({ moneytransfers }: any) => {
  const [newsMT, setNewsMT] = useState(moneytransfers.value)

  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 to-gray-800 bg-gradient-to-r text-white h-auto min-h-screen">
      <Header />

      <Headliner />

      <main className="max-w-7xl mx-auto p-5">
        <div className="md:mt-20">
          <div className="text-white flex items-center gap-y-10 gap-x-10 justify-center flex-wrap">
            {newsMT.map((i: any, index: any) => (
              <div
                key={index}
                className="md:w-[520px] md:h-[340px] flex flex-col justify-between gap-y-4 bg-gray-600 rounded-lg md:px-4 px-2 shadow-lg"
              >
                <div className="flex mt-2">
                  <h2 className="text-xl font-bold">{i?.name}</h2>
                  <img
                    src={i?.image?.thumbnail?.contentUrl || `/noimg.png`}
                    className="w-[200px] h-[100px] object-contain"
                    alt="No Picture"
                  />
                </div>
                <div className="">
                  <p className="tracking-wide">{i?.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <a href={i?.url} target="_blank">
                    <p className="font-bold text-xl mb-8">Read more...</p>
                  </a>

                  <div className="flex items-center">
                    <img
                      src={
                        i.provider[0].image?.thumbnail?.contentUrl || `/noimg.png`
                      }
                      alt="news"
                      className="h-8 w-8 m-2"
                    />
                    <p> {i.provider[0].name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PaymentsNews

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
  }

  const moneytransfers = await fetch(
    'https://bing-news-search1.p.rapidapi.com/news/search?q=remittance&safeSearch=Off&textFormat=Raw&freshness=Week&count=10',
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))

  return {
    props: {
      moneytransfers: moneytransfers,
    },
  }
}
