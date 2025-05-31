<?php

namespace App\Http\Controllers;

use App\Models\BookStatu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookStatuses = BookStatu::orderByDesc('id_status')->get();

        return Inertia::render('BookStatus/IndexBookStatus', [
            'bookStatuses' => $bookStatuses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('BookStatus/AjoutBookStatus');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'libelle' => 'required|string|between:2,100',
            'description' => 'nullable|string',
        ]);

        BookStatu::create([
            'libelle_status' => $validated['libelle'],
            'description_status' => $validated['description'] ?? null,
        ]);

        return to_route('bookstatus.index')
            ->with('flash', ['success' => 'Statut créé avec succès']);
    }

    /**
     * Display the specified resource.
     */

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $bookStatus = BookStatu::findOrFail($id);

        return Inertia::render('BookStatus/ModifierBookStatus', [
            'bookStatus' => $bookStatus,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'libelle' => 'required|string|between:2,100',
            'description' => 'nullable|string',
        ]);

        $bookStatus = BookStatu::findOrFail($id);
        $bookStatus->update([
            'libelle_status' => $validated['libelle'],
            'description_status' => $validated['description'] ?? null,
        ]);

        return to_route('bookstatus.index')
            ->with('flash', ['success' => 'Statut mis à jour avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $bookStatus = BookStatu::findOrFail($id);
        $bookStatus->delete();

        return to_route('bookstatus.index')
            ->with('flash', ['success' => 'Statut supprimé avec succès']);
    }
}
