import React from 'react';
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

const QRScan = () => {
  const nevigate = useNavigate();

  const handleScanWebcam = async (result) => {
    if (result) {
      nevigate(`/qrprocessing/${result.text}`);
    }
  };
  const handleErrorWebcam = (error) => {
    console.log(error);
  };
  const style = {
    borderRadius: '10px',
    width: '90%',
    margin: '1rem'
  };
  return (
    <>
      <section className="center__component">
        <h2 className="mx-2">Scan the QR code</h2>
        <QrReader
          style={style}
          delay={300}
          onError={handleErrorWebcam}
          onScan={handleScanWebcam}
          facingMode={'rear'}
        />
      </section>
    </>
  );
};

export default QRScan;
