import React from "react";
import Zoom from "./components/zoom/zoom";
import Info from "./components/info/info";
import ControlHeader from "./components/controlheader/controlHeader";
import MainCanvas from "./components/maincanvas/mainCanvas";
import Footer from "./components/footer";
import Settings from "./components/settings";
import WhatIsIt from "./components/what";
import Warning from "./components/warning";
import playerFactory from "./components/player";
import { loadPhoto } from "./components/load";

class App extends React.Component {
  constructor() {
    super();

    this.canvas = React.createRef();
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
    this.state.player.updateParams(data, x, y);
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
  drawCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = loadPhoto();
    img.onload = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      const pattern = ctx.createPattern(img, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      img.style.display = "none";
    };
  }

  componentDidMount() {
    sessionStorage.clear();
    const Player = playerFactory();
    this.setState({
      player: Player,
    });

    this.drawCanvas(this.canvas.current);

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
        Math.min(Math.max(0, x - 5), this.canvas.current.width - 10),
        Math.min(Math.max(0, y - 5), this.canvas.current.height - 10),
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
    window.addEventListener("resize", () => this.drawCanvas(this.canvas.current));

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
    this.state.player?.handleAbort();
  }

  render() {
    return (
      <main className="max-w-full overflow-x-hidden overscroll-contain">
        <Warning />
        <ControlHeader player={this.state.player} />
        <MainCanvas ref={this.canvas} />
        <Zoom ref={this.zoom} />
        <Info x={this.state.x} y={this.state.y} player={this.state.player} />
        <WhatIsIt />
        <Settings player={this.state.player} draw={this.drawCanvas} canvas={this.canvas.current} />
        <Footer />
      </main>
    );
  }
}

export default App;
