<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::prefix('gallery')->group(function () {
        Route::get('/{id}', [PageController::class, 'detail_gallery']);
        Route::resource('item', ItemController::class);
    });

    Route::get('/leaderboard', function () {
        return Inertia::render('leaderboard');
    })->name('leaderboard');
    Route::get('/search', function () {
        return Inertia::render('search');
    })->name('search');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
