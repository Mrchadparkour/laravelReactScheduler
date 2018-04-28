import React, { Component } from 'react';

const AppointmentBar = ({data, rowColor, deleteAppointment}) => {
  return(
    <tr className="AppointmentBar">
      <th>{data.name}</th>
      <th>{data.scheduled_at}</th>
      <th>{data.description}</th>
      <th>{data.cost}</th>
      <th>
        {
          data.has_paid
            ? "ok"
            : "not ok"
        }
      </th>
      <th><button onClick={() => deleteAppointment(data.id)}>Delete</button></th>
    </tr>
  );
}

export default AppointmentBar;
