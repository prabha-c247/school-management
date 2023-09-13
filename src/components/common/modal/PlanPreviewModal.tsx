import React from "react";
import { Modal, Button } from "react-bootstrap";

interface ModalProps {
  planPreviewOpen: boolean;
  Hide: () => void;
}

const PlanPreviewModal: React.FC<ModalProps> = ({ planPreviewOpen, Hide }) => {
  return (
    <Modal onClick={Hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={Hide}>
          Close
        </Button>
        <Button variant="primary" onClick={Hide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlanPreviewModal;
