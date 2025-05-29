'use client';

export default function SubClient() {
  console.log('SubClientComponent');
  return <div>SubClient</div>;
}

//                    SERVER COMPONENT           VS.  CLIENT COMPONENT
// use case           Fetch directly from DB          Interactivity
// State, Hook        Cannot                          Yes
// Import             SC and CC                       Only CC
// Props              Serialize if Pass to CC         Normal
// Render             SC and CC                       CC and SC (as children)
// re-render          url changed                     state change
// Data Fetch         can (directly from DB or api)   can by swr or react query using api
// asynchrnous        yes                             no
// directive          no. Default                     'use client'
