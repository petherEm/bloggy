import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts)

  return (
    <div className="h-screen bg-stone-700 text-white">
      <Head>
        <title>PM blog</title>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>

      <Header />

      <div className="max-w-6xl mx-auto lg:py-4 md:py-4">
        <div className="items-start bg-slate-900 text-white p-10">
          <div className="md:px-10 space-y-5">
            <h1 className="lg:text-6xl md:text-6xl text-4xl max-w-xl font-serif">
              <span className="underline decoration-white decoration-4">
                I comment
              </span>{' '}
              on the business, economy, payments and technology.
            </h1>
            <h2>This is an attempt to bring a data-driven, rigorous academic approach. Also an opportunity to share my programming experience.</h2>
            <h2 className="text-gray-400">#Business #Strategy #DataScience #Python #VanillaJS #React</h2>
          </div>
        </div>
      </div>

      {/* Posts */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between p-5 bg-gray-600 text-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-10 w-10 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
      _id,
      title, 
      author-> {
        name,
        image
    },
     description,
     mainImage,
     slug
    }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
