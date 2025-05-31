<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Genre extends Model
{
    protected $primaryKey = 'id_genre';
    protected $fillable = ['libelle_genre'];
    public function books() { return $this->hasMany(Book::class, 'id_genre'); }
}
