function Tache({
  tacheInfo,
  handleDeleteTache,
  handleEditTache,
  handleGrasTache,
}) {
  return (
    <tr>
      <th scope="row">{tacheInfo.id}</th>
      <td className={tacheInfo.enGras ? "strong" : ""}>{tacheInfo.tache}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-warning mx-1"
          onClick={() => handleGrasTache(tacheInfo.id)}
        >
          <i className="fa-solid fa-bold strong"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-success mx-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => handleEditTache(tacheInfo.id)}
        >
          <i className="fa-solid fa-pen-nib"></i>
        </button>
        <button
          onClick={() => handleDeleteTache(tacheInfo.id)}
          className="btn btn-sm btn-danger mx-1"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default Tache;
