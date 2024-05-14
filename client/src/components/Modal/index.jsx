import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalForm({
  show,
  setShow,
  title,
  bodyContent,
  primaryBtn,
  primaryAction,
  secondaryBtn,
  secondaryAction,
  noFooter,
}) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodyContent?.() || bodyContent}</Modal.Body>
        {!noFooter && (
          <Modal.Footer>
            {secondaryBtn ? (
              secondaryBtn
            ) : (
              <Button
                variant="secondary"
                onClick={secondaryAction ? secondaryAction : handleClose}
              >
                close
              </Button>
            )}
            {primaryBtn ? (
              primaryBtn
            ) : (
              <Button
                variant="primary"
                onClick={primaryAction ? primaryAction : handleClose}
              >
                Save
              </Button>
            )}
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default ModalForm;
