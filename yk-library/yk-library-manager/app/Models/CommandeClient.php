<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\Hasone;

class CommandeClient extends Model
{
    protected $primaryKey = 'id_commande_client';
    protected $fillable = ['code_commande_client', 'id_client', 'id_promotion', 'montant_total', 'date_creation'];
    public function client() { return $this->belongsTo(Client::class, 'id_client'); }
    public function promotion() { return $this->belongsTo(Promotion::class, 'id_promotion'); }
    public function items() { return $this->hasMany(OrderItemClient::class, 'id_commande_client'); }
    public function payment() { return $this->hasOne(Payment::class, 'id_commande_client'); }
}
