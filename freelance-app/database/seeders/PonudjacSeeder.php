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
    }
}
