/* import React, { useEffect, useState } from 'react';

const MicrofrontendContainer = () => {
  const [microfrontendHtml, setMicrofrontendHtml] = useState('');

  useEffect(() => {
    const fetchMicrofrontendHtml = async () => {
      const response = await fetch('http://192.168.1.2:7000/');
      const html = await response.text();
      setMicrofrontendHtml(html);
    };

    fetchMicrofrontendHtml();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: microfrontendHtml }} />
  );
};

export default MicrofrontendContainer; */

const MicrofrontendContainer = () => {
  return (
    <iframe src="http://localhost:7000" title="Microfrontend" width="200%" height="460px" />
  );
};

export default MicrofrontendContainer;