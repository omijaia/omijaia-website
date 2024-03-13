
import '../globals.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="button" onClick={togglePopup}>Abrir Popup</button>
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <h2>Formulario</h2>
            {/* Agrega aquí tu formulario */}
            <button onClick={togglePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
