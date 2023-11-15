function Modal({ tacheInfo, handleUpdateModal, handleChangeTacheModal }) {
  return (
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
          <form onSubmit={handleUpdateModal}>
            <div className="modal-body">
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Tâche
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={tacheInfo.tache}
                  onChange={handleChangeTacheModal}
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
  );
}

export default Modal;
