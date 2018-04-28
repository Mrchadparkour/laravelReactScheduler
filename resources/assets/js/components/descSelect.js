import React from 'react'

const descSelect = ({ value, onChange }) => (
  <select name='description' value={value} onChange={onChange}>
    <option value='saladCookClass'>How to Cook a Salad</option>
    <option value='epicBattle'>Fight to the death</option>
    <option value='ultimatePower'>Gain the ultimate Power</option>
    <option value='chess'>Play Chess</option>
  </select>
)

export default descSelect
