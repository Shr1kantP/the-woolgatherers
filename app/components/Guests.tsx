"use client";
import React, { useEffect, useRef } from "react";
import gsap from "../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Matter from "matter-js";

const logos = [
  { src: "/images/Guests/Ellipse 45.png", alt: "Guest logo 1", shape: "circle" },
  { src: "/images/Guests/Ellipse 47.png", alt: "Guest logo 2", shape: "circle" },
  { src: "/images/Guests/Ellipse 49.png", alt: "Guest logo 3", shape: "circle" },
  { src: "/images/Guests/icon_512x512.6461e0 1.png", alt: "Guest logo 4", shape: "circle" },
  { src: "/images/Guests/image 42.png", alt: "MTR", shape: "circle" },
  { src: "/images/Guests/image 43.png", alt: "Wingreens Farms", shape: "pill" },
  { src: "/images/Guests/image 44.png", alt: "Cureveda", shape: "pill" },
  { src: "/images/Guests/image 45.png", alt: "Vahdam", shape: "circle" },
  { src: "/images/Guests/image 46.png", alt: "Santhi Tex", shape: "circle" },
  { src: "/images/Guests/image 47.png", alt: "GAP Inc", shape: "circle" },
  { src: "/images/Guests/image 48.png", alt: "nua", shape: "circle" },
  { src: "/images/Guests/image 49.png", alt: "Peps Dream Makers", shape: "circle" },
  { src: "/images/Guests/Logo-3_1 1.png", alt: "SFS Homes", shape: "pill" },
  { src: "/images/Guests/Rectangle 40292.png", alt: "Guest logo 14", shape: "pill" },
  { src: "/images/Guests/Rectangle 40293.png", alt: "Guest logo 15", shape: "pill" },
];

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

type QuickSetterFn = (value: number) => void;

type LogoItem = {
  img: HTMLImageElement;
  body: Matter.Body;
  width: number;
  height: number;
  setX: QuickSetterFn;
  setY: QuickSetterFn;
  setRotation: QuickSetterFn;
};

