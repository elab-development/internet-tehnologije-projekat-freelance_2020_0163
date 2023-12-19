<?php

namespace App\Http\Controllers;

use App\Http\Resources\PonudjacResource;
use App\Models\Ponudjac;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PonudjacController extends Controller
{
    
    //svi ponudjaci
    public function index()
    {
        $ponudjaci = Ponudjac::all();
        return PonudjacResource::collection($ponudjaci);
    }

    //ponudjac na osnovu id-a
    public function show($id)
    {
        $ponudjac = Ponudjac::findOrFail($id);
        return new PonudjacResource($ponudjac);
    }

    //nov ponudjac
    public function store(Request $request)
    {
    $validator = Validator::make($request->all(), [
        'imePrezime' => 'required',
        'grad' => 'required',
        'adresa' => 'required',
        'email' => 'required',
        'telefon' => 'required',
        'godineIskustva' => 'required',
        'strucnaSprema' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors());
    }

    $ponudjac = new Ponudjac();
    $ponudjac->imePrezime = $request->imePrezime;
    $ponudjac->grad = $request->grad;
    $ponudjac->adresa = $request->adresa;
    $ponudjac->email = $request->email;
    $ponudjac->telefon = $request->telefon;
    $ponudjac->godineIskustva = $request->godineIskustva;
    $ponudjac->strucnaSprema = $request->strucnaSprema;

    $ponudjac->save();

    return response()->json(['Uspešno kreiran novi ponudjac!',
         new PonudjacResource($ponudjac)]);
    }

    //azuriranje ponudjaca
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'imePrezime' => 'required',
            'grad' => 'required',
            'adresa' => 'required',
            'email' => 'required',
            'telefon' => 'required',
            'godineIskustva' => 'required',
            'strucnaSprema' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $ponudjac = Ponudjac::findOrFail($id);

        $ponudjac->imePrezime = $request->imePrezime;
        $ponudjac->grad = $request->grad;
        $ponudjac->adresa = $request->adresa;
        $ponudjac->email = $request->email;
        $ponudjac->telefon = $request->telefon;
        $ponudjac->godineIskustva = $request->godineIskustva;
        $ponudjac->strucnaSprema = $request->strucnaSprema;

        $ponudjac->save();

        return response()->json(['Uspešno izmenjen ponudjac!', new PonudjacResource($ponudjac)]);
    }

    //brisanje ponudjaca
    public function destroy($id)
    {
        $ponudjac = Ponudjac::findOrFail($id);
        $ponudjac->delete();
        return response()->json('Uspešno obrisan ponudjac!');
    }
}
