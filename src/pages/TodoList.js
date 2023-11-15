import { useState, useEffect } from "react";
import TACHES from "../models/mock-user";
import Modal from "../components/Modal";
import Tache from "../components/Tache";
import FormTache from "../components/FormTache";

function TodoList() {
  //--->state
  const [taches, setTaches] = useState(TACHES);

  const [tache, setTache] = useState("");
  const [tacheId, setTacheId] = useState("");

  //--->comportement

  //supprimer  une tache
  const handleDelete = (id) => {
    const copyTaches = [...taches];
    const newTachesUpdate = copyTaches.filter((tache) => tache.id !== id);
    setTaches(newTachesUpdate);
  };

  //selectionner pour modification
  const handleEdit = (id) => {
    console.log(id);
    const tache = taches.find((tache) => tache.id == id);
    setTacheId(id);
    setTache(tache);
  };
  const handelAddTache = (data) => {
    const copyTaches = [...taches];
    copyTaches.push(data); // Utilisez
    setTaches(copyTaches);
  };

  //modification du prompte de modification
  const handleChangeTache = (e) => {
    setTache(e.target.value);
  };

  //modifier
  const handleUpdate = (e) => {
    e.preventDefault();
    const copyTaches = [...taches];
    const tacheIndex = copyTaches.find((tache) => tache.id == tacheId);
    tacheIndex.tache = tache;
    setTaches(copyTaches);
  };

  //en gras
  const handleGras = (id) => {
    const copyTaches = [...taches];
    const tacheIndex = copyTaches.find((tache) => tache.id == id);
    tacheIndex.enGras = !tacheIndex.enGras;
    setTaches(copyTaches);
  };
  //--->affichage
  return (
    <div className="m-1">
      <FormTache handelAddTacheFormTache={handelAddTache} />
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Tâche</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((tache) => (
            <Tache key={tache.id}
              tacheInfo={tache}
              handleDeleteTache={handleDelete}
              handleEditTache={handleEdit}
              handleGrasTache={handleGras}
            />
          ))}
        </tbody>
      </table>
      <Modal
        handleUpdateModal={handleUpdate}
        handleChangeTacheModal={handleChangeTache}
        tacheInfo={tache}
      />
    </div>
  );
}

export default TodoList;
