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
        Schema::create('ponudjaci', function (Blueprint $table) {
            $table->id();
            $table->string('imePrezime',30);
            $table->string('grad',25);
            $table->string('adresa',40);
            $table->string('email',40);
            $table->string('telefon',20);
            $table->integer('godineIskustva');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ponudjaci');
    }
};
