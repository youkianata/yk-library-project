<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
class RoleController extends Controller
{
    public function index() {
        $roles = Role::all();
        return Inertia::render('Roles/IndexRole', [
            'roles' => $roles
        ]);
    }

    public function create() {
        return Inertia::render('Roles/AjoutRole');
    }

    public function store(Request $request) {
        //dd($request);
        $request->validate([
            'codeRole' => 'required|between:2,20',
            'libelleRole' => 'required|between:2,20',
        ]);
        //dd($request->codeRole, $request->libelleRole);
        Role::create([
            'code_role' => $request->codeRole,
            'libelle_role' => $request->libelleRole,
        ]);
        return to_route('roles.index')->with('success', 'Role a ete bien cree');
    }

    public function edit($id) {
        $role = Role::findOrFail($id);
        return Inertia::render('Roles/EditRole', [
            'role' => $role
        ]);
    }

    public function update(Request $request, $id) {
        //dd($request, Role::find($id));
        $role = Role::find($id);
        $validatedData = $request->validate([
            'codeRole' => 'required|between:2,20',
            'libelleRole' => 'required|between:2,20',
        ]);
        $role->update([
            'code_role' => $request->codeRole,
            'libelle_role' => $request->libelleRole,
        ]);

        return to_route('roles.index')->with('success', 'Modification avec success');
    }
}
