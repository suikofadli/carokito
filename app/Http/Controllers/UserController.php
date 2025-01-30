<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = UserResource::collection(
            User::latest()
                ->with(['roles' => fn ($query) => $query->whereNot('name', 'admin')])
                ->whereDoesntHave('roles', fn ($query) => $query->where('name', 'admin'))
                ->withTrashed()
                ->paginate(10)
        );

        return inertia('Dashboard/User/Index', compact('users'));
    }

    public function create()
    {
        $roles = Role::select('id', 'name')
            ->whereNot('name', 'admin')
            ->get();

        return inertia('Dashboard/User/Create', compact('roles'));
    }

    public function store(Request $request)
    {
        $attrs = $request->validate([
            'name' => 'string|required|min:3',
            'email' => 'email|required|unique:users,email',
            'password' => 'required|min:6',
            'roleId' => 'required|exists:roles,id',
        ]);

        $user = User::create([
            'name' => $attrs['name'],
            'email' => $attrs['email'],
            'password' => bcrypt($attrs['password']),
        ]);

        $user->roles()->attach($attrs['roleId']);

        return redirect()->route('dashboard.users.index');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('dashboard.users.index');
    }
}
