import { Projects } from "./Projects";
// import "./cards.css"

const Modal = ({ open, onClose, modalContent }) => {
  if (!open) return null;

  const renderModalContent = () => {
    switch(modalContent) {
      case "Projects":
        return <Projects/>
        break;
      default:
        return
    }
  }

  return (
    // <div onClick={onClose} className="overlay">
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="modalContainer"
    >
      {/* <img src={nft} alt="/" /> */}
      <div className="modalRight">
        <p className="closeBtn" onClick={onClose}>
          X
        </p>
        <div className="content">
          {/* <p>Do you want a</p>
          <h1>$20 CREDIT</h1>
          <p>for your first tade?</p>
        </div>
        <div className="btnContainer">
          <button className="btnPrimary">
            <span className="bold">YES</span>, I love NFT's
          </button>
          <button className="btnOutline">
            <span className="bold">NO</span>, thanks
          </button>
        </div> */}
          {modalContent && modalContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
