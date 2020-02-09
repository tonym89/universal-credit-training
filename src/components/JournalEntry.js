import React, { useState, useEffect } from 'react';

function JournalEntry(){
    const [input, setInput] = useState('');
    return(
        <div>
         <h1 className="govuk-heading-l">Choose a category for your journal entry
</h1>

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="changed-name-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
      <h1 class="govuk-fieldset__heading">
      What's this entry about?

      </h1>
    </legend>
    <span id="changed-name-hint" class="govuk-hint">
      This includes changing your last name or spelling your name differently.
    </span>
    <div class="govuk-radios govuk-radios--inline">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name" name="changed-name" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="changed-name">
          A Payment
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">
        A change
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">
        A change
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">
        A change
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">
        A change
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">
        A change
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">
        A change
        </label>
      </div>
    </div>
  </fieldset>
</div>
        </div>
    )
}

export default JournalEntry;