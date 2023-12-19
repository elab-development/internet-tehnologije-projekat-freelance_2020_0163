<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class PonudjacUsluga extends Pivot
{
    use HasFactory;


    protected $table = 'PonudjacUsluga';

    protected $fillable = [
        'status',
        'ponudjac_id',
        'usluga_id',
        
    ];

}   
