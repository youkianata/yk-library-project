import React, { useContext } from 'react';
import { Link } from "@inertiajs/react";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BookStatusContext } from './IndexBookStatus';

const Items = ({ items }) => {
  const { selected, toggleOne } = useContext(BookStatusContext);

  return (
    <>
      {items.map(status => (
        <tr
          key={status.id_book_status}
          className="text-center bg-white border-b hover:bg-gray-50"
        >
          <td className="p-2">
            <input
              type="checkbox"
              checked={selected.includes(status.id_book_status)}
              onChange={() => toggleOne(status.id_book_status)}
              className="cursor-pointer"
            />
          </td>
          <td className="p-2">{status.id_book_status}</td>
          <td className="p-2">{status.libelle_status}</td>
          <td className="p-2">{status.description_status}</td>
          <td className="p-2">
            {format(new Date(status.created_at), "dd/MM/yyyy", { locale: fr })}
          </td>
          <td className="p-2">
            {format(new Date(status.updated_at), "dd/MM/yyyy", { locale: fr })}
          </td>
          <td className="p-2">
            <div className="flex justify-center space-x-2">
              <Link
                href={route('bookstatus.edit', status.id_book_status)}
                className="text-white bg-yellow-400 hover:bg-yellow-500 rounded-full px-3 py-1.5 text-sm"
              >
                <i className="bi bi-pencil-fill mr-1"></i>Modifier
              </Link>
              <Link
                as="button"
                method="delete"
                href={route('bookstatus.destroy', status.id_book_status)}
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
