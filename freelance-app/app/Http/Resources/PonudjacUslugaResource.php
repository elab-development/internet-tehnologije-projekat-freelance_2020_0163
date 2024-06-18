<?php

namespace App\Http\Resources;

use App\Models\Ponudjac;
use App\Models\Usluga;
use Illuminate\Http\Resources\Json\JsonResource;

class PonudjacUslugaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array
     */
    public function toArray($request)
    {
        $ponudjac = Ponudjac::find($this->resource->pivot->ponudjac_id);
        $usluga = Usluga::find($this->resource->pivot->usluga_id);

        return [
            'ID' => $this->id,
            'Status' => $this->resource->pivot->status,
            'Ponudjac' => new PonudjacResource($ponudjac),
            'Usluga' => new UslugaResource($usluga),
        ];
    }
}
