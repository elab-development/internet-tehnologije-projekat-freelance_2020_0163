<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UslugaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id_usluge' => $this->id,
            'naziv_usluge' => $this->naziv,
            'opis_usluge' => $this->opis,
            'cena' => $this->cena,
            'vreme_realizacije_u_mesecima' => $this->vremeRealizacijeUMesecima,
            'kategorija_kojoj_usluga_pripada' => new KategorijaUslugeResource($this->kategorijaUsluge),
            'korisnik_koji_je_odabrao_datu_uslugu' => new UserResource($this->user),
        ];
    }
}
