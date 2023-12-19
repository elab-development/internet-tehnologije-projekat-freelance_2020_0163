<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategorijaUsluge extends Model
{
    use HasFactory;

    protected $table = 'KategorijeUsluga';

    protected $fillable = [
        'naziv',
        'opis',
    ];

    public function usluge() {
        return $this->hasMany(Usluga::class);
    }
}
