<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

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
        return $this->belongsToMany(Usluga::class, 'ponudjacUsluga', 'ponudjac_id', 'usluga_id')
        ->withPivot('status');
    }



        //funkcija za vracanje kolona iz tabele poonudjaci i pretvara ih u niz radi lepseg pregleda
        public static function vratiSvePonudjace(){
            $result = DB::table('ponudjaci')->select(
            'id',
            'imePrezime',
            'grad',
            'adresa',
            'email',
            'telefon',
            'godineIskustva',
            'strucnaSprema')->get()->toArray();
            return $result;
        }
}
