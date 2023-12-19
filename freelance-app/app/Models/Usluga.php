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
        'cena',
        'vremeRealizacijeUMesecima',
        'kategorija_usluge_id',
        'user_id'
    ];

    public function ponudjaci() {
        return $this->belongsToMany(Ponudjac::class, 'ponudjac_usluga');
    }

    public function kategorijaUsluge() {
        return $this->belongsTo(KategorijaUsluge::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
