<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'ID Korisnika' => $this->id,
            'Ime korisnika' => $this->name,
            'Email korisnika' => $this->email,
        ];
    }
}

