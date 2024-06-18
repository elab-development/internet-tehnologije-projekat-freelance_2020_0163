<?php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class KategorijaUslugeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'ID kategorije kojoj usluga pripada' => $this->id,
            'Naziv kategorije' => $this->naziv,
            'Opis kategorije' => $this->opis,
        ];
    }
}

