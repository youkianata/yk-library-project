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
Schema::create('order_items_fournisseurs', function (Blueprint $table) {
    $table->bigIncrements('id_order_items_fournisseur');
    $table->unsignedBigInteger('id_commande_fournisseur');
    $table->foreign('id_commande_fournisseur')->references('id_commande_fournisseur')->on('commandes_fournisseurs');
    $table->unsignedBigInteger('id_book');
    $table->foreign('id_book')->references('id_book')->on('books');
    $table->integer('quantite');
    $table->decimal('prix_unitaire', 8, 2);
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items_fournisseurs');
    }
};
