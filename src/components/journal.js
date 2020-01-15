import React, { useState, useEffect } from 'react';

function Journal(){
    const [input, setInput] = useState('');
    const [savedMessages, setSavedMessages] = useState([
        {date: "30 Dec 2019 at 11:07am",
         text: "Your phone appointment on Monday 30 December 2019 at 11:20am was cancelled",
         user: "An Agent"
        },
        {date: "30 Dec 2019 at 11:07am",
        text: "Please call us on +441416389910",
        user: "An Agent"
        }
    ]);
    const [state, setState] = useState(0)

    // load state to local storage on render
    useEffect(() => {
        if (!localStorage.getItem('savedMessages')){
        localStorage.setItem('savedMessages', JSON.stringify(savedMessages))
        }
        setState('')
      }, [])


    const handleInputChange = (event) => {
        event.persist();
        setInput(input => ({...input, [event.target.name]: event.target.value}));
        console.log(input)
    }

    const handleInputSubmit = (event) => {
        event.persist();
        let date = new Date()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const strTime = hours + ':' + minutes + ampm;
        let number = date.toDateString().substring(8, 10)
        let year = date.toDateString().substring(11, 15)
        number[0] == 0 ? number = number[1] : number = number
        date = `${number} ${date.toDateString().substring(4, 7)} ${year} at ${strTime}`
        let newElement = {
            date: date,
            text: input.message,
            user: "Anthony McShane"
        }
        setSavedMessages(prevSavedMessages =>[newElement, ...prevSavedMessages])
        setInput('')
        document.getElementById('more-detail').value = ''
        console.log(savedMessages)
        localStorage.setItem('savedMessages', JSON.stringify(savedMessages))
        localStorage.setItem('latestMessage', JSON.stringify(newElement))
    }

    const renderMessage = message => {
        return(
            <tr className="govuk-table__row">
                    <td className="govuk-table__cell">{message.date}</td>
                    <td className="govuk-table__cell">{message.text}</td>
                    <td className="govuk-table__cell">{message.user}</td>
            </tr>
        )
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

                {localStorage.getItem('latestMessage') &&
                    <tr className="govuk-table__row">
                        <td className="govuk-table__cell">{JSON.parse(localStorage.getItem('latestMessage')).date}</td>
                        <td className="govuk-table__cell">{JSON.parse(localStorage.getItem('latestMessage')).text}</td>
                        <td className="govuk-table__cell">{JSON.parse(localStorage.getItem('latestMessage')).user}</td>
                     </tr>
                }
                {localStorage.getItem('savedMessages') &&
                JSON.parse(localStorage.getItem('savedMessages')).map(message => renderMessage(message))
                }
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
                                    <textarea class="govuk-textarea" id="more-detail" name="message" onChange={handleInputChange} value={input.message} rows="5" aria-describedby="more-detail-hint"></textarea>
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