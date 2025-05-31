<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Auteur extends Model
{
    protected $primaryKey = 'id_auteur';
    protected $fillable = ['nom_auteur', 'prenom_auteur', 'bio_auteur'];
    public function books() { return $this->hasMany(Book::class, 'id_auteur'); }
}
