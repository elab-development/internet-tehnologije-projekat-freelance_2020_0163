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
            'ID' => $this->id,
            'Naziv_kategorije' => $this->naziv,
            'Opis_kategorije' => $this->opis,
        ];
    }
}

