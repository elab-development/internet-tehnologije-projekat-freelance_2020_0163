<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ponudjac>
 */
class PonudjacFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     * 
     * 
     */


    public function definition(): array
    {
        //za definisanje random domena
        $nizDomena = array('gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com');
        $domen = $this->faker->randomElement($nizDomena);

        //za generianje random username-a za email adresu
        $userName = $this->faker->userName();
        

        return [
            'imePrezime' => $this->faker->name(),
            'grad' => $this->faker->city(),
            'adresa' => $this->faker->streetAddress(),
            //pravljenje random emaila na osnovu generisanog user name-a i random domena
            'email' => "$userName@$domen",
            'telefon' => $this->faker->phoneNumber(),
            'godineIskustva' => $this->faker->numberBetween($min = 8, $max = 20),
            'strucnaSprema' => $this->faker->randomElement($array = 
                array('Osnovno obrazovanje','Srednje obrazovanje','Visoko obrazovanje', 'Master obrazovanje',
                'Doktorsko obrazovanje')),
                

        ];
    }
}
