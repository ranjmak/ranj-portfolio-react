import React from 'react';
import './style.css';

function Footer() {
  return (
    // <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    <div className='row'>
        <div className="icons col-12">
            <a href="https://github.com/ranjmak">
                <i className="fa-brands fa-github fa-lg fa-fw" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/ranjit-makwana/">
                <i className="fa-brands fa-linkedin fa-lg fa-fw" aria-hidden="true"></i>
            </a>
            {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ranjit-makwana-2332511" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/ranjit-makwana-2332511?trk=profile-badge">Ranjit Makwana</a></div> */}
            <a href="https://twitter.com/ranjimak">
                <i className="fa-brands fa-twitter fa-lg fa-fw" aria-hidden="true"></i>
            </a>
        </div>
    </div>
  );
}

export default Footer;



// <FontAwesomeIcon icon={['fab', 'microsoft']} />
// <FontAwesomeIcon icon={['fab', 'google']} />
