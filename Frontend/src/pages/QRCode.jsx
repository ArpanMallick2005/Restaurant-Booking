import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const QRCodePage = () => {
  const [qrValue, setQrValue] = useState('http://localhost:4000/api/v1/reservation/send'); // Example value
  const navigate = useNavigate();

  const handleSubmit = () => {
    // In a real application, you would likely send data to the backend here
    // and then navigate to success.
    navigate('/success');
  };

  return (
    <div className='img'>
    <div className='box'>
      <h1 className='row'>Scan this QR Code</h1>
      <div style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: 256,
        width: "100%"
      }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
      </div>
      <button onClick={handleSubmit} class="btn">Confirm Reservation</button>
    </div>
    </div>
  );
};

export default QRCodePage;