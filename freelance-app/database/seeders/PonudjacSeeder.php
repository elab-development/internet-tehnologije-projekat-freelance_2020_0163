<?php

namespace Database\Seeders;

use App\Models\Ponudjac;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PonudjacSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ponudjac::factory()->times(8)->create();

        Ponudjac::create([
            'imePrezime'=>'Milan Alimpijevic',
            'grad'=>'Beograd',
            'adresa'=>'Spasodavska 13',
            'email'=>'milance@gmail.com',
            'telefon'=>'06312949415',
            'godineIskustva'=>'8',
            'strucnaSprema'=>'Doktorsko obrazovanje',
        ]);

        Ponudjac::create([
            'imePrezime'=>'Aleksa Radic',
            'grad'=>'Beograd',
            'adresa'=>'Sinadova 25',
            'email'=>'leksa@gmail.com',
            'telefon'=>'06312949336',
            'godineIskustva'=>'11',
            'strucnaSprema'=>'Master obrazovanje',
        ]);

        Ponudjac::create([
            'imePrezime'=>'Tamara Rakic',
            'grad'=>'Beograd',
            'adresa'=>'Cacanska 33',
            'email'=>'tammm@gmail.com',
            'telefon'=>'063124356',
            'godineIskustva'=>'15',
            'strucnaSprema'=>'Doktorsko obrazovanje',
        ]);


        Ponudjac::create([
            'imePrezime'=>'Milos Djukanovic',
            'grad'=>'Beograd',
            'adresa'=>'Kneza Milosa 5',
            'email'=>'mikidjuka@gmail.com',
            'telefon'=>'06312225664',
            'godineIskustva'=>'18',
            'strucnaSprema'=>'Master obrazovanje',
        ]);

        Ponudjac::create([
            'imePrezime'=>'Boris Obradovic',
            'grad'=>'Beograd',
            'adresa'=>'Papovska 23',
            'email'=>'bokikoki@gmail.com',
            'telefon'=>'063124436',
            'godineIskustva'=>'18',
            'strucnaSprema'=>'Doktorsko obrazovanje',
        ]);
    }
}
