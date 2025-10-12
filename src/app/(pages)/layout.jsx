    'use client';


export default function MainLayout({ children }) {

  return (
  
      <div className="min-h-screen bg-black text-white flex flex-col">
               
                <div className="px-3 sm:px-4 md:px-6 py-6">
                  {children}
                </div>
              
      </div>
    
  );
}
