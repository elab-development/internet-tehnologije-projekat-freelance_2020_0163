<?php

use App\Http\Controllers\PonudjacController;
use App\Http\Controllers\UslugaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::resource('ponudjaci', PonudjacController::class);

Route::get('usluge', [UslugaController::class, 'index']);

Route::get('usluge/{id}', [UslugaController::class, 'show']); 

Route::get('usluge/kategorija/{kategorija_id}', [UslugaController::class, 'prikaziPoKategoriji']); 

Route::get('usluge/korisnik/{korisnik_id}', [UslugaController::class, 'prikaziPoKorisniku']); 

Route::post('usluge', [UslugaController::class, 'store']);

Route::put('usluge/{id}', [UslugaController::class, 'update']); 

Route::patch('usluge/azurirajOpis/{id}', [UslugaController::class, 'updateOpis']);

Route::delete('usluge/{id}', [UslugaController::class, 'destroy']); 
