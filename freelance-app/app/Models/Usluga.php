<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usluga extends Model
{
    use HasFactory;

    protected $table = 'Usluge';

    protected $fillable = [
        'naziv',
        'opis',
        'slika',
        'cena',
        'vremeRealizacije'
    ];

    public function ponudjaci() {
        return $this->belongsToMany(Ponudjac::class, 'ponudjac_usluga');
    }

    public function kategorija() {
        return $this->belongsTo(KategorijaUsluge::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
