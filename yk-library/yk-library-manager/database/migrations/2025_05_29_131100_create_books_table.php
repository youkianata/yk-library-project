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
        Schema::create('books', function (Blueprint $table) {
            $table->bigIncrements('id_book');
            $table->string('titre_book');
            $table->text('description_book')->nullable();
            $table->integer('chapters_book')->nullable();
            $table->integer('volumes_book')->nullable();
            $table->integer('nbr_pages_book');
            $table->decimal('prix_book', 8, 2);
            $table->integer('stock_book')->default(0);
            $table->string('cover_photo_book')->nullable();
            $table->unsignedBigInteger('id_auteur');
            $table->foreign('id_auteur')->references('id_auteur')->on('auteurs');
            $table->unsignedBigInteger('id_genre');
            $table->foreign('id_genre')->references('id_genre')->on('genres');
            $table->unsignedBigInteger('id_status');
            $table->foreign('id_status')->references('id_status')->on('book_status');
            $table->unsignedBigInteger('id_status_order');
            $table->foreign('id_status_order')->references('id_status_order')->on('book_status_orders');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
