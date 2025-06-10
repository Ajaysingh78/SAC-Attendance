// script.js

const video = document.getElementById('video');
const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');
const fileInput = document.getElementById('file-input');
const statusText = document.getElementById('status');
const qrResult = document.getElementById('qr-result');

const collegeLat = 22.1821;
const collegeLng = 75.5945;
const allowedRadius = 300;

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function startScanner() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then((stream) => {
      video.srcObject = stream;
      video.setAttribute('playsinline', true);
      video.play();
      requestAnimationFrame(tick);
    });
}

function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
    if (code) {
      qrResult.textContent = `QR Code: ${code.data}`;
      window.location.href = code.data;
    } else {
      requestAnimationFrame(tick);
    }
  } else {
    requestAnimationFrame(tick);
  }
}

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function() {
    const img = new Image();
    img.onload = function() {
      canvasElement.width = img.width;
      canvasElement.height = img.height;
      canvas.drawImage(img, 0, 0);
      const imageData = canvas.getImageData(0, 0, img.width, img.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        qrResult.textContent = `QR Code: ${code.data}`;
        window.location.href = code.data;
      } else {
        qrResult.textContent = 'No QR code found.';
      }
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
});

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const dist = getDistance(lat, lng, collegeLat, collegeLng);
  if (dist <= allowedRadius) {
    statusText.textContent = '✅ You are inside the college. Scan to continue.';
    document.getElementById('scanner-section').style.display = 'block';
    startScanner();
  } else {
    statusText.textContent = '❌ You are not inside the college premises.';
  }
}, () => {
  statusText.textContent = '⚠️ Please allow location access.';
});
