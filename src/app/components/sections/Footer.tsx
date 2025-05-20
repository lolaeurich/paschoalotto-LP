export default function Footer() {
  return (
    <footer className="w-full bg-white py-16 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto w-full relative">
        <img
          src="/logo.png"
          alt="Logo Paschoalotto"
          className="w-[240px] md:w-[410px] h-auto mb-6 md:mb-0"
        />
        
        <div className="absolute md:hidden w-[200px] h-px bg-branco-footer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        <div className="hidden md:block w-px h-[140px] bg-branco-footer mr-8 ml-4" />

        <img
          src="/logo-asa.png"
          alt="Logo ASA Estágios"
          className="w-[130px] md:w-[222px] h-auto mt-6 md:mt-0"
        />
      </div>
    </footer>
  )
}
