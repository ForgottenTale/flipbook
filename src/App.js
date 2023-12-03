
import HTMLFlipBook from 'react-pageflip';
import imgsrc from "./pictures/Scribld (6)-compressed-01.png"
import imgsrc2 from "./pictures/Scribld (6)-compressed-02.png"
import imgsrc3 from "./pictures/Scribld (6)-compressed-03.png"
import imgsrc4 from "./pictures/Scribld (6)-compressed-04.png"
import imgsrc5 from "./pictures/Scribld (6)-compressed-05.png"
import imgsrc6 from "./pictures/Scribld (6)-compressed-06.png"
import imgsrc7 from "./pictures/Scribld (6)-compressed-07.png"
import imgsrc8 from "./pictures/Scribld (6)-compressed-08.png"
import imgsrc9 from "./pictures/Scribld (6)-compressed-09.png"
import imgsrc10 from "./pictures/Scribld (6)-compressed-10.png"
import imgsrc11 from "./pictures/Scribld (6)-compressed-11.png"
import imgsrc12 from "./pictures/Scribld (6)-compressed-12.png"
import imgsrc13 from "./pictures/Scribld (6)-compressed-13.png"
import imgsrc14 from "./pictures/Scribld (6)-compressed-14.png"
import imgsrc15 from "./pictures/Scribld (6)-compressed-15.png"
import imgsrc16 from "./pictures/Scribld (6)-compressed-16.png"
import imgsrc17 from "./pictures/Scribld (6)-compressed-17.png"
import imgsrc18 from "./pictures/Scribld (6)-compressed-18.png"
import imgsrc19 from "./pictures/Scribld (6)-compressed-19.png"
import imgsrc20 from "./pictures/Scribld (6)-compressed-20.png"
import imgsrc21 from "./pictures/Scribld (6)-compressed-21.png"
import imgsrc22 from "./pictures/Scribld (6)-compressed-22.png"
import imgsrc23 from "./pictures/Scribld (6)-compressed-23.png"
import imgsrc24 from "./pictures/Scribld (6)-compressed-24.png"
import imgsrc25 from "./pictures/Scribld (6)-compressed-25.png"
import imgsrc26 from "./pictures/Scribld (6)-compressed-26.png"
import imgsrc27 from "./pictures/Scribld (6)-compressed-27.png"
import imgsrc28 from "./pictures/Scribld (6)-compressed-28.png"
import imgsrc29 from "./pictures/Scribld (6)-compressed-29.png"
import imgsrc30 from "./pictures/Scribld (6)-compressed-30.png"
import imgsrc31 from "./pictures/Scribld (6)-compressed-31.png"
import imgsrc32 from "./pictures/Scribld (6)-compressed-32.png"
import imgsrc33 from "./pictures/Scribld (6)-compressed-33.png"
import imgsrc34 from "./pictures/Scribld (6)-compressed-34.png"
import imgsrc35 from "./pictures/Scribld (6)-compressed-35.png"
import imgsrc36 from "./pictures/Scribld (6)-compressed-36.png"
import imgsrc37 from "./pictures/Scribld (6)-compressed-37.png"
import imgsrc38 from "./pictures/Scribld (6)-compressed-38.png"
import imgsrc39 from "./pictures/Scribld (6)-compressed-39.png"
import imgsrc40 from "./pictures/Scribld (6)-compressed-40.png"
import imgsrc41 from "./pictures/Scribld (6)-compressed-41.png"
import imgsrc42 from "./pictures/Scribld (6)-compressed-42.png"
import imgsrc43 from "./pictures/Scribld (6)-compressed-43.png"
import imgsrc44 from "./pictures/Scribld (6)-compressed-44.png"
import imgsrc45 from "./pictures/Scribld (6)-compressed-45.png"
import imgsrc46 from "./pictures/Scribld (6)-compressed-46.png"
import imgsrc47 from "./pictures/Scribld (6)-compressed-47.png"
import imgsrc48 from "./pictures/Scribld (6)-compressed-48.png"
import imgsrc49 from "./pictures/Scribld (6)-compressed-49.png"
import imgsrc50 from "./pictures/Scribld (6)-compressed-50.png"
import imgsrc51 from "./pictures/Scribld (6)-compressed-51.png"
import imgsrc52 from "./pictures/Scribld (6)-compressed-52.png"
import imgsrc53 from "./pictures/Scribld (6)-compressed-53.png"
import imgsrc54 from "./pictures/Scribld (6)-compressed-54.png"
import imgsrc55 from "./pictures/Scribld (6)-compressed-55.png"
import imgsrc56 from "./pictures/Scribld (6)-compressed-56.png"
import imgsrc57 from "./pictures/Scribld (6)-compressed-57.png"
import imgsrc58 from "./pictures/Scribld (6)-compressed-58.png"
import imgsrc59 from "./pictures/Scribld (6)-compressed-59.png"
import imgsrc60 from "./pictures/Scribld (6)-compressed-60.png"
import imgsrc61 from "./pictures/Scribld (6)-compressed-61.png"
import imgsrc62 from "./pictures/Scribld (6)-compressed-62.png"


import { useEffect, useState } from 'react';
import "./App.css"
function App() {

  const [state, setState] = useState([]);
  // useEffect(() => {
  //   var data = [];
  //   for (var i = 0; i < 62; i++) {
  //     if (i < 10)
  //       data[i] = "./pictures/Scribld (6)-compressed-0" + i + ".png";
  //     else
  //       data[i] =  "./pictures/Scribld (6)-compressed-" + i + ".png";
  //   }
  //   setState

  // }, []);
  var width = 500, height = 700;
  return (
    <div className="App" >
      <div>
      <div></div>
        <HTMLFlipBook width={width} height={height} >
          <div className="demoPage"><img width={width} height={height} src={imgsrc} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc2} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc3} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc4} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc5} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc6} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc7} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc8} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc9} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc10} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc11} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc12} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc13} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc14} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc15} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc16} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc17} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc18} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc19} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc20} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc21} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc22} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc23} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc24} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc25} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc26} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc27} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc28} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc29} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc30} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc31} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc32} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc33} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc34} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc35} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc36} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc37} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc38} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc39} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc40} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc41} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc42} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc43} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc44} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc45} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc46} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc47} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc48} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc49} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc50} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc51} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc52} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc53} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc54} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc55} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc56} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc57} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc58} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc59} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc60} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc61} /></div>
          <div className="demoPage"><img width={width} height={height} src={imgsrc62} /></div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;
