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
        Schema::table('ponudjaci', function (Blueprint $table) {
            $table ->string('strucnaSprema', 20);
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ponudjaci', function (Blueprint $table) {
            $table ->dropColumn('strucnaSprema');
        }); 
    }
};
