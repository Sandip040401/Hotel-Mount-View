import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.3334746428463!2d88.22908537523871!3d27.3027501764169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e68689f7942671%3A0xed5ef567af410981!2sThe%20Mount%20view%20Hotel!5e0!3m2!1sen!2sin!4v1713732635515!5m2!1sen!2sin"
      style={{ border: 0, width: '100%', height: '100%' ,  borderRadius: '10px',}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  );
};

export default GoogleMapEmbed;
