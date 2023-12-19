<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KategorijaUslugeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID kategorije kojoj usluga pripada: ' => $this->resource->id,
            'Naziv kategorije: ' => $this->resource->naziv,
            'Opis kategorije: ' => $this->resource->opis,
        ];
    }
}
