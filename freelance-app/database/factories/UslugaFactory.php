<?php

namespace Database\Factories;

use App\Models\KategorijaUsluge;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usluga>
 */
class UslugaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'naziv' => $this->faker->name(),
            'opis' => $this->faker->sentence(),
            'slika' => $this->faker->imageUrl(),
            'cena' => $this->faker->numberBetween($min = 50, $max = 1500),
            'vremeRealizacijeUMesecima' => $this->faker->numberBetween($min = 1, $max = 12),
            'kategorija_usluge_id' => KategorijaUsluge::factory(),
            'user_id' => User::factory(),
        ];
    }
}
