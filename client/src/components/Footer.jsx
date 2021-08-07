import React from 'react'

function Footer() {
    const date = new Date();
    return (
      <footer className="mt-4 bg-[#002349] lg:p-8">
        <div className="text-white flex justify-between p-4">
          <div className="space-x-2">
            <h1 className="text-sm font-semibold">COMPANY</h1>
            <div className="space-y-2 mt-2">
              <p className="text-xs">About Us</p>
              <p className="text-xs">Our Heritage</p>
              <p className="text-xs">Press</p>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-semibold">HELP</h1>
            <div className="space-y-2 mt-2">
              <p className="text-xs">FAQS</p>
              <p className="text-xs">Support</p>
              <p className="text-xs">Call Center</p>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-semibold">APPS</h1>
            <div className="space-y-2 mt-2">
              <p className="text-xs">SuCasa Mobile</p>
              <p className="text-xs">HouseHQ</p>
              <p className="text-xs">Apartmento</p>
            </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-xs text-white"> CopyRight &copy; {date.getFullYear()} DTGLOVER </p>
            </div>
      </footer>
    );
}

export default Footer
