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
       Schema::create('auteur', function (Blueprint $table) {
        $table->bigIncrements('id_auteur');
        $table->string('nom_auteur');
        $table->string('prenom_auteur');
        $table->text('bio_auteur')->nullable();
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auteur');
    }
};
