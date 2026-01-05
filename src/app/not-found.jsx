import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (<>
    <div className='min-h-full   bg-secondary p-4 flex-col centralizar gap-8 lg:gap-0 text-background'>
        <div className='centralizar flex-col gap-5 mt-10'>
            <h2 className='text-6xl'>OOPS...</h2>
            <p>Essa página não existe, vamos voltar para a página inicial.</p>
            <Button>
            <Link href="/">Voltar para página inicial</Link>
            </Button>
        </div>
        <div className='h-[30rem] m-2 relative'> 
            <h1 className='text-[25rem] tracking-tight bg-[url(/textura-papel-titulo.png)] bg-clip-text text-transparent bg-ontain bg-center md:ml-6 md:h-[45rem]'>ERRO</h1>
            <h3 className='text-[10rem] text absolute z-10 text-accent md:left-100 md:top-70'>404</h3>
        </div>
    </div>
  </>
  );
}