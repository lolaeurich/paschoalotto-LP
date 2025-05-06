export default function Footer() {
    return (
      <footer className="w-full bg-white py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full">
          <img
            src="/logo.png"
            alt="Logo Paschoalotto"
            className="w-[205px] md:w-[410px] h-auto mb-6 md:mb-0"
          />
  
          <div className="w-full h-px bg-[#E0E0E0] my-6 md:hidden" />
  
          <div className="hidden md:block w-px h-[60px] bg-[#E0E0E0] mx-6" />
  
          <img
            src="/logo-asa.png"
            alt="Logo ASA Estágios"
            className="w-[111px] md:w-[222px] h-auto"
          />
        </div>
      </footer>
    )
  }
  