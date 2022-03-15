import React from 'react'
import Accordion from '../Accordion/Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS Library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
