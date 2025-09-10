<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class PageController extends Controller
{
    public function detail_gallery(Request $request, $id)
    {
        $user = User::where('id', $id)->firstOrFail();
        $items_count = $user->items()->count();
        $sum_of_absurdity_score = $user->items()->sum('absurditiy_score');

        return Inertia::render('gallery/app', [
            'user' => $user,
            'items_count' => $items_count,
            'sum_of_absurdity_score' => $sum_of_absurdity_score,
        ]);
    }
}
