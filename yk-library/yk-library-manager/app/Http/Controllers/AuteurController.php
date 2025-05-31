<?php

namespace App\Http\Controllers;

use App\Models\Auteur;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuteurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auteurs = Auteur::orderByDesc('id_auteur')->get();

        return Inertia::render('Auteurs/IndexAuteur', [
            'auteurs' => $auteurs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Auteurs/AjoutAuteur');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nomAuteur'    => 'required|string|between:2,100',
            'prenomAuteur' => 'required|string|between:2,100',
            'bioAuteur'    => 'nullable|string',
        ]);

        Auteur::create([
            'nom_auteur'    => $validated['nomAuteur'],
            'prenom_auteur' => $validated['prenomAuteur'],
            'bio_auteur'    => $validated['bioAuteur'] ?? null,
        ]);

        return to_route('auteurs.index')
            ->with('flash', ['success' => 'Auteur créé avec succès']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $auteur = Auteur::findOrFail($id);

        return Inertia::render('Auteurs/ModifierAuteur', [
            'auteur' => $auteur,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nomAuteur'    => 'required|string|between:2,100',
            'prenomAuteur' => 'required|string|between:2,100',
            'bioAuteur'    => 'nullable|string',
        ]);

        $auteur = Auteur::findOrFail($id);
        $auteur->update([
            'nom_auteur'    => $validated['nomAuteur'],
            'prenom_auteur' => $validated['prenomAuteur'],
            'bio_auteur'    => $validated['bioAuteur'] ?? null,
        ]);

        return to_route('auteurs.index')
            ->with('flash', ['success' => 'Auteur mis à jour avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $auteur = Auteur::findOrFail($id);
        $auteur->delete();

        return to_route('auteurs.index')
            ->with('flash', ['success' => 'Auteur supprimé avec succès']);
    }
}
