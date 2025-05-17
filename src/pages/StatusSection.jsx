const StatusSection = () => {
  return (
    <section className="w-full h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Status dos Serviços</h2>
      <div className="w-full h-[80vh]">
        <iframe
          src="https://outros-uptimekuma.uz3cuu.easypanel.host/status/services"
          title="Status"
          className="w-full h-full border-none"
        />
      </div>
    </section>
  );
};

export default StatusSection;
