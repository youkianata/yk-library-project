<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    protected $primaryKey = 'id_client';
    protected $fillable = ['nom_client', 'prenom_client', 'telephone_client', 'address_client', 'chifer_d_affaire_client', 'id_user'];

    public function user() { return $this->belongsTo(User::class, 'id_user'); }
    public function orders() { return $this->hasMany(CommandeClient::class, 'id_client'); }
    public function reviews() { return $this->hasMany(Review::class, 'id_client'); }
}
