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
    Schema::create('fournisseur', function (Blueprint $table) {
        $table->bigIncrements('id_fournisseur');
        $table->string('libelle_fournisseur');
        $table->string('email_fournisseur')->unique();
        $table->string('telephone_fournisseur');
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fournisseur');
    }
};
