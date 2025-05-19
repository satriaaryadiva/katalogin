import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { CardProps } from "@/data"


export default function ScrollTriggered() {
    return (
        <div style={container}>
           {features.map(([emoji, head,title, hueA, hueB], i) => (
  <Card i={i} emoji={emoji} head={head} title={title} hueA={hueA} hueB={hueB} key={title} />
))}

        </div>
    )
}




function Card({ emoji, title,head, hueA, hueB, i }: CardProps) {
  const background = `  linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      className={`card-container-${i} `}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card    border-20 border-solid border-indigo-600 ">
        <div className="flex flex-col items-center  justify-center">
          <h1 className="text-xl mb-2">{emoji} {head}</h1>
          

          <div className="text-xl font-semibold text-center">{title}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}


const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const features: [string, string, string, number, number][] = [
  [" 🎨","Katalog Digital", "Mudah membuat, mengatur, dan membagikan katalog produk UMKM kamu.", 340, 10],
  ["🎨","cob2", "Desain Profesional", 200, 230],
  ["🚀","cob23", "Bagikan Instan", 40, 70],
]
