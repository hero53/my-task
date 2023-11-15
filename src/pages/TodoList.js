import { useState, useEffect } from "react";

const TACHES = [
  {
    id: 1,
    tache: "Faire les courses",
    enGras: true,
    terminee: false,
    date: "2023-11-06",
  },
  {
    id: 2,
    tache: "Répondre aux emails",
    enGras: false,
    terminee: true,
    date: "2023-11-07",
  },
  {
    id: 3,
    tache: "Préparer la présentation",
    enGras: true,
    terminee: false,
    date: "2023-11-08",
  },
  {
    id: 4,
    tache: "Réunion avec l'équipe",
    enGras: false,
    terminee: false,
    date: "2023-11-09",
  },
  {
    id: 5,
    tache: "Exercices de yoga",
    enGras: false,
    terminee: true,
    date: "2023-11-10",
  },
];

function TodoList() {
  //state
  const [taches, setTaches] = useState(TACHES);
  const [newtaches, setNewtaches] = useState("tache");
  const [tache, setTache] = useState("");
  const [tacheId, setTacheId] = useState("");

  //comportement

  //supprimer  une tache
  const handleDelete = (id) => {
    const copyTaches = [...taches];
    const newTachesUpdate = copyTaches.filter((tache) => tache.id !== id);
    setTaches(newTachesUpdate);
  };

  //valider une tache
  const handelSubmet = (e) => {
    e.preventDefault();
    const copyTaches = [...taches];
    const task = {
      id: Math.floor(Math.random() * 100) + 1,
      tache: newtaches,
      enGras: false,
      terminee: false,
      date: "new Date().toISOString().split('T')[0]",
    };
    copyTaches.push(task); // Utilisez push pour ajouter le nouvel élément à la fin du tableau
    setTaches(copyTaches);
    setNewtaches("");
  };

  const handleEdit = (id) => {
    console.log(id);
    const tache = taches.find((tache) => tache.id == id);
    setTacheId(id);
    setTache(tache);
  };
  const handleChange = (e) => {
    setNewtaches(e.target.value);
  };

  const handleChangeTache = (e) => {
    setTache(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const copyTaches = [...taches];
    const tacheIndex = copyTaches.find((tache) => tache.id == tacheId);
    tacheIndex.tache = tache;
    setTaches(copyTaches);
  };

  const handleGras = (id) => {
    // e.preventDefault();
    const copyTaches = [...taches];
    const tacheIndex = copyTaches.find((tache) => tache.id == id);
    tacheIndex.enGras = !tacheIndex.enGras;
    setTaches(copyTaches);
  };
  //affichage
  return (
    <div className="m-1">
      <form
        className=" m-2 form-inline"
        placeholder="Ex: tache 1"
        onSubmit={handelSubmet}
      >
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            value={newtaches}
            onChange={handleChange}
          />
        </div>
      </form>

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
            <tr key={tache.id}>
              <th scope="row">{tache.id}</th>
              <td className={tache.enGras?"strong":''}>{tache.tache}</td>
              <td>
                <button type="button" className="btn btn-sm btn-warning mx-1"
                onClick={() => handleGras(tache.id)}>
                  <i className="fa-solid fa-bold strong"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-success mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleEdit(tache.id)}
                >
                  <i className="fa-solid fa-pen-nib"></i>
                </button>
                <button
                  onClick={() => handleDelete(tache.id)}
                  className="btn btn-sm btn-danger mx-1"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="modal-body">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Tâche
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={tache.tache}
                    onChange={handleChangeTache}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
