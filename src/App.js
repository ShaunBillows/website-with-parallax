import { useState } from "react";
import Modal from "./Modal";
import { Menu } from "./Menu";
import { Projects } from "./Projects";
import { About } from "./About";
import {Contact} from "./Contact";
import "./app.css";

export const App = () => {

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("Projects");

  return (
    <>
      <Menu setOpenModal={setOpenModal} setModalContent={setModalContent}  openModal={openModal}/>
      <Modal open={openModal} onClose={() => setOpenModal(false)} modalContent={modalContent}/>
    </>
  );
};
