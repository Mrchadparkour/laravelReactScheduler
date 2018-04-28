import React, { Component } from 'react'
import AppointmentBar from './AppointmentBar'
import AddAppointment from './AddAppointment'
import axios from 'axios'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      apps: []
    }

    this.getAppointments   = this.getAppointments.bind(this)
    this.deleteAppointment = this.deleteAppointment.bind(this)
    this.createAppointment = this.createAppointment.bind(this);
  }

  componentWillMount(){
    this.getAppointments()
  }

  uri(ext) {
    const uri = 'http://laravelreact.test/appointment'
    return !ext ? uri : uri.concat("/" + ext)
  }

  getAppointments() {
    return axios.get(this.uri()).then(res => {
      this.setState({ apps: res.data })
    }).catch(err => console.log(err))
  }

  deleteAppointment(id) {
    axios.delete(this.uri(id)).then(() => {
      this.getAppointments()
    })
  }

  createAppointment(data) {
    axios.post(this.uri(), data).then(res => {
      this.getAppointments()
    })
  }

  renderAppointments() {
    return this.state.apps.map(app => (
      <AppointmentBar data={app} key={app.id} deleteAppointment={this.deleteAppointment}/>
    ))
  }

  render(){
    return(
      <table>
        <tbody>
          <AddAppointment createAppointment={this.createAppointment} />
          {
            this.renderAppointments()
          }
        </tbody>
      </table>
    )
  }
}
