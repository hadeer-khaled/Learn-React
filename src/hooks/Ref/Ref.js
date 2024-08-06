import { useRef } from "react";

import "App.css" ;
function Ref() {
  const items = [
    { title: 'Title 1', description: 'This is the description for item 1.' },
    { title: 'Title 2', description: 'This is the description for item 2.' },
    { title: 'Title 3', description: 'This is the description for item 3.' },
    { title: 'Title 4', description: 'This is the description for item 4.' },
    { title: 'Title 5', description: 'This is the description for item 5.' },
  ];

  const lastDiv = useRef(null);

  const MoveToButton = () => {
      console.log(lastDiv.current);
      lastDiv.current.scrollIntoView({
        behavior:"smooth"
      }); 
    
  };

  return (
    <>
      <button onClick={MoveToButton}>Move to bottom</button>
      <div>
        {items.map((item, idx) => (
          <div className="centered-box" key={idx} ref={idx === items.length - 1 ? lastDiv : null} >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ref;
