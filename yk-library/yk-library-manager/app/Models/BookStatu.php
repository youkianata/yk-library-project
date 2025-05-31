<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookStatu extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_status';
    public $timestamps = false;

    protected $fillable = [
        'libelle_status',
    ];

    /**
     * Get the books with this status.
     */
    public function books()
    {
        return $this->hasMany(Book::class, 'id_status');
    }
}
