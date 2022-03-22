/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import Accordion from '../Accordion/Accordion'
import Search from '../Search/Search'
import Dropdown from '../Dropdown/Dropdown'
import Translate from '../Translate/Translate'
import Route from '../Route/Route'
import Header from '../Header/Header'
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
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}
