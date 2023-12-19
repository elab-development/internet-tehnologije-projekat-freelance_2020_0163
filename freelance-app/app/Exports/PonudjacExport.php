<?php

namespace App\Exports;

use App\Models\Ponudjac;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PonudjacExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return collect(Ponudjac::vratiSvePonudjace());
    }

    public function headings():array{
        return [
            'ID',
            'Ime i Prezime',
            'Grad',
            'Adresa',
            'Email adresa',
            'Telefon',
            'Godine iskustva',
            'Strucna sprema',
        ];
    }
}
