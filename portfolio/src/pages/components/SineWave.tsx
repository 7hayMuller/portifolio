import { useEffect, useRef } from "react";

const SineWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bgwidth = canvas.width;
    const midy = canvas.height / 2;
    const amplitude = 100;
    const wavelength = 0.01;
    const frequency = 0.01;

    // return a random number within a range
    function getRandomNum(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    // map a number from 1 range to another
    function map(
      n: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number
    ): number {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    function radians(degrees: number): number {
      return (degrees * Math.PI) / 180;
    }

    interface Point {
      x: number;
      y: number;
    }

    function findPointOnCircle(
      originX: number,
      originY: number,
      radius: number,
      degrees: number
    ): Point {
      const angleRadians = radians(degrees);
      const newX = radius * Math.cos(angleRadians) + originX;
      const newY = radius * Math.sin(angleRadians) + originY;
      return { x: newX, y: newY };
    }

    class Circle {
      constructor(
        $x: number,
        $y: number,
        $radius: number,
        $ctx: CanvasRenderingContext2D
      ) {
        $ctx.beginPath();
        $ctx.arc($x, $y, $radius, radians(0), radians(360));
        $ctx.stroke();
      }
    }

    function drawCircles($amt: number, $ctx: CanvasRenderingContext2D) {
      for (let i = 0; i < $amt; i++) {
        new Circle(
          getRandomNum(0, window.innerWidth),
          getRandomNum(0, window.innerWidth),
          100,
          $ctx
        );
      }
    }

    class SineWave {
      constructor(
        $width: number,
        $ctx: CanvasRenderingContext2D,
        $xorigin: number,
        $yorigin: number,
        $amplitude: number,
        $wavelength: number,
        $color: string,
        $increment: number
      ) {
        $ctx.beginPath();
        $ctx.moveTo($xorigin, $yorigin);
        for (let s = 0; s < $width; s++) {
          $ctx.lineTo(
            s,
            $yorigin +
              Math.sin(s * $wavelength + $increment) *
                $amplitude *
                Math.sin($increment)
          );
        }
        $ctx.strokeStyle = $color;
        $ctx.stroke();
      }
    }

    const sines = [
      {
        color: "#be1d90",
        y: midy + getRandomNum(-30, 30),
        amplitude: amplitude + getRandomNum(-30, 30),
        wavelength: wavelength + getRandomNum(-0.01, 0.01),
      },
      {
        color: "#4b0487",
        y: midy + getRandomNum(-30, 30),
        amplitude: amplitude + getRandomNum(-30, 30),
        wavelength: wavelength + getRandomNum(-0.01, 0.01),
      },
      {
        color: "#42707d",
        y: midy + getRandomNum(-30, 30),
        amplitude: amplitude + getRandomNum(-30, 30),
        wavelength: wavelength + getRandomNum(-0.01, 0.01),
      },
    ];

    const drawSine = ($i: number) => {
      ctx.fillStyle = "rgba(37, 35, 35 , 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < sines.length; i++) {
        new SineWave(
          bgwidth,
          ctx,
          0,
          sines[i].y,
          sines[i].amplitude,
          sines[i].wavelength,
          sines[i].color,
          $i
        );
      }
    };

    let increment = frequency;
    const updateCanvas = () => {
      drawSine(increment);
      increment += getRandomNum(0, frequency * 3);
      setTimeout(() => {
        requestAnimationFrame(updateCanvas);
      }, 20);
    };
    requestAnimationFrame(updateCanvas);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="backgroundCanvas" />;
};

export default SineWave;
