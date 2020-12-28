import { useState } from "react";

function App() {

  let [value,setValue] = useState({
    title :" ",
    content :" "
  })

  return (
    <div>
      <h2> wellcome  </h2>
      <form action="" className="from-input">
        <input 
          type="text" name="title" placeholder="Enter a title"
          value={value.title}
          //  onChange={2}
        />
        
        <div className="form-input">
          <textarea name="body" value=""  col s="30" rows="10" placeholder="Enter a title" />
        </div>

        <button type="submit">submit</button>
      </form>

    </div>
  );
}

export default App;
