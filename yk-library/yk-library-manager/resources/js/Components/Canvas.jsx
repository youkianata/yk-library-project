import React, { useEffect, useRef } from 'react';

const CircleAnimation = () => {
  const canvasRef = useRef(null);
  const maxRadius = 4;
  const minRadius = 1;
  let circleArray = [];
  let mouse = {
    x: undefined,
    y: undefined
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      const container = document.querySelector('.circle-animation-container');
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      init();
    };

    const Circle = function (x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = "#fff";

      this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
      };

      this.update = function () {
        this.draw();
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y -= this.dy;
      };
    };

    const init = () => {
      circleArray = [];
      const numCircles = 60;
      for (let i = 0; i < numCircles; i++) {
        const r = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
        const x = Math.random() * (canvas.width - r * 2) + r;
        const y = Math.random() * (canvas.height - r * 2) + r;
        const dx = (Math.random() - 0.5) * 1;
        const dy = (Math.random() - 0.5) * 1;
        circleArray.push(new Circle(x, y, dx, dy, r));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    };

    const container = document.querySelector('.circle-animation-container');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <canvas ref={canvasRef} className='z-25 absolute' />

  );
};

export default CircleAnimation;
