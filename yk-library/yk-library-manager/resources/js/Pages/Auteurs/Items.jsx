import React, { useContext } from 'react';
import { Link } from "@inertiajs/react";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { AuteursContext } from './IndexAuteur';

const Items = ({ items }) => {
  const { selected, toggleOne } = useContext(AuteursContext);

  return (
    <>
      {items.map(auteur => (
        <tr
          key={auteur.id_auteur}
          className="text-center bg-white border-b hover:bg-gray-50"
        >
          <td className="p-2">
            <input
              type="checkbox"
              checked={selected.includes(auteur.id_auteur)}
              onChange={() => toggleOne(auteur.id_auteur)}
              className="cursor-pointer"
            />
          </td>
          <td className="p-2">{auteur.id_auteur}</td>
          <td className="p-2">{auteur.nom_auteur}</td>
          <td className="p-2">{auteur.prenom_auteur}</td>
          <td className="p-2">{auteur.bio_auteur}</td>
          <td className="p-2">
            {format(new Date(auteur.created_at), "dd/MM/yyyy", { locale: fr })}
          </td>
          <td className="p-2">
            {format(new Date(auteur.updated_at), "dd/MM/yyyy", { locale: fr })}
          </td>
          <td className="p-2">
            <div className="flex justify-center space-x-2">
              <Link
                href={route('auteurs.edit', auteur.id_auteur)}
                className="text-white bg-yellow-400 hover:bg-yellow-500 rounded-full px-3 py-1.5 text-sm"
              >
                <i className="bi bi-pencil-fill mr-1"></i>Modifier
              </Link>
              <Link
                as="button"
                method="delete"
                href={route('auteurs.destroy', auteur.id_auteur)}
                className="text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1.5 text-sm"
                data-confirm="Êtes-vous sûr ?"
              >
                <i className="bi bi-trash-fill mr-1"></i>Supprimer
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Items;
