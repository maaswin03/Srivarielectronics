import "./Gallery.css";

export default function Gallery() {
  const data = [
    {
      imageLink:
        "https://media.istockphoto.com/id/2151919108/photo/electrician-in-hardhat-and-safety-vest-holding-tablet-and-fixing-electric-panel.jpg?s=612x612&w=0&k=20&c=0Tq7cpk5KnM1YCEO2m2pnkWfpTLIQ_UI5Pm8uQgIKck=",
    },
    // {
    //   imageLink:
    //     "https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   imageLink:
    //     "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljYWxzJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
    // },
    {
      imageLink:
        "https://plus.unsplash.com/premium_photo-1678766819262-cdc490bfd0d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVsZWN0cmljYWxzJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imageLink:
        "https://media.istockphoto.com/id/1477975353/photo/male-electrician-worker-checking-repair-maintenance-operation-electric-system-in-factory-male.webp?a=1&b=1&s=612x612&w=0&k=20&c=ru8YsgqCdgfdyxxLrLa7PTDz4jQ-DgPw_0wVlO2yRxY=",
    },
    {
      imageLink:
        "https://media.istockphoto.com/id/2162518329/photo/air-conditioning-technicians-install-new-compressor-air-in-homes-repairman-fix-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=lMssvz8vTi33PuXxVlKZtZColGY0WOWTO2Zc58lE0cc=",
    },
    {
      imageLink:
        "https://media.istockphoto.com/id/1212509449/photo/electrician-measurements-with-multimeter-testing-current-electric-in-control-panel.webp?a=1&b=1&s=612x612&w=0&k=20&c=A1tncoGDboUcFQG9KN1HVlnNIMcFe33cCTLMttNqGhc=",
    },
    // {
    //   imageLink:
    //     "https://media.istockphoto.com/id/1403779834/photo/electrician-engineer-uses-a-multimeter-to-test-the-electrical-installation-and-power-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=vRAJ2Y_pceBHA5jv2GyFwqZOrwkl2RWxLsRUyO9A75k=",
    // },
    {
      imageLink:
        "https://media.istockphoto.com/id/1682030758/photo/electrician-measurements-with-multimeter-testing-current-electric-in-control-panel-safety.webp?a=1&b=1&s=612x612&w=0&k=20&c=UwIyfPATLZACC3tbKqsVC4xrI45qcn_3-SD0q7KsgAU=",
    },
  ];

  return (
    <div className="Gallery-1">
      <h1>Gallery</h1>
      <p>
      Powering reliability, innovation, and efficiency in every connection
      </p>
      <div className="Gallery-container">
        <div className="Gallery-grid">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="Gallery-item">
              <img
                className="Gallery-image"
                src={imageLink}
                alt="Gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
