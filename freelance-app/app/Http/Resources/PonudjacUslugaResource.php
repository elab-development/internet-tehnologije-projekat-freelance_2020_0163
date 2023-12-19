<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PonudjacUslugaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID: ' => $this->resource->id,
            'Status: ' => $this->resource->pivot->status,
            'Ponudjac: ' => $this->resource->pivot->ponudjac_id,
            'Usluga: ' => $this->resource->pivot->usluga_id,
        ];
    }

}
