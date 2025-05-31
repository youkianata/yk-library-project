<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function consulterDashboard(){
        return Inertia::render('Dashboard/Dashboard');
    }
}
