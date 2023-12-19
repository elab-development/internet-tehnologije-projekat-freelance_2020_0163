<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PonudjacResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID Ponudjaca: ' => $this->resource->id,
            'Ime i prezime ponudjaca: ' => $this->resource->imePrezime,
            'Grad iz koga je ponudjac: ' => $this->resource->grad,
            'Adresa ponudjaca: ' => $this->resource->adresa,
            'Emai ponudjaca: ' => $this->resource->email,
            'Kontakt telefon ponudjaca: ' => $this->resource->telefon,
            'Godine iskustva ponudjaca: ' => $this->resource->godineIskustva,
            'Strucna sprema ponudjaca: ' => $this->resource->strucnaSprema,
        ];
    }
}
