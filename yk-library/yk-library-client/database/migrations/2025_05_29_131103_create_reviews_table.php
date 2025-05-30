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
    Schema::create('reviews', function (Blueprint $table) {
        $table->bigIncrements('id_review');
        $table->text('avis');
        $table->unsignedBigInteger('id_client');
        $table->foreign('id_client')->references('id_client')->on('clients');
        $table->unsignedBigInteger('id_book');
        $table->foreign('id_book')->references('id_book')->on('books');
        $table->timestamp('created_at')->useCurrent();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
