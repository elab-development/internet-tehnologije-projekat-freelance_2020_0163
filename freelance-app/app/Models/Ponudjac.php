<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ponudjac extends Model
{
    use HasFactory;

    protected $table = 'Ponudjaci';

    protected $fillable = [
        'imePrezime',
        'grad',
        'adresa',
        'email',
        'telefon',
        'godineIskustva',
    ];

    public function usluge() {
        return $this->belongsToMany(Usluga::class, 'ponudjac_usluga');
    }
}
