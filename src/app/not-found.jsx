import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (<>
    <div className='md:min-h-screen min-h-full lg:min-h-full bg-secondary p-4 flex-col centralizar gap-8 lg:gap-0 text-background'>
        <div className='centralizar flex-col gap-5 mt-10'>
            <h2 className='text-6xl'>OOPS...</h2>
            <p className='text-center'>Essa página não existe, vamos voltar para a página inicial.</p>
            <Button>
            <Link href="/">Voltar para página inicial</Link>
            </Button>
        </div>
        <div className='h-[20rem] md:h-[30rem] m-2 relative'> 
            <h1 className='text-[10rem] md:text-[25rem] tracking-tight bg-[url(/textura-papel-titulo.png)] bg-clip-text text-transparent bg-ontain bg-center md:ml-6 md:h-[45rem]'>ERRO</h1>
            <h3 className='text-[4rem] md:text-[10rem] absolute z-10 text-accent left-35 md:left-80 lg:left-100 top-30 md:top-70'>404</h3>
        </div>
    </div>
  </>
  );
}