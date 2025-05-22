import { useGSAP } from "@gsap/react";
import { FidgetSpinner, DNA } from "react-loader-spinner";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

// gsap.registerPlugin(Draggable, InertiaPlugin);
gsap.registerPlugin(SplitText);

export default function Loading() {
  // const textRef = useRef([]);
  // const [done, setDone] = useState(false);

  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     onComplete: () => {
  //       setDone(true);
  //       if (onFinish) onFinish();
  //     }
  //   });

  //   textRef.current.forEach((el, i) => {
  //     timeline.to(el, {
  //       opacity: 1,
  //       duration: 0.1,
  //       ease: "power2.inOut",
  //     }, i * 0.1);
  //   });

  //   return () => timeline.kill();
  // }, [onFinish]);

  // const skipTyping = () => {
  //   gsap.globalTimeline.clear();
  //   textRef.current.forEach(el => (el.style.opacity = 1));
  //   setDone(true);
  //   if (onFinish) onFinish();
  // };

  useGSAP(() => {
    const loading = new SplitText(".loading", {
      type: "words,chars",
    });

    //   gsap.from(loading.chars,{
    //     stagger:.1,
    //     duration:.6,
    //     scale:.1,
    //     opacity:0,
    //     repeat:-1,
    //     yoyo:true
    //   })
    gsap.from(loading.chars, {
      stagger: 0.1,
      duration: 0.6,
      // scale: 0.1,
      y: 50,
      opacity: 0,
      repeat: -1,
      repeatDelay: 0.2, // optional: delay before restarting
      ease: "power1.out",
    });
  });

  return (
    <div className="w-full bg-black h-screen fixed top-0 left-0 flex justify-center items-center flex-col">
      {/* <FidgetSpinner
      visible={true}
      height="140"
      width="140"
      ariaLabel="fidget-spinner-loading"
      wrapperStyle={{}}
      wrapperClass="fidget-spinner-wrapper"
    /> */}
      <DNA
        visible={true}
        height="240"
        width="240"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <h1 className="text-[40px] loading text-yellow-500">Loading</h1>
    </div>
    //   <div
    //     className="w-screen h-screen bg-gray-900 text-white flex items-center justify-center cursor-pointer"
    //     onClick={skipTyping}
    //   >
    //     <h1 className="text-5xl font-bold flex gap-2">
    //       {"Gaurav".split("").map((char, i) => (
    //         <span
    //           key={i}
    //           ref={(el) => (textRef.current[i] = el)}
    //           className="opacity-0"
    //         >
    //           {char}
    //         </span>
    //       ))}
    //       <span className="animate-pulse text-blue-400 ml-1">|</span>
    //     </h1>
    //   </div>
  );
}
