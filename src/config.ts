export const siteConfig = {
  name: "Simon Ho",
  title: "Software Developer",
  description: "Portfolio website of Simon Ho",
  accentColor: "#1d4ed8",
  social: {
    email: "simon.dk.ho@gmail.com",
    linkedin: "https://linkedin.com/in/simondkho",
    twitter: "https://x.com/DK_HOE",
    github: "https://github.com/halfguru",
  },
  aboutMe:
    "I'm a software developer with a strong background in C++ and systems programming, working across avionics, fintech, embedded Linux, and ML-driven logistics. I've built and modernized real-time mission systems for helicopters, accessibility devices, surgical planning tools, and wireless diagnostics platforms, and now work on orchestration and platform tooling at Morgan Stanley. I enjoy taking large, complex codebases and infrastructure and making them faster, safer, and easier to work with—whether that means refactoring legacy C++, designing clean APIs and CLIs, or wiring together data and services so teams can move with confidence.",
  skills: [// Core Programming
    "C++",
    "C",
    "Python",
    "Golang",
    "Rust",

    // Systems & Real-Time
    "Multithreading",
    "Low-Latency Systems",
    "Real-Time Processing",
    "Embedded Linux",
    "OpenGL",

    // Tooling & Build Systems
    "CMake / Ninja",
    "Clang-Tidy / Static Analysis",
    "VS2022 / MSVC Toolchain",
    "GitLab CI / Jenkins",

    // Cloud & Infra
    "Docker",
    "Kubernetes",
    "Google Cloud Platform",
    "REST APIs",
    "Distributed Systems",

    // AI / Data
    "Computer Vision (OpenCV, OCR, YOLO)",
    "ML Data Pipelines",
    "Data Ingestion & Processing",

    // Protocols & Low-Level I/O
    "Bluetooth (BlueZ, HID)",
    "USB HID",
    "Networking / TCP/IP",

    // Misc
    "Robotics / Simulation",
    "CLI Tooling"],
  projects: [
    {
      name: "halfguru (GitHub Profile Banner)",
      description:
        "A Rust-powered dynamic SVG generator for my GitHub profile README. Inspired by neofetch, it renders system-style stats, icons, and layout entirely in Rust with zero frontend dependencies. The project focuses on clean rendering logic, efficient data formatting, and producing a polished SVG that updates on each run.",
      link: "https://github.com/halfguru/halfguru",
      skills: ["Rust", "SVG"],
    },
  ],
  experience: [
    {
      company: "Morgan Stanley",
      title: "Software Developer",
      dateRange: "August 2025 - Present",
      bullets: [
        "Modernizing the orchestration platform to support hybrid deployments on Treadmill and Morgan Stanley Kubernetes (MKS), enabling unified monitoring and control of distributed applications",
        "Building a REST API + Python Typer CLI to validate cross-platform operations. This POC will integrate into a Windows GUI to modernize into a platform-agnostic monitoring interface."
      ],
    },
    {
      company: "Actalent",
      title: "Software Developer",
      dateRange: "January 2023 - August 2025",
      bullets: [
        "Developed a high-performance, multithreaded Mission Management System in modern C++ for the CH-146 Griffon helicopter, improving real-time determinism, fault tolerance, and overall system reliability.",
        "Modernized a large legacy C++98 codebase to C++23 and automated system validation using Python and Robot Framework, significantly improving maintainability and reducing testing effort.",
      ],
    },
    {
      company: "Faimdata",
      title: "Software Developer",
      dateRange: "May 2022 - January 2023",
      bullets: [
        "Designed a smart logistics optimization system for Port of Montreal RTG cranes, integrating NVIDIA Jetson, GPS, and industrial cameras to automatically extract container IDs using CV/ML (OpenCV, OCR, YOLO).",
        "Built a Golang microservice in Docker to automate image capture, preprocessing, and cloud upload to Google Cloud Storage for continuous ML model retraining.",
      ],
    },
    {
      company: "Alten",
      title: "Software Development Consultant",
      dateRange: "December 2020 - May 2022",
      bullets: [
        "(CMC Electronics) Developed a real-time avionics simulation environment using C++ and Python, enabling pilot training and system prototyping for the Part-Task Trainer.",
        "(Zimmer-Biomet) Implemented a C++/Qt surgical planning tool supporting 3D anatomical reconstruction, implant simulation, and generation of patient-specific surgical guides.",
      ],
    },
    {
      company: "Onepoint Inc.",
      title: "Software Development Consultant",
      dateRange: "May 2019 - December 2020",
      bullets: [
        "Engineered embedded Linux C++ software for next-gen accessibility devices, including a haptic braille display and e-book reader, improving usability for visually impaired users.",
        "Implemented advanced connectivity features using BlueZ and USB HID gadget drivers, including multi-host Bluetooth HID switching.",
      ],
    },
    {
      company: "Octasic",
      title: "Wireless Software Integration Developer",
      dateRange: "May 2018 - May 2019",
      bullets: [
        "Built embedded diagnostics tools (Python/C/C++) for testing GSM/UMTS/LTE baseband hardware used in field deployments.",
        "Designed a RESTful management server (backend POCO C++, frontend JS) on Beaglebone Black, enabling TCP-based RF hardware control via a web interface.",
      ],
    },
  ],
  education: [
    {
      school: "McGill University",
      degree: "Master of Electrical Engineering",
      dateRange: "September 2016 - December 2019",
      achievements: [
      ],
    },
    {
      school: "McGill University",
      degree: "Bachelor of Electrical Engineering",
      dateRange: "September 2011 - September 2015",
      achievements: [
      ],
    },
  ],
};
