import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

const TeamRound: types.Brick = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-black">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Dream Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-stone-300 leading-none tracking-tight text-stone-300 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{' '}
            our talented team of professionals
          </h2>
          <p className="text-base text-stone-300 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Oliver Aguilerra</p>
              <p className="text-sm text-slate-500">Product Manager</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Marta Clermont</p>
              <p className="text-sm text-slate-500">Design Team Lead</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Anthony Geek</p>
              <p className="text-sm text-slate-500">CTO, Lorem Inc.</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Alice Melbourne</p>
              <p className="text-sm text-slate-500">Human Resources</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Martin Garix</p>
              <p className="text-sm text-slate-500">Bad boy</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Andrew Larkin</p>
              <p className="text-sm text-slate-500">Backend Developer</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Sophie Denmo</p>
              <p className="text-sm text-slate-500">Designer UI/UX</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Benedict Caro</p>
              <p className="text-sm text-slate-500">Frontend Developer</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-stone-300">Adam Molly</p>
              <p className="text-sm text-slate-500">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  TeamRound.schema = {
    name: 'teamRound',
    label: 'Team Block',
    category: 'rb-ui blog',
    playgroundLinkLabel: 'View source code on Github',
    playgroundLinkUrl:
      'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Image/Image.tsx',
    getDefaultProps: () => ({
      image: {
        src: 'https://images.reactbricks.com/original/d80c1861-7647-408a-8d29-619c110a808b.jpg',
        placeholderSrc:
          'https://images.reactbricks.com/placeholder/d80c1861-7647-408a-8d29-619c110a808b.jpg',
        srcSet:
          'https://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-1600.jpg 1600w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-800.jpg 800w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-200.jpg 200w',
        width: 3385,
        height: 1902,
        alt: '',
        seoName: '',
      },
    }),
  }

export default TeamRound;