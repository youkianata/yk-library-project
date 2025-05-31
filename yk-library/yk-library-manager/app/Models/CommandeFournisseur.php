<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CommandeFournisseur extends Model
{
    protected $primaryKey = 'id_commande_fournisseur';
    protected $fillable = ['code_commande_fournisseur', 'id_fournisseur', 'montant_total', 'date_creation'];
    public function fournisseur() { return $this->belongsTo(Fournisseur::class, 'id_fournisseur'); }
    public function items() { return $this->hasMany(OrderItemFournisseur::class, 'id_commande_fournisseur'); }
}
