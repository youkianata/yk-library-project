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
        Schema::create('payments', function (Blueprint $table) {
        $table->bigIncrements('id_payment');
        $table->unsignedBigInteger('id_commande_client');
        $table->foreign('id_commande_client')->references('id_commande_client')->on('commandes_clients');
        $table->decimal('montant', 10, 2);
        $table->string('mode_paiement');
        $table->timestamp('date_paiement')->useCurrent();
        $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
