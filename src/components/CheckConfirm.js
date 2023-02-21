const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confrimAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confrimAction;
};

function CheckConfirm() {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
}

export default CheckConfirm;
