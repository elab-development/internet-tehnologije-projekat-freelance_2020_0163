<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Database\Seeders\PonudjacSeeder;
use Database\Seeders\UslugaSeeder;
use Database\Seeders\KategorijaUslugeSeeder;
use Database\Seeders\UserSeeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       
        $PondjacSeeder = new PonudjacSeeder;
        $PondjacSeeder->run();
        
        $KategorijaUslugeSeeder = new KategorijaUslugeSeeder;
        $KategorijaUslugeSeeder->run();

        $UserSeeder = new UserSeeder;
        $UserSeeder->run();

        $UslugaSeeder = new UslugaSeeder;
        $UslugaSeeder->run();

        $PonudjacUslugaSeeder = new PonudjacUslugaSeeder;
        $PonudjacUslugaSeeder->run();

    }
}
