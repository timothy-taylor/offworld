import React from "react";
import Zoom from "./components/zoom/zoom";
import Info from "./components/info/info";
import ControlHeader from "./components/controlheader/controlHeader";
import MainCanvas from "./components/maincanvas/mainCanvas";
import Footer from "./components/footer/footer";
import Photo from "./assets/pexels-stein-egil-liland-3374210.jpeg";
import { Player, UpdateParams, HandleAbort } from "./components/player";

class App extends React.Component {
  constructor() {
    super();

    this.canvas = React.createRef();
    this.abort = React.createRef();
    this.zoom = React.createRef();
    this.state = {
      player: {},
      x: 0,
      y: 0,
    };
  }

  //
  //
  // handle mouse movement on the main canvas
  handleMove(e, ctx, zoom) {
    const x = e.layerX;
    const y = e.layerY;
    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    zoom(x, y);
    UpdateParams(data, x, y, this.state.player);
    this.setState({
      x: x,
      y: y,
    });
  }

  //
  //
  // draws image on the canvas
  // makes canvas the correct size
  // returns the img
  drawCanvas() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = Photo;
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      img.style.display = "none";
    };
    const width = document.documentElement.clientWidth;
    canvas.width = width - 15;
    canvas.height = img.height;
    return img;
  }

  componentDidMount() {
    this.setState({
      player: Player,
    });

    //
    // img is returned by drawCanvas for reuse
    const img = this.drawCanvas();

    //
    // zoomed in canvas logic gets passed to EventListener
    const zoom = (x, y) => {
      const canvas = this.zoom.current;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      ctx.drawImage(
        this.canvas.current,
        Math.min(Math.max(0, x - 5), img.width - 10),
        Math.min(Math.max(0, y - 5), img.height - 10),
        10,
        10,
        0,
        0,
        200,
        200
      );
    };

    //
    // redraws on resize
    window.addEventListener("resize", () => this.drawCanvas());

    //
    // main interactive functionality
    this.canvas.current.addEventListener("mousemove", (e) => {
      this.handleMove(e, this.canvas.current.getContext("2d"), zoom);
    });
  }

  componentWillUnmount() {
    //
    // remove previously added EventListeners
    const canvas = this.canvas.current;
    canvas.removeEventListener("mousemove", (e) => {
      this.handleMove(e, canvas.getContext("2d"));
    });
    window.removeEventListener("resize", () => this.drawCanvas());
    HandleAbort(this.state.player);
  }

  render() {
    return (
      <div className="bg-slate-900">
        <ControlHeader player={this.state.player} abort={this.abort} />
        <MainCanvas canvas={this.canvas} />
        <Zoom zoom={this.zoom} />
        <Info x={this.state.x} y={this.state.y} player={this.state.player} />
        <Footer />
      </div>
    );
  }
}

export default App;
