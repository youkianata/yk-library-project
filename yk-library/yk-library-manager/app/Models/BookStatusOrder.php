<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BookStatusOrder extends Model
{
    protected $primaryKey = 'id_status_order';
    protected $fillable = ['libelle_status_order'];
    public function books() { return $this->hasMany(Book::class, 'id_status_order'); }
}
