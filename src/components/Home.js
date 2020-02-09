import React from 'react';

function Home(){

    return (
        <div>

<h1 className="govuk-heading-l">Your payment</h1>
             <p className="govuk-body">Your next payment day is 7 February 2020.</p>
             <p className="govuk-body">Go to <b>payments</b> for more details.

</p>

<div class="home-grid-row">
  <div class="home-menu-item">
  <a href="#" class="govuk-link">Report a change 
of circumstances</a>
  </div>

  <div class="home-menu-item">
  <a href="#" class="govuk-link">Add a note 
to your journal</a>
  </div>
</div>

<div class="home-grid-row">
  <div class="home-menu-item">
  <a href="#" class="govuk-link">Advances
</a>
  </div>

  <div class="home-menu-item">
  <a href="#" class="govuk-link">View to-do list</a>
  </div>
</div>

<div class="home-grid-row">
  <div class="home-menu-item">
  <a href="#" class="govuk-link">My commitments</a>
  </div>

  <div class="home-menu-item">
  <a href="#" class="govuk-link">Payments</a>
  </div>
</div>

<div class="home-grid-row">
  <div class="home-menu-item">
  <a href="#" class="govuk-link">Universal Credit Guide</a>
  </div>

  <div class="home-menu-item">
  <a href="#" class="govuk-link">Job applications 
interested, applied, interviewing</a>
  </div>
</div>
<div style={{marginTop: "40px"}}>
<h1 className="govuk-heading-l">Your commitments</h1>
<p className="govuk-body">This is what you've agreed to do in order to receive Universal Credit.

</p>
<p className="govuk-body"><b>It's important that you understand that in return for your Universal Credit payment you're agreeing to look for work.</b></p>
<p className="govuk-body">You'll need to commit to doing everything you reasonably can to find and take paid work. Your work coach will help you agree your commitments.</p>
</div>
        </div>
    )
}

export default Home;