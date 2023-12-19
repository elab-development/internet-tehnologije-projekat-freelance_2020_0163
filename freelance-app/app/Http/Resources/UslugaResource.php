<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;



class UslugaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID Usluge: ' => $this->resource->id,
            'Naziv usluge: ' => $this->resource->naziv,
            'Opis usuge: ' => $this->resource->opis,
            'Cena: ' => $this->resource->cena,
            'Vreme realizacije u mesecima: ' => $this->resource->vremeRealizacijeUMesecima,
            'Kategorija kojoj usluga pripada: ' => new KategorijaUslugeResource($this->resource->kategorijaUsluge),
            'Korisnik koji je odabrao datu uslugu: ' => new UserResource($this->resource->user),
        ];
    }
}
