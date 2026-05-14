import { about } from "@/data/about"

type Rule = {
  patterns: RegExp[]
  respond: () => string
}

const rules: Rule[] = [
  {
    patterns: [/^(hi|hello|hey|howdy|good\s*(morning|evening|afternoon|day))[!.,?\s]*$/i],
    respond: () =>
      `Hey! I'm Dodo, Sibaram's assistant. I can tell you about his skills, projects, education, or availability — just ask.`,
  },
  {
    patterns: [
      /who\s+is\s+sibaram/i,
      /tell\s+me\s+about\s+(him|sibaram)/i,
      /introduce\s+(yourself|him)/i,
      /^(what\s+about\s+you|about\s+you)/i,
    ],
    respond: () =>
      `${about.name} is a ${about.role} student at ${about.college.split(",")[0]}, Berhampur. He specialises in machine learning and computer vision — building real, deployable ML systems. He was a Smart India Hackathon 2024 National Finalist and has shipped 21+ ML projects.`,
  },
  {
    patterns: [/college|university|education|stud(y|ying|ies)|degree|b\.?\s*tech|pmec|berhampur|school/i],
    respond: () =>
      `Sibaram is pursuing ${about.role} at ${about.college}, Berhampur — expected to graduate in May/June 2027. He has been actively building ML and computer vision projects alongside his academic work.`,
  },
  {
    patterns: [/skill|tech(nolog|nical)?|stack|language|framework|tool|tensorflow|keras|python|numpy|pandas|scikit/i],
    respond: () =>
      `His core stack is Python, TensorFlow, Keras, MobileNetV2, and Transfer Learning, with strong experience in NumPy, Pandas, Scikit-learn, and Grad-CAM visualisation. On the web side he works with React, JavaScript, and Tailwind CSS. He runs local GPU training on an RTX 3050 Ti with DirectML.`,
  },
  {
    patterns: [/project|built|build|made|work(ed)?|portfolio|intel|flowers|harmonic/i],
    respond: () =>
      `He has 21+ shipped ML projects — highlights include an Intel Image Classification model with ~94% accuracy, a 102-class Flowers dataset classifier, a Harmonic Source Identification system for power grids, and PixelNest — his personal darkroom-aesthetic photo archive. He also completed GeeksforGeeks' ML Sprint: 21 projects in 21 days.`,
  },
  {
    patterns: [/sih|smart\s*india|hackathon|achievement|award|finalist|gfg|geeksforgeeks|accomplishment|competition/i],
    respond: () =>
      `Sibaram was a Smart India Hackathon 2024 National Finalist — one of India's most competitive national hackathons, run by the Ministry of Education. He also completed GeeksforGeeks' ML Sprint, shipping 21 ML projects in 21 days with Scikit-learn and Pandas.`,
  },
  {
    patterns: [/availabl|internship|hire|job|opportunit|recruit|open\s+to|work\s+with|collaborat/i],
    respond: () =>
      `${about.status} — open to both remote and on-site ML and computer vision roles across India. If you'd like to connect, head to the Contact section or email him at sibaram.work@gmail.com.`,
  },
  {
    patterns: [/contact|email|reach|github|linkedin|social|connect/i],
    respond: () =>
      `You can reach Sibaram via the Contact section on this page, or email him directly at sibaram.work@gmail.com. His GitHub is github.com/thesibaram and he's on LinkedIn as sibaram-eng.`,
  },
  {
    patterns: [/location|where|odisha|ganjam|india|sanakholi|from\s+where|based/i],
    respond: () =>
      `Sibaram is from Sanakholi, Ganjam, Odisha, and is currently based in Berhampur for his studies at PMEC. He's open to remote opportunities and on-site roles anywhere in India.`,
  },
  {
    patterns: [/gpu|rtx|3050|hardware|setup|directml|wsl|environment/i],
    respond: () =>
      `He built his own GPU-accelerated ML environment on Windows using DirectML and WSL2, running training jobs on an RTX 3050 Ti. He assembled the entire DirectML stack from scratch — no tutorials, just raw problem-solving.`,
  },
  {
    patterns: [/pixelnest|photo|photography|darkroom|film|camera/i],
    respond: () =>
      `PixelNest is Sibaram's personal photo archive with a darkroom-inspired aesthetic, live at thesibaram.github.io/pixelnest. It reflects his love for film photography and visual storytelling alongside engineering.`,
  },
  {
    patterns: [/grad.?cam|computer\s*vision|cnn|convolutional|visualis|transfer\s*learning/i],
    respond: () =>
      `Computer vision is Sibaram's primary focus. He uses Grad-CAM to visualise model decisions, works with CNN architectures like MobileNetV2, and debugs hard problems without giving up — like a TFOpLambda issue he's currently resolving on his Flowers102 Grad-CAM implementation.`,
  },
  {
    patterns: [/thank|thanks|appreciate|great|awesome|cool|nice|wonderful|helpful/i],
    respond: () =>
      `Glad I could help! Feel free to ask anything else about Sibaram, or head to the Contact section if you'd like to reach him directly.`,
  },
  {
    patterns: [/bye|goodbye|see\s+you|ciao|later|take\s+care/i],
    respond: () =>
      `Take care! If you ever want to know more about Sibaram's work, this chat is always here.`,
  },
  {
    patterns: [/what\s+can\s+you|help|what\s+do\s+you\s+know/i],
    respond: () =>
      `I can answer questions about Sibaram's background, education, technical skills, ML projects, achievements, availability for internships, and how to contact him. What would you like to know?`,
  },
]

const fallback = () =>
  `I don't have specific information about that. You can ask Sibaram directly via the Contact section or email him at sibaram.work@gmail.com — he's direct and responds promptly.`

export async function getLocalChatResponse(userMessage: string): Promise<string> {
  const text = userMessage.trim()

  await new Promise<void>(r => setTimeout(r, 420 + Math.random() * 480))

  for (const rule of rules) {
    for (const pattern of rule.patterns) {
      if (pattern.test(text)) {
        return rule.respond()
      }
    }
  }

  return fallback()
}
