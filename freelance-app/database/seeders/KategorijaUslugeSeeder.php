<?php

namespace Database\Seeders;

use App\Models\KategorijaUsluge;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategorijaUslugeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KategorijaUsluge::create([
            'naziv'=>"IT USLUGE",
            'opis'=>"Usluge u domenu informacionih tehnologija.",
        ]);

        KategorijaUsluge::factory()->times(3)->create();
    }
}
