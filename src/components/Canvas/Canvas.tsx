import React, { useRef, useEffect } from "react";
import { CanvasProps } from "./Canvas.interface";
import { CANVAS_PROPERTIES } from "../../utils/constants";
import CanBgImg from "./../../assets/canvasBg.jpeg";
import { CircleImg } from "./Canvas.styled";

export const Canvas: React.FC<CanvasProps> = ({ stream, isPaused }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    if (!stream || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx: any = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    source.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);
      if (isPausedRef.current) {
        requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
      ctx.fillStyle = CANVAS_PROPERTIES.SECONDARY_COLOR;
      ctx.fill();

      const totalBars = CANVAS_PROPERTIES.TOTAL_BARS;
      const bars = dataArray.length;
      const barsToSkip = Math.floor(bars / totalBars);
      const radius = CANVAS_PROPERTIES.RADIUS;

      const avgBarHeight =
        dataArray.reduce((sum, height) => sum + height, 0) / bars;

      for (let i = 0; i < bars; i += barsToSkip) {
        const barHeight = avgBarHeight * 0.85;
        const angle = (i / bars) * 2 * Math.PI;

        const startX = canvas.width / 2 + radius * Math.cos(angle);
        const startY = canvas.height / 2 + radius * Math.sin(angle);

        const endX = canvas.width / 2 + (radius + barHeight) * Math.cos(angle);
        const endY = canvas.height / 2 + (radius + barHeight) * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = CANVAS_PROPERTIES.LINE_WIDTH;
        ctx.strokeStyle = CANVAS_PROPERTIES.PRIMARY_COLOR;
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [stream, canvasRef, isPaused]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
      <CircleImg src={CanBgImg} alt="Center Image" />
    </div>
  );
};
