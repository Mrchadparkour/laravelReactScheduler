<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
  protected $table = 'appointment';

  protected $fillable = [
    'name',
    'has_paid',
    'description',
    'cost',
    'scheduled_at',
    'user_id'
  ];
}
