<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    protected $primaryKey = 'id_books';
    protected $fillable = [
        'titre_book', 'prix_book', 'isbn_book', 'quantitie_initial_book', 'quantitie_acheter_book',
        'quantitie_commandes_book', 'id_auteur', 'id_genre', 'id_status', 'id_status_order'
    ];
    public function auteur() { return $this->belongsTo(Auteur::class, 'id_auteur'); }
    public function genre() { return $this->belongsTo(Genre::class, 'id_genre'); }
    public function statusOrder() { return $this->belongsTo(BookStatusOrder::class, 'id_status_order'); }
    public function status() { return $this->belongsTo(BookStatu::class, 'id_status'); }
    public function items() { return $this->hasMany(OrderItemClient::class, 'id_books'); }
    public function reviews() { return $this->hasMany(Review::class, 'id_books'); }
    public function supplierItems() { return $this->hasMany(OrderItemFournisseur::class, 'id_books'); }
}
