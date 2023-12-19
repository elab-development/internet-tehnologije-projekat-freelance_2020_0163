<?php

namespace App\Http\Resources;

use App\Models\Ponudjac;
use App\Models\Usluga;
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
        $ponudjac = Ponudjac::find($this->resource->pivot->ponudjac_id);
        $usluga = Usluga::find($this->resource->pivot->usluga_id);

        return [
            'ID: ' => $this->resource->id,
            'Status: ' => $this->resource->pivot->status,
            'Ponudjac: ' => new PonudjacResource($ponudjac),
            'Usluga: ' => new UslugaResource($usluga),
        ];
    }

}
