import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/app.css";
import Title from "@/Components/Title";
import Footer from "@/Components/Footer";
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "@inertiajs/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";


export default function IndexAuteur({ auth, auteurs }) {
  const [term, setTerm] = useState("");
  const [selected, setSelected] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const filtered = auteurs
    .filter(a =>
      (`${a.nom_auteur} ${a.prenom_auteur}`)
        .toLowerCase()
        .includes(term.toLowerCase())
    )
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const toggleOne = id =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );

  const toggleAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(filtered.map(a => a.id_auteur));
    }
    setAllSelected(!allSelected);
  };

  const exportToCSV = (data, filename) => {
    if (!data.length) return;
    const headers = Object.keys(data[0]).join(",");
    const rows = data
      .map(row =>
        Object.values(row)
          .map(v => `"${String(v).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
    const blob = new Blob([headers + "\n" + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
  };

  const handleExport = () => {
    const dataToExport =
      selected.length > 0
        ? filtered.filter(a => selected.includes(a.id_auteur))
        : filtered;
    if (!dataToExport.length) {
      alert("Aucune donnée à exporter");
      return;
    }
    const csvData = dataToExport.map(a => ({
      ID: a.id_auteur,
      Nom: a.nom_auteur,
      Prénom: a.prenom_auteur,
      Bio: a.bio_auteur ?? "",
      "Créé le": format(new Date(a.created_at), "dd/MM/yyyy", { locale: fr }),
      "Modifié le": format(new Date(a.updated_at), "dd/MM/yyyy", { locale: fr }),
    }));
    exportToCSV(csvData, "auteurs_export");
  };

  return (
    <AuthenticatedLayout auth={auth}>
      <Title titre="Liste des Auteurs" />

      <div className="flex justify-center mt-4 mb-4 px-2 sm:px-0">
        <div className="w-full max-w-[95%] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-dashed flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-blue-500 text-xl font-bold">
              Auteurs enregistrés
            </h3>
            <div className="flex gap-2 w-full sm:w-auto">
              <TextInput
                type="text"
                placeholder="Rechercher par nom/prénom"
                value={term}
                onChange={e => setTerm(e.target.value)}
              />
              <SecondaryButton
                onClick={handleExport}
                className="bg-green-600 text-white"
              >
                <i className="bi bi-file-earmark-excel mr-1"></i> Exporter
              </SecondaryButton>
              <Link
                href={route("auteurs.create")}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <i className="bi bi-plus-lg mr-1"></i> Ajouter
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto p-4">
            <table className="min-w-full text-sm text-left text-gray-600 table-fixed">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="p-2 text-center">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleAll}
                      className="cursor-pointer"
                    />
                  </th>
                  <th className="p-2">ID</th>
                  <th className="p-2">Nom</th>
                  <th className="p-2">Prénom</th>
                  <th className="p-2">Bio</th>
                  <th className="p-2">Créé le</th>
                  <th className="p-2">Modifié le</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(a => (
                  <tr key={a.id_auteur} className="border-t">
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        checked={selected.includes(a.id_auteur)}
                        onChange={() => toggleOne(a.id_auteur)}
                        className="cursor-pointer"
                      />
                    </td>
                    <td className="p-2">{a.id_auteur}</td>
                    <td className="p-2">{a.nom_auteur}</td>
                    <td className="p-2">{a.prenom_auteur}</td>
                    <td className="p-2">{a.bio_auteur}</td>
                    <td className="p-2">
                      {format(new Date(a.created_at), "dd/MM/yyyy", {
                        locale: fr,
                      })}
                    </td>
                    <td className="p-2">
                      {format(new Date(a.updated_at), "dd/MM/yyyy", {
                        locale: fr,
                      })}
                    </td>
                    <td className="p-2 text-center">
                      <Link
                        href={route("auteurs.edit", a.id_auteur)}
                        className="text-blue-600 hover:underline mr-2"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Link>
                      <Link
                        as="button"
                        href={route("auteurs.destroy", a.id_auteur)}
                        method="delete"
                        className="text-red-600 hover:underline"
                        data-confirm="Êtes-vous sûr ?"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </AuthenticatedLayout>
  );
}
