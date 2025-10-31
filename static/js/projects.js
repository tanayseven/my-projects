// Sample project data
const projectsData = {
    currentProjects: [
        {
            title: "AI-Powered Task Manager",
            date: "Oct 2025",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A task management application that uses AI to prioritize tasks, suggest optimal work times, and provide productivity insights based on user patterns.",
            technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
            demoLink: "https://ai-task-manager.example.com",
            githubLink: "https://github.com/tanaypd/ai-task-manager"
        },
        {
            title: "Sustainable Living App",
            date: "Sep 2025",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "An application that helps users track their carbon footprint, suggests eco-friendly alternatives for daily activities, and connects them with local sustainability initiatives.",
            technologies: ["Flutter", "Firebase", "Google Maps API", "Chart.js"],
            demoLink: "https://eco-living.example.com",
            githubLink: "https://github.com/tanaypd/sustainable-living"
        },
        {
            title: "Virtual Reality Fitness",
            date: "Aug 2025",
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A VR fitness platform that gamifies workout routines, offers immersive training environments, and provides real-time feedback on form and performance.",
            technologies: ["Unity", "C#", "Oculus SDK", "WebXR"],
            demoLink: "https://vr-fitness.example.com",
            githubLink: "https://github.com/tanaypd/vr-fitness"
        },
        {
            title: "Blockchain Voting System",
            date: "Jul 2025",
            image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A secure, transparent voting system built on blockchain technology, ensuring tamper-proof elections and real-time result verification.",
            technologies: ["Ethereum", "Solidity", "Web3.js", "React"],
            demoLink: "https://blockchain-vote.example.com",
            githubLink: "https://github.com/tanaypd/blockchain-voting"
        },
        {
            title: "Augmented Reality Navigation",
            date: "Jun 2025",
            image: "https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "An AR navigation app that overlays directional guidance on the real world, highlighting points of interest and providing contextual information about surroundings.",
            technologies: ["ARKit", "ARCore", "Swift", "Kotlin"],
            demoLink: "https://ar-nav.example.com",
            githubLink: "https://github.com/tanaypd/ar-navigation"
        },
        {
            title: "Smart Home Energy Monitor",
            date: "May 2025",
            image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A system that monitors household energy consumption, identifies energy-hungry appliances, and suggests optimization strategies to reduce electricity bills.",
            technologies: ["Raspberry Pi", "Python", "MQTT", "InfluxDB", "Grafana"],
            demoLink: "https://energy-monitor.example.com",
            githubLink: "https://github.com/tanaypd/energy-monitor"
        },
        {
            title: "Personalized Learning Platform",
            date: "Apr 2025",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "An adaptive learning platform that tailors educational content based on individual learning styles, progress, and goals, with interactive exercises and real-time feedback.",
            technologies: ["Vue.js", "Express", "PostgreSQL", "Machine Learning"],
            demoLink: "https://adaptive-learning.example.com",
            githubLink: "https://github.com/tanaypd/personalized-learning"
        },
        {
            title: "Quantum Computing Simulator",
            date: "Mar 2025",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A web-based simulator for quantum computing algorithms, allowing users to experiment with quantum gates, circuits, and algorithms without specialized hardware.",
            technologies: ["TypeScript", "WebAssembly", "Three.js", "Python"],
            demoLink: "https://quantum-sim.example.com",
            githubLink: "https://github.com/tanaypd/quantum-simulator"
        },
        {
            title: "Decentralized Social Network",
            date: "Feb 2025",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A social media platform built on decentralized protocols, giving users full control over their data and content without centralized authority or data harvesting.",
            technologies: ["IPFS", "Ethereum", "React", "GraphQL"],
            demoLink: "https://decentralized-social.example.com",
            githubLink: "https://github.com/tanaypd/decentralized-social"
        },
        {
            title: "Autonomous Drone Delivery",
            date: "Jan 2025",
            image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A system for managing autonomous drone deliveries, including route optimization, obstacle avoidance, and real-time tracking for urban package delivery.",
            technologies: ["ROS", "Python", "Computer Vision", "React Native"],
            demoLink: "https://drone-delivery.example.com",
            githubLink: "https://github.com/tanaypd/drone-delivery"
        }
    ],
    archivedProjects: [
        {
            title: "Neural Network Visualizer",
            date: "Dec 2024",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "An interactive tool for visualizing neural network architectures, training processes, and decision boundaries to help understand deep learning concepts.",
            technologies: ["D3.js", "TensorFlow.js", "React", "Flask"],
            demoLink: "https://nn-visualizer.example.com",
            githubLink: "https://github.com/tanaypd/nn-visualizer"
        },
        {
            title: "Cryptocurrency Portfolio Tracker",
            date: "Nov 2024",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A comprehensive dashboard for tracking cryptocurrency investments, with real-time price updates, portfolio analytics, and tax reporting features.",
            technologies: ["Angular", "Node.js", "CoinGecko API", "MongoDB"],
            demoLink: "https://crypto-tracker.example.com",
            githubLink: "https://github.com/tanaypd/crypto-tracker"
        },
        {
            title: "Remote Team Collaboration Tool",
            date: "Oct 2024",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A platform designed for remote teams to collaborate effectively, featuring virtual whiteboards, asynchronous video messaging, and project management tools.",
            technologies: ["React", "Socket.io", "WebRTC", "Express"],
            demoLink: "https://remote-collab.example.com",
            githubLink: "https://github.com/tanaypd/remote-collaboration"
        },
        {
            title: "Natural Language Processing API",
            date: "Sep 2024",
            image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A comprehensive API for natural language processing tasks, including sentiment analysis, entity recognition, language detection, and text summarization.",
            technologies: ["Python", "spaCy", "FastAPI", "Docker"],
            demoLink: "https://nlp-api.example.com",
            githubLink: "https://github.com/tanaypd/nlp-api"
        },
        {
            title: "3D Printing Marketplace",
            date: "Aug 2024",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "An online marketplace connecting 3D printing enthusiasts with designers and customers, facilitating the buying, selling, and printing of 3D models.",
            technologies: ["Next.js", "Stripe", "Three.js", "PostgreSQL"],
            demoLink: "https://3d-marketplace.example.com",
            githubLink: "https://github.com/tanaypd/3d-marketplace"
        },
        {
            title: "Gesture-Controlled Music Player",
            date: "Jul 2024",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A music player that can be controlled through hand gestures captured by a webcam, allowing for touchless interaction with music playback.",
            technologies: ["MediaPipe", "JavaScript", "Web Audio API", "TensorFlow.js"],
            demoLink: "https://gesture-music.example.com",
            githubLink: "https://github.com/tanaypd/gesture-music"
        },
        {
            title: "Automated Content Moderator",
            date: "Jun 2024",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "An AI-powered content moderation system that automatically detects and filters inappropriate text, images, and videos for online platforms.",
            technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
            demoLink: "https://content-moderator.example.com",
            githubLink: "https://github.com/tanaypd/content-moderator"
        },
        {
            title: "Procedural Landscape Generator",
            date: "May 2024",
            image: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A tool that generates realistic 3D landscapes procedurally, with customizable terrain, vegetation, water bodies, and weather conditions.",
            technologies: ["Unity", "C#", "Shader Graph", "Compute Shaders"],
            demoLink: "https://landscape-gen.example.com",
            githubLink: "https://github.com/tanaypd/landscape-generator"
        },
        {
            title: "Peer-to-Peer File Sharing",
            date: "Apr 2024",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A decentralized file sharing application that allows direct peer-to-peer transfers without intermediary servers, with end-to-end encryption.",
            technologies: ["WebRTC", "JavaScript", "Electron", "libp2p"],
            demoLink: "https://p2p-share.example.com",
            githubLink: "https://github.com/tanaypd/p2p-file-sharing"
        },
        {
            title: "Accessibility Checker Extension",
            date: "Mar 2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            description: "A browser extension that analyzes web pages for accessibility issues and suggests improvements to make content more inclusive for all users.",
            technologies: ["JavaScript", "WCAG Guidelines", "Chrome Extensions API", "Axe Core"],
            demoLink: "https://a11y-checker.example.com",
            githubLink: "https://github.com/tanaypd/accessibility-checker"
        }
    ]
};