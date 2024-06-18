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
            'id_korisnika' => $this->id,
            'ime_korisnika' => $this->name,
            'email_korisnika' => $this->email,
        ];
    }
}

