import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'
import DescSelect from './descSelect'
import 'react-datepicker/dist/react-datepicker.css'

export default class AddAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      scheduled_at: moment(),
      description: '',
      cost: '',
      has_paid: false
    }

    this.handleAddClick = this.handleAddClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onDatePick = this.onDatePick.bind(this)
  }

  componentDidMount() {
    const handlePos = () => {
      //Hackery solution to fix the react date picker position issue
      const wBounds = document.querySelector('.react-datepicker-wrapper').getBoundingClientRect()
      const popper  = document.querySelector('.react-datepicker-popper')

      popper.style.left = wBounds.x + 'px'
      popper.style.top  = wBounds.y + 'px'
    }

    document.querySelector('.react-datepicker-wrapper').addEventListener('click', handlePos);
    document.querySelector('.react-datepicker-wrapper').addEventListener('', handlePos);
  }

  handleAddClick() {
    const data = {
      ...this.state,
      scheduled_at: this.state.scheduled_at.format('l')
    }

    this.props.createAppointment(data)
  }

  onChange(e) {
    const { target, target: { name } } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value })
  }

  onDatePick(date) {
    this.setState({ scheduled_at: date })
  }

  render() {
    return(
      <tr>
        <th><input name='name' placeholder='Client Name' onChange={ this.onChange }/></th>
        <th><DatePicker selected={this.state.scheduled_at} onChange={this.onDatePick.bind(this)}/></th>
        <th><DescSelect value={this.state.description} onChange={this.onChange} /></th>
        <th><input name='cost' placeholder='Cost' onChange={this.onChange}/></th>
        {/*<th><input name='paid' type='checkbox' checked={this.state.paid} onChange={this.onChange}/></th>*/}
        <th><button onClick={this.handleAddClick}>+Add</button></th>
      </tr>
    )
  }
}
