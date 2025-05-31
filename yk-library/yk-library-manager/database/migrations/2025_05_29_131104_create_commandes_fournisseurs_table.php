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
    Schema::create('commandes_fournisseurs', function (Blueprint $table) {
        $table->bigIncrements('id_commande_fournisseur');
        $table->unsignedBigInteger('id_fournisseur');
        $table->foreign('id_fournisseur')->references('id_fournisseur')->on('fournisseurs');
        $table->timestamp('date_commande_fournisseur')->useCurrent();
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes_fournisseurs');
    }
};
