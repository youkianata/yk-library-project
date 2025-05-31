<?php

use App\Exports\ClientsExport;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BookStatusController;
use App\Http\Controllers\auteurController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StatistiqueController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;




Route::get('/', function () {
    return redirect(route('login'));
});


Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', [DashboardController::class, 'consulterDashboard'])->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // auteurs route
    Route::get('/auteurs/listeauteur', [AuteurController::class, 'index'])->name('auteurs.index');
    Route::get('/auteurs/ajouterauteur', [AuteurController::class, 'create'])->name('auteurs.create');
    Route::post('/auteurs/storeauteur', [AuteurController::class, 'store'])->name('auteurs.store');
    Route::get('/auteurs/editauteur/{id}', [AuteurController::class, 'edit'])->name('auteurs.edit');
    Route::patch('/auteurs/updateauteur/{id}', [AuteurController::class, 'update'])->name('auteurs.update');
    Route::delete('/auteurs/destroyauteur/{id}', [AuteurController::class, 'destroy'])->name('auteurs.destroy');
    // roles route
    Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('/roles/create', [RoleController::class, 'create'])->name('roles.create');
    Route::post('/roles/store', [RoleController::class, 'store'])->name('roles.store');
    Route::get('/roles/{role:id_role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
    Route::post('roles/{role}', [RoleController::class, 'update'])->name('roles.update');
    // clients route
    Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
    Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');
    Route::post('/clients/store', [ClientController::class, 'store'])->name('clients.store');
    Route::get('/clients/{client}/edit', [ClientController::class, 'edit'])->name('clients.edit');
    Route::post('/clients/{client}', [ClientController::class, 'update'])->name('clients.update');
    Route::get('/clients/export', function () {
        return Excel::download(new ClientsExport, 'clients.xlsx');
    })->name('clients.export');
    // book status route
        Route::get('/bookstatus/liste', [BookStatusController::class, 'index'])->name('bookstatus.index');
    Route::get('/bookstatus/ajouter', [BookStatusController::class, 'create'])->name('bookstatus.create');
    Route::post('/bookstatus/store', [BookStatusController::class, 'store'])->name('bookstatus.store');
    Route::get('/bookstatus/edit/{id}', [BookStatusController::class, 'edit'])->name('bookstatus.edit');
    Route::patch('/bookstatus/update/{id}', [BookStatusController::class, 'update'])->name('bookstatus.update');
    Route::delete('/bookstatus/destroy/{id}', [BookStatusController::class, 'destroy'])->name('bookstatus.destroy');

    // statistique
    Route::get('/statistique', [StatistiqueController::class, 'index'])->name('statistiques.index');

});


require __DIR__.'/auth.php';
