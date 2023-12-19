<?php

namespace Database\Seeders;

use App\Models\KategorijaUsluge;
use App\Models\User;
use App\Models\Usluga;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UslugaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usluga::create([
            'naziv'=>"Popravka SQL Server gresaka",
            'opis'=>"Popravka gresaka koje nastaju pri projektovanju baza podataka u SQL Serveru.",
            'slika' => "https://ibb.co/W0JyCZB",
            'cena' => 500,
            'vremeRealizacijeUMesecima' => 1,
            'kategorija_usluge_id' => KategorijaUsluge::findOrFail(1)->id,
            'user_id'=> User::findOrFail(2)->id,
        ]);

        Usluga::create([
            'naziv'=>"Casovi programiranja u Javi",
            'opis'=>"Casovi za pocetnike u programsku jeziku Java.",
            'slika' => "https://ibb.co/HdPD7Qb",
            'cena' => 1200,
            'vremeRealizacijeUMesecima' => 3,
            'kategorija_usluge_id' => KategorijaUsluge::findOrFail(1)->id,
            'user_id'=> User::findOrFail(2)->id,
        ]);

        Usluga::factory()->times(2)->create();

    }
}
