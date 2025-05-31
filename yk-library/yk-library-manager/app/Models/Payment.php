<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    protected $primaryKey = 'num_payment';
    protected $fillable = ['num_payment', 'id_commande_client'];
    public function commandeClient() { return $this->belongsTo(CommandeClient::class, 'id_commande_client'); }
}
