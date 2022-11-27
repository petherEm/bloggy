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
interface Category {
  title: string
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 to-gray-800 bg-gradient-to-r text-white h-auto min-h-screen">
      <Head>
        <title>PM blog</title>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>

      <Header />

      <div className="max-w-6xl mx-auto lg:py-4 md:py-4">
        <div className="items-start bg-slate-900 text-white p-10">
          <div className="md:px-10 space-y-5">
            <h1 className="lg:text-6xl md:text-4xl text-4xl max-w-2xl font-serif">
              <span className="underline decoration-red-600 decoration-4">
                Data-driven, rigorous personal view
              </span>{' '}
              on Technology, Business & Finance.
            </h1>
            <h2 className="lg:text-2xl md:text-2xl text-2xl italic">
              Also, a decent data repository.
            </h2>
          </div>
        </div>
      </div>

      {/* POSTS */}

      <div className="max-w-6xl mx-auto mt-10">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden mb-10">
              <div className="flex flex-col justify-between p-5 bg-gray-800 rounded-lg text-white">
                <div>
                  <p className="xl:text-3xl md:text-lg font-bold m-2 mb-8">
                    {post.title}
                  </p>
                  <p className="xl:text-2xl md:text-md text-xs m-2 tracking-wide">
                    {post.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={urlFor(post.author.image).url()!}
                      alt=""
                    />
                    <p className="text-sm md:text-md ml-4">
                      <span className="font-bold">by</span> {post.author.name}
                    </p>
                    <p className="hidden md:flex">
                      published at {new Date(post._createdAt).toLocaleString()}{' '}
                    </p>
                  </div>

                  <div className="text-sm md:text-md ml-4 bg-indigo-700 p-2 md:p-4 rounded-xl">
                    <p className="font-bold">
                      {post.categories.map((category) => (
                        // 👇️ ts-ignore ignores any ts errors on the next line
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        <span key={category.title}>#{category.title} </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title, 
      author-> {
        name,
        image
    },
     description,
     categories[]->{
        title
      },
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
