<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('kategorije_usluga', function (Blueprint $table) {
            $table ->string('naziv', 40)->change();
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('kategorije_usluga', function (Blueprint $table) {
            $table ->string('naziv', 30)->change();
        }); 
    }
};
