import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

const AddSchedule: types.Brick = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center">Add Schedule</h1>
      <div className="sm:grid grid-cols-3 gap-5">
        <Repeater propName="blockSchedule" />
      </div>
    </div>
  )
}

AddSchedule.schema = {
  name: 'add-schedule',
  label: 'AddSchedule',
  getDefaultProps: () => ({
    blockSchedule: [],
  }),
  /*repeaterItems: [
    {
      name: 'blockSchedule',
      itemType: 'blockSchedule',
      itemLabel: 'BlockSchedule',
      max: 3,
    },
  ],*/
  repeaterItems: [
    {
      name: 'newBlock',
      itemType: 'newBlock',
      itemLabel: 'NewBlock',
      max: 3,
    },
  ],
}

export default AddSchedule