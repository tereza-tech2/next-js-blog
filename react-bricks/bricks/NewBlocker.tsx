import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

const NewBlocker: types.Brick = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center">NewBlocker</h1>
      <div className="sm:grid grid-cols-3 gap-5">
        <Repeater propName="newBlock" />
      </div>
    </div>
  )
}

NewBlocker.schema = {
  name: 'newBlocker',
  label: 'NewBlocker',
  getDefaultProps: () => ({
    thumbnails: [],
  }),
  repeaterItems: [
    {
      name: 'newBlock',
      itemType: 'newBlock',
      itemLabel: 'NewBlock',
      max: 3,
    },
  ],
}

export default NewBlocker