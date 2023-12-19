<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ponudjac;
use App\Http\Resources\PonudjacResource;

class PretragaController extends Controller
{
    public function searchPonudjaci(Request $request)
    {
        $query = Ponudjac::query();

        //Pretrazuje se po gadu iz koga je ponudjac
        if ($request->has('grad')) {
            $query->where('grad', 'like', '%' . $request->input('grad') . '%');
        }

        //Paginacija samo Ponudjaca koji zadovoljavaju uslov za grad
        $page = $request->input('page', 1);
        $perPage = 3;

        $ponudjaci = $query->orderBy('grad')->paginate($perPage, ['*'], 'page', $page);

        if($ponudjaci->isEmpty()){
            return response()->json(['message' => 'Ponudjaci nisu pronadjeni'], 404);
        }
        return response()->json(['Trenutna strana' => $ponudjaci->currentPage(), 'Poslednja strana' => $ponudjaci->lastPage(),
         'Pronadjeni ponudjaci' => PonudjacResource::collection($ponudjaci)], 200);
    }
}
