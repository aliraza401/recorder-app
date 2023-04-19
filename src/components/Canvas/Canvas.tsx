import React, { useRef, useEffect } from "react";
import { CanvasProps } from "./Canvas.interface";

export const Canvas: React.FC<CanvasProps> = ({ stream }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!stream || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx: any = canvas.getContext("2d");

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    const primaryColor = "#3A8DFF";

    source.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI); //make circle
      ctx.fillStyle = "#0059e3";
      ctx.fill();

      const bars = dataArray.length;
      const radius = 50;

      for (let i = 0; i < bars; i++) {
        const barHeight = dataArray[i] / 3;
        const angle = (i / bars) * 2 * Math.PI;

        const startX = canvas.width / 2 + radius * Math.cos(angle);
        const startY = canvas.height / 2 + radius * Math.sin(angle);

        const endX = canvas.width / 2 + (radius + barHeight) * Math.cos(angle);
        const endY = canvas.height / 2 + (radius + barHeight) * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = primaryColor;
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [stream, canvasRef]);

  return <canvas ref={canvasRef} width="300" height="300" />;
};
