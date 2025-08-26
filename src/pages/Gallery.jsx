export default function Gallery() {
 const images = [
    { src: '/images/paris.jpg', caption: 'Paris' },
    { src: '/images/bali.jpg', caption: 'Bali' },
    { src: '/images/kyoto.jpg', caption: 'Kyoto' },
    { src: '/images/rome.jpg', caption: 'Rome' },
    { src: '/images/sydney.jpg', caption: 'Sydney' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🌍 Travel Gallery</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {images.map((img, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img src={img.src} alt={img.caption} style={{ width: '100%', borderRadius: '8px' }} />
            <p style={{ marginTop: '0.5rem' }}>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}