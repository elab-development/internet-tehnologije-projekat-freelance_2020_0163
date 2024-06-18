<?php

namespace App\Http\Controllers;

use App\Http\Resources\KategorijaUslugeResource;
use App\Http\Resources\UslugaResource;
use App\Models\KategorijaUsluge;
use App\Models\Usluga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UslugaController extends Controller
{
    public function index()
    {
        $usluge = Usluga::all();
        return UslugaResource::collection($usluge);
    }

    public function show($id)
    {
        $usluge = Usluga::findOrFail($id);
        return new UslugaResource($usluge);
    }

    public function prikaziPoKategoriji($kategorija_id)
    {
        $usluge = Usluga::where('kategorija_usluge_id', $kategorija_id)->get();
        return response()->json(['Usluge date kategorije su: ',
         UslugaResource::collection($usluge)]);
    }

    public function prikaziPoKorisniku($korisnik_id)
    {
        $usluge = Usluga::where('user_id', $korisnik_id)->get();
        return response()->json(UslugaResource::collection($usluge));
    }


 
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
            'opis' => 'required',
            'cena' => 'required',
            'vremeRealizacijeUMesecima' => 'required',
            'kategorija_usluge_id' => 'required',
            'user_id' => 'required',
        ]);
    
        if ($validator->fails()) {
            $errors = $validator->errors();
        
            if ($errors->has('kategorija_usluge_id') && $errors->first('kategorija_usluge_id') === 'The selected kategorija usluge id is invalid.') {
                return response()->json(['Data kategorija ne postoji!']);
            }
        
            if ($errors->has('user_id') && $errors->first('user_id') === 'The selected user id is invalid.') {
                return response()->json(['Dati korisnik ne postoji!']);
            }
        
            return response()->json($errors);
        }
    
        $usluga = new Usluga();
        $usluga->naziv = $request->naziv;
        $usluga->opis = $request->opis;
        $usluga->cena = $request->cena;
        $usluga->vremeRealizacijeUMesecima = $request->vremeRealizacijeUMesecima;
        $usluga->kategorija_usluge_id = $request->kategorija_usluge_id;
        $usluga->user_id = $request->user_id;
        $usluga->save();
    
        return response()->json(new UslugaResource($usluga));
    }
    


    public function update(Request $request, $id)
{
    $validator = Validator::make($request->all(), [
        'naziv' => 'required',
        'opis' => 'required',
        'kategorija_usluge_id' => 'required|exists:kategorijeusluga,id',
        'user_id' => 'required|exists:users,id',
        // Dodaj ostale validacije za ažuriranje usluge
    ]);

    if ($validator->fails()) {
        $errors = $validator->errors();
    
        if ($errors->has('kategorija_usluge_id') && $errors->first('kategorija_usluge_id') === 'The selected kategorija usluge id is invalid.') {
            return response()->json(['Data kategorija ne postoji!']);
        }
    
        if ($errors->has('user_id') && $errors->first('user_id') === 'The selected user id is invalid.') {
            return response()->json(['Dati korisnik ne postoji!']);
        }
    
        return response()->json($errors);
    }

    $usluga = Usluga::findOrFail($id);

    $usluga->naziv = $request->naziv;
    $usluga->opis = $request->opis;
    $usluga->kategorija_usluge_id = $request->kategorija_usluge_id;
    $usluga->user_id = $request->user_id;
    // Dodaj ažuriranje drugih polja usluge ako su prisutna

    $usluga->save();

    return response()->json(['Uspešno ažurirana usluga!', new UslugaResource($usluga)]);
}


    public function updateOpis(Request $request, $id)
    {
        $request->validate([
            'opis' => 'required'
        ]);
    
        $usluga = Usluga::findOrFail($id);
    
        $usluga->update(['opis' => $request->input('opis')]);
    
        return response()->json(['message' => 'Opis date usluge uspesno izmenjen!', new uslugaResource($usluga)]);
    }


    public function destroy($id)
    {
        $usluga = Usluga::findOrFail($id);
        $usluga->delete();
        return response()->json('Uspešno obrisana usluga!');
    }
    // Nova metoda za vraćanje svih kategorija usluga
    public function sveKategorije()
    {
        $kategorije = KategorijaUsluge::all();
        return KategorijaUslugeResource::collection($kategorije);
    }

}
