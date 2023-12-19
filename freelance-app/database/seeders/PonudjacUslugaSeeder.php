<?php

namespace Database\Seeders;

use App\Models\Ponudjac;
use App\Models\PonudjacUsluga;
use App\Models\Usluga;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PonudjacUslugaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PonudjacUsluga::create([
            'status'=>"Aktivan",
            'ponudjac_id' => Ponudjac::findOrFail(1)->id,
            'usluga_id'=> Usluga::findOrFail(1)->id,
        ]);

        PonudjacUsluga::create([
            'status'=>"Neaktivan",
            'ponudjac_id' => Ponudjac::findOrFail(1)->id,
            'usluga_id'=> Usluga::findOrFail(2)->id,
        ]);

        PonudjacUsluga::create([
            'status'=>"Aktivan",
            'ponudjac_id' => Ponudjac::findOrFail(2)->id,
            'usluga_id'=> Usluga::findOrFail(2)->id,
        ]);

        PonudjacUsluga::create([
            'status'=>"Aktivan",
            'ponudjac_id' => Ponudjac::findOrFail(3)->id,
            'usluga_id'=> Usluga::findOrFail(2)->id,
        ]);

        PonudjacUsluga::create([
            'status'=>"Neaktivan",
            'ponudjac_id' => Ponudjac::findOrFail(1)->id,
            'usluga_id'=> Usluga::findOrFail(3)->id,
        ]);
    }
}
