import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

const VideoRow: types.Brick = () => {
    return (
        <div className="h-[57vh] flex bg-gray-900 items-center justify-center">
            <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="w-full flex flex-col">
                        <div className="relative">
                            <a href="#">
                                <img src="https://picsum.photos/seed/59/300/200" className="w-96 h-auto" />
                            </a>
                            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                        </div>
                        <div className="flex flex-row mt-2 gap-2">
                            <a href="#">
                                <img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" />
                            </a>
                            <div className="flex flex-col">
                                <a href="#">
                                    <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                                </a>
                                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="w-full flex flex-col">
                        <div className="relative">
                            <a href="#">
                                <img src="https://picsum.photos/seed/60/300/200" className="w-96 h-auto" />
                            </a>
                            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                        </div>

                        <div className="flex flex-row mt-2 gap-2">
                            <a href="#">
                                <img src="https://picsum.photos/seed/4/40/40" className="rounded-full max-h-10 max-w-10" />
                            </a>
                            <div className="flex flex-col">
                                <a href="#">
                                    <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                                </a>
                                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="w-full flex flex-col">
                        <div className="relative">
                            <a href="#">
                                <img src="https://picsum.photos/seed/22/300/200" className="w-96 h-auto" />
                            </a>

                            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                        </div>

                        <div className="flex flex-row mt-2 gap-2">
                            <a href="#">
                                <img src="https://picsum.photos/seed/88/40/40" className="rounded-full max-h-10 max-w-10" />
                            </a>
                            <div className="flex flex-col">
                                <a href="#">
                                    <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                                </a>
                                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="w-full flex flex-col">
                        <div className="relative">
                            <a href="#">
                                <img src="https://picsum.photos/seed/90/300/200" className="w-96 h-auto" />
                            </a>

                            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                        </div>

                        <div className="flex flex-row mt-2 gap-2">


                            <a href="#">
                                <img src="https://picsum.photos/seed/57/40/40" className="rounded-full max-h-10 max-w-10" />
                            </a>
                            <div className="flex flex-col">
                                <a href="#">
                                    <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                                </a>
                                <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                                <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

VideoRow.schema = {
    name: 'videoBlocks',
    label: 'Image',
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

export default VideoRow;