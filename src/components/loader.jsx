
import Image from "next/image";

export default function Loader() {

  return (
    <>
    <div className='h-screen w-full bg-accent centralizar flex flex-col fixed inset-0 z-9999'>

      <Image src={"/preloader.gif"} height={150} width={440} alt={"Gif de carregamento"} />
      <h1 className='text-xl'>Carregando</h1>
    </div>
    </>
  );
}