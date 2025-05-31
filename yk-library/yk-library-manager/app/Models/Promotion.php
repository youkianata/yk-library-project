<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Promotion extends Model
{
    protected $primaryKey = 'id_promotion';
    protected $fillable = ['code_promotion', 'pourcentage_remice', 'date_expiration'];
    public function orders() { return $this->hasMany(CommandeClient::class, 'id_promotion'); }
}
