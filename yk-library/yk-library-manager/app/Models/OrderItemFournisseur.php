<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItemFournisseur extends Model
{
    protected $primaryKey = 'id_order_item_fournisseur';
    protected $fillable = ['id_commande_fournisseur', 'id_books', 'quantite_achat', 'prix_unitaire'];
    public function order() { return $this->belongsTo(CommandeFournisseur::class, 'id_commande_fournisseur'); }
    public function book() { return $this->belongsTo(Book::class, 'id_books'); }
}
