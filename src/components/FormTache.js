import { useState } from "react";

function FormTache({handelAddTacheFormTache}) {
 
     const [newtaches, setNewtaches] = useState("tache");

 
  //valider une tache
  const handelSubmet = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 100) + 1,
      tache: newtaches,
      enGras: false,
      terminee: false,
      date: "new Date().toISOString().split('T')[0]",
    };
   handelAddTacheFormTache(task)
    setNewtaches("");
  };

    //modification du prompte de creation
  const handleChange = (e) => {
    setNewtaches(e.target.value);
  };



    return (
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
  );
}

export default FormTache;
