<?php

use App\Http\Controllers\DemandeReservationController;
use App\Http\Controllers\JourController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;
use Illuminate\Http\Request;

Route::put('/status/update', [DemandeReservationController::class, 'update'])->name('status.update');
Route::get('/recuperHoraireDisponible', [JourController::class, 'recuperHoraireDisponible']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/demande-reservation/update-status', [DemandeReservationController::class, 'updateStatus']);
Route::post('/reservation/store', [ReservationController::class, 'store']);

