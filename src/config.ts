export interface Config {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  resume?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  about?: {
    title: string;
    description: string[];
    info?: {
      location?: string;
      education?: string;
      status?: string;
    };
  };
  skills?: {
    category: string;
    icon?: string;
    items: string[];
  }[];
  projects?: {
    title: string;
    description: string;
    image: string;
    github?: string;
    tags: string[];
  }[];
  experience?: {
    title: string;
    company: string;
    period: string;
    description: string[];
    tags: string[];
  }[];
  education?: {
    degree: string;
    institution: string;
    period: string;
    details?: string;
  }[];
}

export const config: Config = {
  name: "Kartheek Makkena",
  title: "AI/ML Engineer | LLM Specialist | Problem Solver",
  subtitle: "He builds intelligent AI solutions that leverage cutting-edge machine learning and large language models to solve real-world problems.",
  description: "Kartheek Makkena - AI/ML Engineer specializing in LLMs, RAG systems, and multi-modal AI",
  location: "Bangalore, India",
  email: "makkena.kartheek.21033@iitgoa.ac.in",
  phone: "+91 8919699339",
  resume: "/Portfolio/assets/resume.pdf",
  social: {
    github: "https://github.com/kartheekmakkena",
    linkedin: "https://www.linkedin.com/in/makkena-kartheek-624209257/",
  },
  about: {
    title: "Hello! I'm an AI/ML Engineer specializing in Large Language Models.",
    description: [
      "I'm passionate about building intelligent systems that leverage the power of artificial intelligence and machine learning. With expertise in LLMs, RAG systems, and multi-modal AI, I create solutions that bridge the gap between cutting-edge research and practical applications.",
      "My work spans across various AI domains including natural language processing, computer vision, and conversational AI. From fine-tuning models with QLoRA to building production-ready RAG chatbots, I'm constantly exploring new ways to harness the potential of AI to solve real-world problems."
    ],
    info: {
      location: "Bangalore, India",
      education: "BTech, Mathematics and Computing - IIT Goa (CGPA: 7.74/10)",
      status: "Software Engineer at Borqs Technologies"
    }
  },
  skills: [
    {
      category: "AI & Machine Learning",
      icon: "brain",
      items: [
        "Large Language Models",
        "RAG Systems",
        "Multi-modal AI",
        "Fine-tuning (QLoRA)",
        "OpenAI APIs",
        "Vector Databases",
        "NLP",
        "Computer Vision"
      ]
    },
    {
      category: "Programming & Frameworks",
      icon: "code",
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "TensorFlow",
        "PyTorch",
        "Jupyter Notebooks",
        "FastAPI",
        "Node.js"
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "tools",
      items: [
        "Git/GitHub",
        "Docker",
        "LangChain",
        "HuggingFace",
        "Transformers",
        "LSTM/RNN",
        "AWS",
        "Linux"
      ]
    }
  ],
  projects: [
    {
      title: "AI Voice Assistant",
      description: "An intelligent voice-powered AI assistant built with TypeScript. Features voice recognition, natural language processing, and real-time conversational AI capabilities.",
      image: "/assets/project1.jpg",
      github: "https://github.com/kartheekmakkena/ai_voic_-assistent-",
      tags: ["TypeScript", "AI/ML", "Voice Recognition", "NLP"]
    },
    {
      title: "RAG Chatbot",
      description: "A Retrieval-Augmented Generation chatbot inspired by NotebookLM. Combines document retrieval with LLM generation for accurate, context-aware responses from custom knowledge bases.",
      image: "/assets/project2.jpg",
      github: "https://github.com/kartheekmakkena/Rag_chatbot",
      tags: ["Python", "RAG", "LLM", "Vector DB"]
    },
    {
      title: "AI Video Summarizer",
      description: "Intelligent video analysis tool that extracts key frames and uses multi-modal LLMs to generate comprehensive summaries. Perfect for quickly understanding long-form video content.",
      image: "/assets/project3.jpg",
      github: "https://github.com/kartheekmakkena/video-summarizer-",
      tags: ["Python", "Multi-modal LLM", "Computer Vision", "OpenAI"]
    },
    {
      title: "AI-Powered PDF Generator",
      description: "Automated PDF creation tool leveraging Large Language Models. Intelligently formats and generates professional documents from natural language inputs and structured data.",
      image: "/assets/project4.jpg",
      github: "https://github.com/kartheekmakkena/make_ai_Pdf",
      tags: ["Python", "LLM", "PDF Generation", "Automation"]
    },
    {
      title: "Image Caption Generator",
      description: "Multi-modal fine-tuning project using QLoRA for efficient model adaptation. Generates accurate and descriptive captions for images using state-of-the-art vision-language models.",
      image: "/assets/project5.jpg",
      github: "https://github.com/kartheekmakkena/img2caption",
      tags: ["Python", "QLoRA", "Fine-tuning", "Vision AI"]
    },
    {
      title: "Stock Price Predictor",
      description: "Deep learning project using sequential models (LSTM/GRU) for stock market prediction. Explores time-series analysis and demonstrates understanding of recurrent neural networks.",
      image: "/assets/project6.jpg",
      github: "https://github.com/kartheekmakkena/stock-prediction-",
      tags: ["Python", "LSTM", "Time Series", "TensorFlow"]
    }
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Borqs Technologies",
      period: "July 2025 - Present",
      description: [
        "Assisted in implementing basic Android kernel security patches and SELinux rule updates",
        "Supported vulnerability testing and debugging of kernel modules to improve device security"
      ],
      tags: ["Android", "Kernel", "SELinux"]
    },
    {
      title: "AI/ML Research Intern",
      company: "Hanyaa Auto Technologies",
      period: "Jan 2025 - Jun 2025",
      description: [
        "Focused on LLMs and NLP: Implemented multiple open-source LLMs for animated story script generation, explored fine-tuned models on Hugging Face, and gained familiarity with NLP concepts, Transformer architecture, Multi-RAG, and LLM fine-tuning",
        "Optimized structured story generation: Designed prompt templates using Pydantic with LangChain, used LangChain's structured output with Gemini APIs to generate consistent scripts, enhancing input quality for video and audio generation models",
        "Developed a multi-stage script generation UI: Built a Streamlit-based interface with customizable duration options, narration/style selectors, scene summary editors, and a detailed shot-by-shot refinement tool"
      ],
      tags: ["LLM", "NLP", "LangChain", "Streamlit"]
    }
  ],
  education: [
    {
      degree: "BTech, Mathematics and Computing",
      institution: "Indian Institute of Technology Goa",
      period: "2021 - 2025",
      details: "CGPA: 7.74/10"
    },
    {
      degree: "Class 12, APBIE",
      institution: "Sri Chaitanya Junior College, Gudavalli, Vijayawada",
      period: "2019 - 2021",
      details: "Aggregate: 95.4%"
    }
  ]
};

