<?php

use App\Http\Controllers\PonudjacController;
use App\Http\Controllers\PonudjacUslugaController;
use App\Http\Controllers\PretragaController;
use App\Http\Controllers\UslugaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

//login i registracija
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::resource('ponudjaci', PonudjacController::class);

Route::get('usluge', [UslugaController::class, 'index']);
Route::get('usluge/{id}', [UslugaController::class, 'show']); 
Route::get('usluge/kategorija/{kategorija_id}', [UslugaController::class, 'prikaziPoKategoriji']); 
Route::get('usluge/korisnik/{korisnik_id}', [UslugaController::class, 'prikaziPoKorisniku']); 

Route::get('ponudjacusluga/vratiSveUslugePonudjaca/{id}', [PonudjacUslugaController::class, 'vratiSveUslugePonudjaca']); 
Route::get('ponudjacusluga/vratiSvePonudjaceUsluge/{id}', [PonudjacUslugaController::class, 'vratiSvePonudjaceUsluge']);

//pretraga ponudjaca po gradu
Route::get('/search/ponudjaci', [PretragaController::class, 'searchPonudjaci']);

//vraca sve kategorije koje postoje u bazi
Route::get('kategorijeusluga', [UslugaController::class, 'sveKategorije']);
//rute za koje treba autentifikacija
Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post('usluge', [UslugaController::class, 'store']);
    Route::put('usluge/{id}', [UslugaController::class, 'update']); 
    Route::patch('usluge/azurirajOpis/{id}', [UslugaController::class, 'updateOpis']);
    Route::delete('usluge/{id}', [UslugaController::class, 'destroy']); 

    //export u excel
    Route::get('/export-excel', [PonudjacController::class, 'exportToExcel']);
    Route::get('user', [AuthController::class, 'getUser']); //vraca ulogovanog usera

    Route::post('logout', [AuthController::class, 'logout']);
});
 