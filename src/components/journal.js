import React, { useState } from 'react';

function Journal(){
    const [messages, setMessages] = useState(0);

    const handleInputChange = (event) => {
        event.persist();
        setMessages(messages => ({...messages, [event.target.name]: event.target.value}));
        console.log(messages)
      }

    const handleInputSubmit = (event) => {
        event.persist();
        
        console.log(messages)
    }

    return (
        <div>
            <h1 className="govuk-heading-l">Journal</h1>
            <p className="govuk-body">Use your journal to:</p>
            <ul className="govuk-list govuk-list--bullet">
                <li>add details about your work search</li>
                <li>leave messages for Universal Credit</li>
                <li>view your Universal Credit account history</li>
            </ul>
            <p className="govuk-body">If your message needs a reply, we'll respond during office hours (Monday to Friday, 8am to 6pm).</p>
            <button className="govuk-button">
            Add a journal entry
            </button>
            <table className="govuk-table">
                <caption className="govuk-table__caption">Journal entries</caption>
                <thead className="govuk-table__head">
                    <tr className="govuk-table__row">
                        <th scope="col" className="govuk-table__header app-custom-class">Date and time</th>
                        <th scope="col" className="govuk-table__header app-custom-class">Message</th>
                        <th scope="col" className="govuk-table__header app-custom-class">Added by</th>
                    </tr>
                </thead>
            <tbody className="govuk-table__body">
                <tr className="govuk-table__row">
                    <td className="govuk-table__cell">3 Jan 2020 at 11:26am</td>
                    <td className="govuk-table__cell">Hi Anthony, your earnings  on the 6th of January will not be 
                    taken into account for UC payment on the 7th of January,
                    but it will for your next  UC payment. Thanks, Catriona
                    <details class="govuk-details" data-module="govuk-details">
                        <summary class="govuk-details__summary">
                            <span class="govuk-details__summary-text">
                            Send Reply
                            </span>
                        </summary>
                        <div class="govuk-details__text">
                            <div class="govuk-form-group">
                                <label class="govuk-label" for="more-detail">
                                    <h1 className="govuk-heading-m">Reply</h1>
                                </label>
                                <textarea class="govuk-textarea" id="more-detail" name="message" onChange={handleInputChange} value={messages.message} rows="5" aria-describedby="more-detail-hint"></textarea>
                                <button class="govuk-button" data-module="govuk-button" onClick={handleInputSubmit}>
                                Send reply
                                </button>
                            </div>
                        </div>
                    </details>
                    </td>
                    <td className="govuk-table__cell">Catriona Newlands Jobcentre Plus</td>
                </tr>
                <tr className="govuk-table__row">
                    <td className="govuk-table__cell">2 Jan 2020 at 4:42pm</td>                   <td className="govuk-table__cell">Hi Catriona, sorry for the late reply.  I'll be getting paid on Monday.  Best, Tony</td>
                    <td className="govuk-table__cell">Anthony McShane</td>
                </tr>
                <tr className="govuk-table__row">
                    <td className="govuk-table__cell">30 Dec 2019 at 11:07am</td>
                    <td className="govuk-table__cell">Your phone appointment on Monday 30 December 2019 at 11:20am was cancelled</td>
                    <td className="govuk-table__cell">	An agent</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Journal;