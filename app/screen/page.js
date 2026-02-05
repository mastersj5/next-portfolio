// This is a dedicated page just for the 3D laptop screen
export default function LaptopPage() {
  return (
    <div className="w-full h-screen bg-slate-900 text-green-400 p-8 font-mono overflow-y-auto selection:bg-green-900">
      <h1 className="text-4xl font-bold mb-4 animate-pulse">{'>'} SYSTEM READY</h1>
      <p className="mb-4 text-xl">User: MastersJ5</p>
      
      <div className="border-t border-green-800 my-4" />
      
      <div className="space-y-2">
        <p>{'>'} Loading skills...</p>
        <p className="pl-4 text-white">★ React Three Fiber</p>
        <p className="pl-4 text-white">★ Next.js</p>
        <p className="pl-4 text-white">★ Rapier Physics</p>
        
        <br />
        <p>{'>'} Accessing GitHub Data...</p>
        <a 
            href="https://github.com/mastersj5" 
            target="_blank" 
            className="inline-block mt-2 px-4 py-2 border border-green-500 hover:bg-green-500 hover:text-black transition-colors"
        >
            [ OPEN EXTERNAL LINK ]
        </a>
      </div>
    </div>
  );
}