import React from 'react';

const Footer = (props) => {
  return (
    <div className="fixed bottom-1 left-5">
      <a
        href={'https://unicore-alliance.net/terms/index.html'}
        rel={'noreferrer'}
        className="text-[#ffffff8a] mr-3"
      >
        Terms of Use
      </a>
      <a
        href={'https://unicore-alliance.net/privacy/index.html'}
        rel={'noreferrer'}
        className="text-[#ffffff8a] mr-3"
      >
        Privacy Policy
      </a>
      <a
        href={'https://unicore-alliance.net/eula/index.html'}
        rel={'noreferrer'}
        className="text-[#ffffff8a] mr-3"
      >
        EULA
      </a>
      <a
        href={'https://unicore-alliance.net/contacts/index.html'}
        rel={'noreferrer'}
        className="text-[#ffffff8a] mr-3"
      >
        Contact Us
      </a>
      <a
        href={'https://unicore-alliance.net/about/index.html'}
        rel={'noreferrer'}
        className="text-[#ffffff8a] mr-3"
      >
        About Us
      </a>
    </div>
  );
};

export default Footer;