export default function Guests() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const logoRefs = useRef<Array<HTMLImageElement | null>>(Array(logos.length).fill(null));
  const logoItemsRef = useRef<LogoItem[]>([]);
  const draggablesRef = useRef<any[]>([]);
  const frameRef = useRef<number | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const boundsRef = useRef<Matter.Body[]>([]);
  const resizeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !worldRef.current || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger, Draggable);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const engine = Matter.Engine.create({ enableSleeping: true });
    engine.gravity.y = 1;
    engine.world.gravity.y = 1;
    engineRef.current = engine;

    const runner = Matter.Runner.create();

    const createWalls = () => {
      if (!worldRef.current) return [];
      const rect = worldRef.current.getBoundingClientRect();
      const thickness = 40;
      return [
        Matter.Bodies.rectangle(-thickness / 2, rect.height / 2, thickness, rect.height, { isStatic: true }),
        Matter.Bodies.rectangle(rect.width + thickness / 2, rect.height / 2, thickness, rect.height, { isStatic: true }),
        Matter.Bodies.rectangle(rect.width / 2, rect.height + thickness / 2, rect.width, thickness, { isStatic: true }),
      ];
    };

    const setBounds = () => {
      if (!engineRef.current) return;
      boundsRef.current.forEach((body) => Matter.World.remove(engineRef.current!.world, body));
      boundsRef.current = createWalls();
      Matter.World.add(engineRef.current.world, boundsRef.current);
    };

    const syncFrame = () => {
      logoItemsRef.current.forEach((item) => {
        const x = item.body.position.x - item.width / 2;
        const y = item.body.position.y - item.height / 2;
        item.setX(x);
        item.setY(y);
        item.setRotation((item.body.angle * 180) / Math.PI);
      });
      frameRef.current = window.requestAnimationFrame(syncFrame);
    };

    const loadImages = () => {
      const promises = logoRefs.current.map((img) => {
        if (!img) return Promise.resolve();
        if (img.complete && img.naturalWidth) return Promise.resolve();
        return new Promise<void>((resolve) => {
          const onFinish = () => {
            img.removeEventListener("load", onFinish);
            img.removeEventListener("error", onFinish);
            resolve();
          };
          img.addEventListener("load", onFinish, { once: true });
          img.addEventListener("error", onFinish, { once: true });
        });
      });
      return Promise.all(promises);
    };

    const makeDraggable = (item: LogoItem) => {
      const drag = Draggable.create(item.img, {
        trigger: item.img,
        type: "x,y",
        bounds: sectionRef.current || undefined,
        cursor: "grab",
        onPress(this: any) {
          if (item.body) {
            Matter.Body.setStatic(item.body, true);
          }
          document.body.style.userSelect = "none";
          document.body.style.webkitUserSelect = "none";
          if (this.target) {
            this.target.style.cursor = "grabbing";
          }
        },
        onDrag(this: any) {
          if (item.body) {
            Matter.Body.setPosition(item.body, {
              x: this.x + item.width / 2,
              y: this.y + item.height / 2,
            });
          }
        },
        onRelease(this: any) {
          document.body.style.userSelect = "";
          document.body.style.webkitUserSelect = "";
          if (this.target) {
            this.target.style.cursor = "grab";
          }
          if (item.body) {
            Matter.Body.setStatic(item.body, false);
            const dragVelocity = typeof this.getVelocity === "function" ? this.getVelocity() : { x: 0, y: 0 };
            Matter.Body.setVelocity(item.body, {
              x: dragVelocity.x * 0.18,
              y: dragVelocity.y * 0.18,
            });
          }
        },
      });

      if (Array.isArray(drag) && drag[0]) {
        draggablesRef.current.push(drag[0]);
      }
    };

    const spawnLogo = (index: number, settlePosition: { x: number; y: number }) => {
      const img = logoRefs.current[index];
      if (!img || !engineRef.current || !worldRef.current) return;
      const worldRect = worldRef.current.getBoundingClientRect();
      const rect = img.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (!width || !height) return;

      const bodyOptions: Matter.IChamferableBodyDefinition = {
        restitution: 0.4,
        friction: 0.3,
        frictionAir: 0.01,
        density: 0.001,
      };

      const spawnX = prefersReduced
        ? settlePosition.x
        : Math.min(Math.max(settlePosition.x + randomBetween(-80, 80), width / 2), worldRect.width - width / 2);
      const spawnY = prefersReduced ? settlePosition.y : -randomBetween(140, 280);

      const body: Matter.Body = logos[index].shape === "circle"
        ? Matter.Bodies.circle(spawnX, spawnY, Math.max(width, height) / 2, bodyOptions)
        : Matter.Bodies.rectangle(spawnX, spawnY, width, height, {
          ...bodyOptions,
          chamfer: { radius: Math.min(width, height) / 2 },
        });

      Matter.Body.setAngle(body, randomBetween(-0.24, 0.24));
      Matter.Body.setAngularVelocity(body, randomBetween(-0.08, 0.08));
      Matter.World.add(engineRef.current.world, body);

      const item: LogoItem = {
        img,
        body,
        width,
        height,
        setX: gsap.quickSetter(img, "x", "px") as QuickSetterFn,
        setY: gsap.quickSetter(img, "y", "px") as QuickSetterFn,
        setRotation: gsap.quickSetter(img, "rotation", "deg") as QuickSetterFn,
      };

      img.style.position = "absolute";
      img.style.left = "0px";
      img.style.top = "0px";
      img.style.transformOrigin = "50% 50%";
      img.style.touchAction = "none";
      img.style.userSelect = "none";
      /* img.style.webkitUserDrag = "none"; */
      img.style.pointerEvents = "auto";
      img.style.cursor = "grab";

      gsap.set(img, { opacity: 0 });
      gsap.to(img, { opacity: 1, duration: 0.35, delay: index * 0.04 });

      item.setX(body.position.x - width / 2);
      item.setY(body.position.y - height / 2);
      item.setRotation((body.angle * 180) / Math.PI);

      logoItemsRef.current.push(item);
      makeDraggable(item);
    };

    const buildSettlePositions = () => {
      const worldRect = worldRef.current!.getBoundingClientRect();
      const columns = worldRect.width < 640 ? 3 : 5;
      const horizontalGap = Math.min(24, worldRect.width / (columns + 1));
      return logos.map((_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = horizontalGap + column * ((worldRect.width - horizontalGap * 2) / Math.max(columns - 1, 1)) + randomBetween(-12, 12);
        const y = worldRect.height - 80 - row * 75 + randomBetween(-8, 8);
        return { x, y };
      });
    };

    const startSimulation = async () => {
      await loadImages();
      if (!worldRef.current || !engineRef.current) return;

      const settlePositions = buildSettlePositions();

      for (let i = 0; i < logos.length; i += 1) {
        const target = settlePositions[i];
        const spawnY = prefersReduced ? target.y : -randomBetween(120, 260);
        spawnLogo(i, { x: target.x, y: spawnY });
        if (!prefersReduced) {
          await new Promise((resolve) => window.setTimeout(resolve, 80));
        }
      }

      if (!prefersReduced) {
        Matter.Runner.tick(runner, engineRef.current, 0);
      }
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(syncFrame);
      }
    };

    setBounds();
    Matter.Runner.run(runner, engine);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: startSimulation,
    });

    const handleResize = () => {
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = window.setTimeout(() => {
        setBounds();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) window.clearTimeout(resizeTimerRef.current);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      draggablesRef.current.forEach((instance) => instance && instance.kill && instance.kill());
      trigger.kill();
      ScrollTrigger.getAll().forEach((triggerItem) => triggerItem.kill());
      if (engineRef.current) {
        Matter.Runner.stop(runner);
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
      }
      logoItemsRef.current = [];
      boundsRef.current = [];
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[70vh] md:h-[90vh] bg-[#2E0A38] overflow-hidden select-none">
      <div className="relative z-0 mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 py-10 md:px-10 md:py-20">
        <h2 className="font-semibold uppercase tracking-[0.35em] text-white text-center" style={{ letterSpacing: "0.02em", fontFamily: '"Jersey 15", serif', fontSize: "98px", lineHeight: 1.05 }}>
          Selected Residents
        </h2>
      </div>

      <div ref={worldRef} className="absolute inset-0 z-10">
        {logos.map((logo, index) => (
          <img
            key={logo.src}
            ref={(element) => {
              logoRefs.current[index] = element;
            }}
            src={logo.src}
            alt={logo.alt}
            className="absolute top-0 left-0 h-auto select-none"
            style={{
              width: logo.shape === "pill" ? "clamp(88px, 16vw, 180px)" : "clamp(70px, 14vw, 140px)",
            }}
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            onPointerDown={(event) => event.preventDefault()}
          />
        ))}
      </div>
    </section>
  );
}
