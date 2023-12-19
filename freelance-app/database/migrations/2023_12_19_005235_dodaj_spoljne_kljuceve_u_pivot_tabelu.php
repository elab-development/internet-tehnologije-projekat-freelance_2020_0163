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
        Schema::table('ponudjac_usluga', function (Blueprint $table) {
            $table->foreignId('ponudjac_id')->nullable()->references('id')->on('ponudjaci')->onDelete('cascade');
            $table->foreignId('usluga_id')->nullable()->references('id')->on('usluge')->onDelete('cascade');
         });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ponudjac_usluga', function (Blueprint $table) {
            $table->dropForeign('ponudjac_id');
            $table->dropForeign('usluga_id');
         });
    }
};
