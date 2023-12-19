<?php

namespace Database\Factories;

use App\Models\Ponudjac;
use App\Models\Usluga;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PonudjacUsluga>
 */
class PonudjacUslugaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => $this->faker->randomElement($array = array('Aktivan','Neaktivan')),
            'ponudjac_id' => Ponudjac::factory(),
            'usluga_id' => Usluga::factory(),    
        ];
    }
}
