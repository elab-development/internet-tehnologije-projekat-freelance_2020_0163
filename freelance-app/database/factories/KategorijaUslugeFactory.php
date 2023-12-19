<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KategorijaUsluge>
 */
class KategorijaUslugeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'naziv' => $this->faker->randomElement($array = 
            array('Dizajn i kreativnost','Pisanje i prevod','Marketing i oglasavanje', 'Edukacija i obuka',
            'Video i animacija')),
            'opis' => $this->faker->sentence(),
        ];
    }
}
