<?php

namespace App\Http\Controllers;

use App\Http\Resources\PonudjacUslugaResource;
use App\Models\Ponudjac;
use App\Models\Usluga;
use Illuminate\Http\Request;

class PonudjacUslugaController extends Controller
{
    public function vratiSveUslugePonudjaca($id)
    {
        $ponudjac = Ponudjac::findOrFail($id);
        $usluge = $ponudjac->usluge; 

        return PonudjacUslugaResource::collection($usluge);
    }

    public function vratiSvePonudjaceUsluge($id)
{
    $usluga = Usluga::findOrFail($id);
    $ponudjaci = $usluga->ponudjaci; 

    return PonudjacUslugaResource::collection($ponudjaci);
}
}
