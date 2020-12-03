import { useState } from "react";

const NotificationPanel = () => {
  const [notif, setNotif] = useState(true);

  const showNotif = () => setNotif(!notif);

  return (
    <div id={notif ? 'slideUp' : 'slideUp-active'} className="bg-primary-smoke-grey p-4 flex justify-center">
      <div className="grid grid-cols-5 phone:flex flex-wrap">
        <div className="col-span-4 phone:block">
          <p className="text-left">
            By accessing and using this website, you acknowledge that you have read and<br />understand our
            <a href="/" className="text-primary-blue"> Cookie Policy</a>,
            <a href="/" className="text-primary-blue"> Privacy Policy</a>, and our
            <a href="/" className="text-primary-blue"> Terms of Service</a>.
          </p>
        </div>
        <div>
          <button onClick={showNotif} className="bg-primary-blue py-2 px-4 mx-6 text-white hover:bg-primary-dark-blue hover:transition duration-300 ease-in-out phone:mx-0 my-1">
              Got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotificationPanel
