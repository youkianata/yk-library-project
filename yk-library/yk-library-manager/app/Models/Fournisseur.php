<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Fournisseur extends Model
{
    protected $primaryKey = 'id_fournisseur';
    protected $fillable = ['telephone_fournisseur', 'libelle_fournisseur'];
    public function orders() { return $this->hasMany(CommandeFournisseur::class, 'id_fournisseur'); }
}
