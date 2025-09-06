<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\UUIDAsPrimaryKey;

class Item extends Model
{
    use HasFactory, SoftDeletes, UUIDAsPrimaryKey;

    protected $fillable = [
        'title',
        'description',
        'image_url',
        'absurditiy_score',
    ];

    public function student()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
