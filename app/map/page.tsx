const Map = () => {
  return (
    <div className="overflow-hidden w-screen h-screen">
      <div className="justfiy-center text-center text-sm md:text-4xl font-extrabold p-2 m-2">
        サーマルマップ
      </div>
      <iframe
        src="/08-NW-0.0to100.0-above0.0winval100.0.html"
        className="border-none w-full h-full p-2 ml-4"
        title="Plotly Graph"
      ></iframe>
    </div>
  );
};

export default Map;
