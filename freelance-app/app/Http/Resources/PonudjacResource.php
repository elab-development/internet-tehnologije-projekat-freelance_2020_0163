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
            'ID Ponudjaca' => $this->id,
            'Ime i prezime ponudjaca' => $this->imePrezime,
            'Grad iz koga je ponudjac' => $this->grad,
            'Adresa ponudjaca' => $this->adresa,
            'Emai ponudjaca' => $this->email,
            'Kontakt telefon ponudjaca' => $this->telefon,
            'Godine iskustva ponudjaca' => $this->godineIskustva,
            'Strucna sprema ponudjaca' => $this->strucnaSprema,
        ];
    }
}
