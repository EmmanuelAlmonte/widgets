/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import Accordion from '../Accordion/Accordion'
import Search from '../Search/Search'
import Dropdown from '../Dropdown/Dropdown'
import Translate from '../Translate/Translate'

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'Green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button> */}
      {/* <Accordion items={items} /> */}
      {/* <Search/> */}
      {/* { showDropdown ? 
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null} */}
      <Translate/>
    </div>
  )
}
