<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PonudjacResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'ID_Ponudjaca' => $this->id,
            'Ime_i_prezime_ponudjaca' => $this->imePrezime,
            'Grad_iz_koga_je_ponudjac' => $this->grad,
            'Adresa_ponudjaca' => $this->adresa,
            'Email_ponudjaca' => $this->email,
            'Kontakt_telefon_ponudjaca' => $this->telefon,
            'Godine_iskustva_ponudjaca' => $this->godineIskustva,
            'Strucna_sprema_ponudjaca' => $this->strucnaSprema,
        ];
    }
}
