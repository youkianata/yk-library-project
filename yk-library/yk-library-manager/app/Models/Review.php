<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    protected $primaryKey = 'id_review';
    protected $fillable = ['id_client', 'id_books', 'note', 'commentaire'];
    public function client() { return $this->belongsTo(Client::class, 'id_client'); }
    public function book() { return $this->belongsTo(Book::class, 'id_books'); }
}
