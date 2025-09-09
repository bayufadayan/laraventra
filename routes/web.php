<?php

use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('gallery', ItemController::class);

    Route::get('/leaderboard', function () {
        return Inertia::render('leaderboard');
    })->name('leaderboard');
    Route::get('/search', function () {
        return Inertia::render('search');
    })->name('search');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
