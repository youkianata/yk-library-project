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
       Schema::create('order_items_client', function (Blueprint $table) {
        $table->bigIncrements('id_order_items_client');
        $table->unsignedBigInteger('id_commande_client');
        $table->foreign('id_commande_client')->references('id_commande_client')->on('commandes_client');
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
        Schema::dropIfExists('order_items_client');
    }
};
