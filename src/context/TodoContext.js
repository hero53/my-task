import { createContext, useContext, useState } from "react";
import TACHES from "../models/mock-user";


const TodoContext = createContext();

// Créer un composant TodoProvider
export const TodoProvider = ({ children }) => {
    const [taches, setTaches] = useState(TACHES);
    const [tache, setTache] = useState("");
    const [tacheId, setTacheId] = useState("");
  
    // Autres fonctions que vous pourriez vouloir exposer à vos composants
  
    // Enveloppez les composants enfants avec le provider
    return (
      <TodoContext.Provider
        value={{
          taches,
          setTaches,
          tache,
          setTache,
          tacheId,
          setTacheId,
          // Ajoutez d'autres fonctions ici si nécessaire
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  };
  
  // Créer un hook personnalisé pour utiliser le contexte
  export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error("useTodoContext doit être utilisé à l'intérieur d'un TodoProvider");
    }
    return context;
  };