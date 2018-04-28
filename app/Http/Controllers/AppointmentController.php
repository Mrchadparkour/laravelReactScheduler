<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Appointment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class AppointmentController extends Controller
{
  /**
  * Display a listing of the appointments
  * @return \Illuminate\Http\Request;
  */
  public function index()
  {
    $user_id = Auth::id();
    $appointments = Appointment::where('user_id', $user_id)->get();
    return response()->json($appointments);
  }

  /**
   * Show the form for creating a new appointment.
   *
   * @return \Illuminate\Http\Response
   */


  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
 public function store(Request $request)
 {
     if (Auth::check()) {
         $user_id = Auth::id();
         $appointment = new Appointment([
             'name'         => $request->get('name'),
             'has_paid'     => $request->get('has_paid'),
             'description'  => $request->get('description'),
             'cost'         => $request->get('cost'),
             'scheduled_at' => $request->get('scheduled_at'),
             'user_id'      => $user_id
     ]);
         $appointment->save();
         return response()->json('Successfully added');
     } else {
         Redirect::route('/login');
         return response()->json("You need to be an authenticated user to create an appointment.");
     }
 }

 public function edit($id)
{
    $appointment = Appointment::find($id);
    return response()->json($appointment);
}

/**
 * Update the specified resource in storage.
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  int  $id
 * @return \Illuminate\Http\Response
 */
public function update(Request $request, $id)
{
    $appointment = Appointment::find($id);
    $appointment->name         = $request->get('name');
    $appointment->has_paid     = $request->get('has_paid');
    $appointment->description  = $request->get('description');
    $appointment->cost         = $request->get('cost');
    $appointment->scheduled_at = $request->get('scheduled_at');
    $appointment->save();

    return response()->json('Successfully Updated');
}

/**
 * Remove the specified resource from storage.
 *
 * @param  int  $id
 * @return \Illuminate\Http\Response
 */
public function destroy($id)
{
  $appointment = Appointment::find($id);
  $appointment->delete();

  return response()->json('Successfully Deleted');
}


}
