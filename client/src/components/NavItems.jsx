import React from 'react'

function NavItems({hideNav}) {
    return (
      <div className={hideNav ? "bg-[#002349] p-4" : "hidden  "}>
        <div className="text-white text-sm border-b-2">
          <ul className="space-y-2">
            <li>
                PROPERTIES
            </li>
            <li>
              AGENTS
            </li>
            <li>
              SELL WITH US
            </li>
          </ul>
        </div>
      </div>
    );
}

export default NavItems
