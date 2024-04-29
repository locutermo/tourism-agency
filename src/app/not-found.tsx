import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex  px-6 justify-center items-center flex-col gap-4 bg-[#a1b1ff]">
      <h2 className="text-xl font-bold md:text-2xl ld:text-4xl text-white">NO EXISTE</h2>
      <p className="text-white text-sm text-center">No hemos podido encontrar la página que estas buscando</p>
      <Link className="bg-[#3245a4] text-white p-2 rounded-md" href="/">Regresa al inicio</Link>
    </div>
  )
}