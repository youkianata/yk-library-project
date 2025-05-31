<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItemClient extends Model
{
    protected $primaryKey = 'id_order_item_client';
    protected $fillable = ['id_commande_client', 'id_books', 'quantite_vente', 'prix_unitaire'];
    public function order() { return $this->belongsTo(CommandeClient::class, 'id_commande_client'); }
    public function book() { return $this->belongsTo(Book::class, 'id_books'); }
}
