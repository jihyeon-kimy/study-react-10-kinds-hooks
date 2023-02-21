const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function CheckNotification() {
  const triggerNotif = useNotification("Notification!!!!", { body: "hello" });
  return (
    <>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Trigger Notificatiton</button>
    </>
  );
}

export default CheckNotification;
