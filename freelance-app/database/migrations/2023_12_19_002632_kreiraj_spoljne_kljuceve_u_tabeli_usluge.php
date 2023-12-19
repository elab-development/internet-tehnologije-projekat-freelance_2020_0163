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
        Schema::table('usluge', function (Blueprint $table) {
            $table->foreignId('kategorija_usluge_id')->nullable()->references('id')->on('kategorijeUsluga')->onDelete('set null');
            $table->foreignId('user_id')->nullable()->references('id')->on('users')->onDelete('set null');
         });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('usluge', function (Blueprint $table) {
            $table->dropForeign('kategorija_usluge_id');
            $table->dropForeign('user_id');
        });
    }
};
