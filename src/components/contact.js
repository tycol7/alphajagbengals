import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/c4ea14ec-2473-4ea2-a4cd-fa1fa18a57a8",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Message sent - thank you! " + String.fromCodePoint(0x1F60A), form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
      return (
        <>
        <div className="form">
            <h2>Contact Us</h2>
                <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" required="required" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" className="form-control" rows="4" required="required"></textarea>
                </div>
                {!serverState.status && (
                    <button type="submit" disabled={serverState.submitting}>Submit</button>
                )}
                {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {!serverState.status.ok && (
                        <button type="submit" disabled={serverState.submitting}>Submit</button>
                    )}
                {serverState.status.msg}
                </p>
            )}
                </form>
            </div>
            <div className="affiliates">
            <h2>Affiliates</h2>
                <p><span className="headline">Softline Cat Enclosures</span><br />
                Custom solutions for your cat's safety<br />
                <a href="https://www.softlinecatenclosures.com.au" rel="noreferrer" target="_blank">www.softlinecatenclosures.com.au</a></p>
                <div className="spot-wrapper">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#935F3B" d="M32.5,-41.1C43,-29.9,52.9,-20.5,57.4,-8.2C62,4.2,61.1,19.5,53.6,29.6C46.2,39.7,32.1,44.7,18.2,49.4C4.4,54.1,-9.3,58.6,-23.5,56.8C-37.7,55,-52.4,46.9,-64.7,33.5C-76.9,20.2,-86.7,1.6,-83.5,-14.4C-80.3,-30.4,-64.2,-43.9,-48.1,-54C-32,-64.1,-16,-70.9,-2.5,-68C11,-65,22,-52.2,32.5,-41.1Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>
        </>
      );
};

export default Contact