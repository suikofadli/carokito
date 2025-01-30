<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserRestoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, int $userId)
    {
        $user = User::onlyTrashed()->findOrFail($userId);
        $user->restore();

        return redirect()->route('dashboard.users.index');
    }
}
