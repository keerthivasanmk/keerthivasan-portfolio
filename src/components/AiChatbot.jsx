'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  User, 
  ExternalLink,
  FileDown,
  Mail,
  ArrowRight,
  Code2,
  Briefcase,
  Layers,
  Settings
} from 'lucide-react'
import { 
  personalInfo, 
  workExperience, 
  foodDeliveryEcosystem, 
  certifications, 
  education,
  skillCategories 
} from '@/constants/constants'

// Predefined Quick Suggestions
const SUGGESTIONS = [
  'Tell me about Keerthivasan',
  'What are his core technical skills?',
  'What did he do at Hootsuite?',
  'Show Food Delivery projects',
  'What databases does he use?',
  'What certifications does he hold?',
  'How can I get in touch with him?'
]

// System Context for Live AI calls (Gemini/OpenAI)
const SYSTEM_PROMPT = `You are "Keerthi AI", the intelligent personal assistant for Keerthivasan's developer portfolio.
Your role is to represent Keerthivasan professionally, accurately, and enthusiastically to recruiters, engineering managers, and collaborators.

Here is Keerthivasan's complete verified profile:
- Name: Keerthivasan
- Title: Full Stack Developer
- Experience: 5+ Years of professional production software development experience
- Location: Rasipuram, Tamil Nadu, India
- Email: keerthikrishna66@gmail.com | Phone: +91 8344803585
- GitHub: https://github.com/keerthivasanmk | LinkedIn: https://www.linkedin.com/in/keerthivasan-m-k-7a885a184/
- Core Strengths: Full Stack web applications, high-performance frontend (React.js, Next.js, TypeScript), robust Node.js backend REST APIs, AWS deployments (ECR, EBS, S3), Docker containerization, and deep observability (OpenTelemetry, Grafana).

Work Experience:
1. AOT Technologies | Full Stack Developer (Apr 2024 – Present)
   - Client: Hootsuite
   - Achievements: Built and maintained applications with React, Next.js, TypeScript, Node.js; implemented OpenTelemetry distributed tracing with Grafana and Amazon S3; built plugin-based telemetry configuration automation; resolved Snyk vulnerabilities and upgraded Node.js versions; managed Docker containerization and AWS deployments (ECR, EBS, S3).
2. Mallow Technologies | Frontend Developer (Apr 2021 – Mar 2024)
   - Client/Product: KwickMetrics
   - Achievements: Developed KwickMetrics marketing site with Next.js & headless WordPress; implemented SSR and Core Web Vitals optimizations; built documentation platform with React & Docusaurus; collaborated with design and content teams.

Projects:
- Food Delivery Platform Ecosystem (Full Stack Personal Project):
  1. Customer Web Application: restaurant browsing, menu filters, dynamic cart, live order tracking. (Repo: https://github.com/keerthivasanmk/food-delivery-customer | Demo: https://food-delivery-customer.vercel.app)
  2. Restaurant Partner Dashboard: vendor catalog, live kitchen order pipeline, revenue analytics. (Repo: https://github.com/keerthivasanmk/food-delivery-restaurant | Demo: https://food-delivery-restaurant.vercel.app)
  3. Delivery Partner App: driver order dispatch, route navigation, order milestones. (Repo: https://github.com/keerthivasanmk/food-delivery-driver | Demo: https://food-delivery-driver.vercel.app)
  - Stack: Next.js, React, Tailwind CSS, Firebase, Vercel.

Certifications:
- AWS Certified Cloud Practitioner (Amazon Web Services)
- Node.js – The Complete Guide (MVC, REST APIs, GraphQL, Deno - Udemy)

Education:
- B.Tech in Information Technology, Kongu Engineering College (2017–2021)

Guidelines for your answers:
- Be concise, structured, friendly, and informative. Use bullet points and bold formatting for readability.
- Highlight his 5+ years of full stack expertise.
- If asked about contacting him or hiring, provide his email (keerthikrishna66@gmail.com) and phone (+91 8344803585).
`

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! I'm **Keerthi AI**, an intelligent assistant trained on Keerthivasan's 5+ years of full-stack engineering, projects, and work history.\n\nAsk me anything or pick a quick topic below!`,
      actions: [
        { label: 'Core Skills', query: 'What are your core technical skills?' },
        { label: 'Hootsuite Work', query: 'What did you build at Hootsuite?' },
        { label: 'Projects', query: 'Show Food Delivery projects' }
      ],
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLiveAi, setIsLiveAi] = useState(false)
  const chatScrollContainerRef = useRef(null)

  // Listen for open events from header or hero buttons
  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-ai-chat', handleOpen)
    return () => window.removeEventListener('open-ai-chat', handleOpen)
  }, [])

  // Auto scroll to bottom smoothly inside the chat container
  const scrollToBottom = () => {
    if (chatScrollContainerRef.current) {
      chatScrollContainerRef.current.scrollTo({
        top: chatScrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 50)
    }
  }, [messages, isTyping, isOpen])

  // Semantic Knowledge Matching & Fallback Engine
  const generateSemanticResponse = (query) => {
    const q = query.toLowerCase().trim()

    // 1. Greetings
    if (q.match(/^(hi|hello|hey|greetings|good\s(morning|afternoon|evening)|howdy)\b/)) {
      return {
        text: `Hello! 👋 Great to meet you. Keerthivasan is a **Full Stack Developer with 5+ years of experience** specializing in **React.js, Next.js, Node.js, TypeScript, and AWS**.\n\nHow can I help you today? You can ask about his past work, skills, or projects!`,
        actions: [
          { label: 'Work Experience', query: 'Tell me about work experience' },
          { label: 'Explore Projects', query: 'Show Food Delivery projects' },
          { label: 'Contact Info', query: 'How can I contact him?' }
        ]
      }
    }

    // 2. Who is Keerthivasan / Summary
    if (q.includes('who is') || q.includes('about') || q.includes('introduce') || q.includes('background') || q.includes('summary')) {
      return {
        text: `**Keerthivasan** is a results-driven **Full Stack Developer** with **5+ years of professional development experience**.\n\n• **Core Strengths:** End-to-end web engineering, scalable microservices, and modern UI architectures.\n• **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS, Redux\n• **Backend:** Node.js, RESTful APIs, microservice integration\n• **Cloud & DevOps:** AWS (ECR, EBS, S3), Docker containerization\n• **Observability & Security:** OpenTelemetry, Grafana, Snyk remediation\n• **Production Experience:** Shipped enterprise platforms at **Hootsuite** and **KwickMetrics**.`,
        actions: [
          { label: 'View Resume', url: personalInfo.resumeUrl },
          { label: 'See Hootsuite Work', query: 'What did he do at Hootsuite?' }
        ]
      }
    }

    // 3. Technical Skills
    if (q.includes('skill') || q.includes('tech stack') || q.includes('technolog') || q.includes('framework') || q.includes('tools') || q.includes('language')) {
      return {
        text: `Here is Keerthivasan's categorized technology stack:\n\n• **Languages:** JavaScript (ES6+), TypeScript, HTML5, CSS3\n• **Frontend:** React.js, Next.js, Redux, Tailwind CSS, Sass\n• **Backend:** Node.js, RESTful API design & integration\n• **Cloud & DevOps:** AWS (ECR, EBS, S3), Docker\n• **Observability:** OpenTelemetry, Grafana dashboards\n• **Databases:** PostgreSQL, MongoDB\n• **Developer Tools:** Git, Postman, Webpack`,
        actions: [
          { label: 'Jump to Skills', targetId: 'skills' },
          { label: 'AWS Experience', query: 'Tell me about his AWS experience' }
        ]
      }
    }

    // 4. Databases
    if (q.includes('database') || q.includes('postgres') || q.includes('mongo') || q.includes('sql') || q.includes('nosql')) {
      return {
        text: `Keerthivasan has hands-on production experience with both relational and NoSQL databases:\n\n• **PostgreSQL:** Relational schemas, query optimization, indexing, and transactional integrity in microservices.\n• **MongoDB:** Document modeling, aggregation pipelines, and high-velocity unstructured data storage.\n• **Firebase Firestore & Realtime DB:** Used for live event sync and state tracking in the Food Delivery Platform ecosystem.`,
        actions: [
          { label: 'Backend Experience', query: 'What is his backend experience?' },
          { label: 'Projects', query: 'Show Food Delivery projects' }
        ]
      }
    }

    // 5. Cloud, AWS & Docker
    if (q.includes('aws') || q.includes('docker') || q.includes('cloud') || q.includes('ecr') || q.includes('ebs') || q.includes('s3') || q.includes('container') || q.includes('devops')) {
      return {
        text: `Keerthivasan is an **AWS Certified Cloud Practitioner** with deep cloud deployment experience:\n\n• **Amazon ECR:** Automated Docker container image registry and deployment workflows.\n• **Amazon EBS:** Scalable persistent block storage for cloud instances.\n• **Amazon S3:** Object storage, asset pipelines, and telemetry log sinks.\n• **Docker:** Containerized development environments ensuring consistent parity between local and production deployments.\n• **OpenTelemetry & Grafana:** Cloud-native observability and metrics tracking.`,
        actions: [
          { label: 'Certifications', query: 'What certifications does he hold?' },
          { label: 'Hootsuite Role', query: 'What did he do at Hootsuite?' }
        ]
      }
    }

    // 6. Hootsuite / AOT Technologies
    if (q.includes('hootsuite') || q.includes('aot') || q.includes('current') || q.includes('present') || q.includes('opentelemetry') || q.includes('snyk') || q.includes('grafana')) {
      const aot = workExperience[0]
      return {
        text: `At **AOT Technologies** (Apr 2024 – Present), Keerthivasan works as a **Full Stack Developer** on enterprise integrations for **${aot.client}**:\n\n• **Microservices & Apps:** Builds and maintains core applications using React, Next.js, TypeScript, JavaScript, and Node.js.\n• **Observability:** Architected distributed tracing using **OpenTelemetry** with Grafana dashboards and Amazon S3.\n• **Automation:** Designed a plugin-based methodology to automate telemetry instrumentation across microservices.\n• **Security & Stability:** Identified and resolved critical **Snyk security vulnerabilities** and executed seamless Node.js version upgrades.\n• **Deployments:** Managed Dockerized services and AWS deployments via ECR, EBS, and S3.`,
        actions: [
          { label: 'Mallow Technologies Work', query: 'What did he do at Mallow Technologies?' },
          { label: 'Jump to Experience', targetId: 'experience' }
        ]
      }
    }

    // 7. Mallow Technologies / KwickMetrics
    if (q.includes('mallow') || q.includes('kwickmetric') || q.includes('wordpress') || q.includes('docusaurus') || q.includes('ssr')) {
      const mallow = workExperience[1]
      return {
        text: `At **Mallow Technologies** (Apr 2021 – Mar 2024), Keerthivasan served as a **Frontend Developer** building applications for **${mallow.client}**:\n\n• **Marketing Platform:** Architected and launched the high-performance public marketing website with Next.js and headless WordPress.\n• **Performance:** Implemented SSR, responsive layouts, and Core Web Vitals enhancements for sub-second page loads.\n• **Documentation Hub:** Built an interactive documentation portal from scratch utilizing React and Docusaurus.\n• **Collaboration:** Partnered closely with UI/UX designers and product managers to deliver production-ready software.`,
        actions: [
          { label: 'Hootsuite Experience', query: 'What did he do at Hootsuite?' },
          { label: 'Projects', query: 'Show Food Delivery projects' }
        ]
      }
    }

    // 8. Projects & Food Delivery Platform
    if (q.includes('project') || q.includes('food') || q.includes('delivery') || q.includes('portfolio') || q.includes('code') || q.includes('github repo')) {
      return {
        text: `Keerthivasan developed the **Food Delivery Platform Ecosystem**, an end-to-end suite of 3 dedicated applications built with **Next.js, React, Tailwind CSS, Firebase, and Vercel**:\n\n1. 🍔 **Customer Web Application:** Restaurant browsing, category filters, real-time cart, and live order tracking.\n2. 🏪 **Restaurant Partner Dashboard:** Menu item toggles, inventory management, live kitchen pipeline, and sales analytics.\n3. 🛵 **Delivery Partner App:** Real-time driver dispatch, GPS route directions, order milestones, and earnings tracker.`,
        actions: [
          { label: 'Customer Demo', url: foodDeliveryEcosystem[0].liveUrl },
          { label: 'Customer GitHub', url: foodDeliveryEcosystem[0].githubUrl },
          { label: 'Restaurant Demo', url: foodDeliveryEcosystem[1].liveUrl },
          { label: 'Driver Demo', url: foodDeliveryEcosystem[2].liveUrl }
        ]
      }
    }

    // 9. Certifications & Education
    if (q.includes('certif') || q.includes('degree') || q.includes('education') || q.includes('college') || q.includes('kongu') || q.includes('btech') || q.includes('study') || q.includes('graduat')) {
      return {
        text: `**Certifications & Education:**\n\n• ☁️ **AWS Certified Cloud Practitioner** (Amazon Web Services)\n  *Demonstrated mastery of AWS cloud architecture, security, deployment, and core services.*\n\n• 🟢 **Node.js – The Complete Guide (MVC, REST APIs, GraphQL, Deno)**\n  *In-depth mastery of Node.js backend development, Express, REST APIs, and database modeling.*\n\n• 🎓 **B.Tech – Information Technology** (2017–2021)\n  *Kongu Engineering College, India.*`,
        actions: [
          { label: 'View Resume', url: personalInfo.resumeUrl },
          { label: 'Core Skills', query: 'What are his core technical skills?' }
        ]
      }
    }

    // 10. Contact, Hiring, Availability, Resume
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach') || q.includes('call') || q.includes('message') || q.includes('resume') || q.includes('cv') || q.includes('location')) {
      return {
        text: `Here is how you can connect with Keerthivasan:\n\n• **Email:** [${personalInfo.email}](mailto:${personalInfo.email})\n• **Phone:** [${personalInfo.phone}](tel:${personalInfo.phone.replace(/\s+/g, '')})\n• **Location:** ${personalInfo.location}\n• **LinkedIn:** [linkedin.com/in/keerthivasan-m-k](https://www.linkedin.com/in/keerthivasan-m-k-7a885a184/)\n• **GitHub:** [github.com/keerthivasanmk](https://github.com/keerthivasanmk)\n• **Resume:** [Download Resume PDF](${personalInfo.resumeUrl})\n\nHe is currently open to full stack engineering roles, consulting, and building high-scale products!`,
        actions: [
          { label: 'Open Contact Form', targetId: 'contact' },
          { label: 'Send Email', url: `mailto:${personalInfo.email}` },
          { label: 'View Resume', url: personalInfo.resumeUrl }
        ]
      }
    }

    // 11. Specific tech questions (React, Next.js, Node, TypeScript, Tailwind)
    if (q.includes('react') || q.includes('next') || q.includes('typescript') || q.includes('node') || q.includes('tailwind')) {
      return {
        text: `Yes! Keerthivasan has **5+ years of extensive production experience** with **React.js, Next.js, Node.js, and TypeScript**:\n\n• **React & Next.js:** SSR (Server-Side Rendering), SSG, App Router, responsive design, state management (Redux/Context), and Core Web Vitals optimization.\n• **TypeScript & Node.js:** Enterprise-grade type safety, REST API architecture, microservices, and asynchronous event loops.\n• **Tailwind CSS:** Modern, responsive, utility-first design systems and micro-interactions.`,
        actions: [
          { label: 'See Projects', query: 'Show Food Delivery projects' },
          { label: 'Work History', query: 'Tell me about work experience' }
        ]
      }
    }

    // Default intelligent fallback
    return {
      text: `Keerthivasan is a **Full Stack Developer with 5+ years of experience** specializing in **React.js, Next.js, Node.js, TypeScript, AWS, and Docker**.\n\nHe has built enterprise platforms at **Hootsuite**, BI analytics tools at **KwickMetrics**, and the multi-role **Food Delivery Platform**.\n\nWhat specific detail would you like to know more about?`,
      actions: [
        { label: 'Technical Skills', query: 'What are his core technical skills?' },
        { label: 'Work Experience', query: 'Tell me about work experience' },
        { label: 'Food Delivery Apps', query: 'Show Food Delivery projects' },
        { label: 'Contact Info', query: 'How can I contact him?' }
      ]
    }
  }

  // Attempt live Gemini/OpenAI API if keys are provided, with seamless fallback
  const askLiveAiOrFallback = async (query) => {
    const geminiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
    const openAiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

    if (geminiKey) {
      try {
        setIsLiveAi(true)
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${query}` }]
                }
              ]
            })
          }
        )

        const data = await response.json()
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
        if (text) {
          return {
            text,
            isLive: true,
            actions: [
              { label: 'Explore Projects', targetId: 'projects' },
              { label: 'Contact Keerthi', targetId: 'contact' }
            ]
          }
        }
      } catch (err) {
        console.warn('Live Gemini API call failed, using semantic knowledge engine:', err)
      }
    } else if (openAiKey) {
      try {
        setIsLiveAi(true)
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              { role: 'user', content: query }
            ],
            temperature: 0.7
          })
        })

        const data = await response.json()
        const text = data?.choices?.[0]?.message?.content
        if (text) {
          return {
            text,
            isLive: true,
            actions: [
              { label: 'Explore Projects', targetId: 'projects' },
              { label: 'Contact Keerthi', targetId: 'contact' }
            ]
          }
        }
      } catch (err) {
        console.warn('Live OpenAI API call failed, using semantic knowledge engine:', err)
      }
    }

    // Default to the comprehensive semantic engine
    setIsLiveAi(false)
    return generateSemanticResponse(query)
  }

  const handleSend = async (textToSend) => {
    const query = textToSend || input
    if (!query.trim()) return

    const userMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query.trim(),
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Scroll to bottom after user message
    setTimeout(scrollToBottom, 30)

    try {
      const response = await askLiveAiOrFallback(query)
      const botMessage = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: response.text,
        actions: response.actions || [],
        isLive: response.isLive || false,
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (e) {
      const fallback = generateSemanticResponse(query)
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: fallback.text,
          actions: fallback.actions || [],
          timestamp: new Date()
        }
      ])
    } finally {
      setIsTyping(false)
      setTimeout(scrollToBottom, 60)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: `Hello! I'm **Keerthi AI**, an intelligent assistant trained on Keerthivasan's 5+ years of full-stack engineering, projects, and work history.\n\nAsk me anything or pick a quick topic below!`,
        actions: [
          { label: 'Core Skills', query: 'What are your core technical skills?' },
          { label: 'Hootsuite Work', query: 'What did you build at Hootsuite?' },
          { label: 'Projects', query: 'Show Food Delivery projects' }
        ],
        timestamp: new Date()
      }
    ])
  }

  const handleActionClick = (action) => {
    if (action.query) {
      handleSend(action.query)
    } else if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer')
    } else if (action.targetId) {
      setIsOpen(false)
      const el = document.getElementById(action.targetId)
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -25 })
        } else {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  // Format markdown: bold, bullet points, and links
  const renderFormattedText = (text) => {
    return text.split('\n').map((line, lineIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g)
      return (
        <span key={lineIdx} className='block min-h-[1.25em] leading-relaxed'>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className='font-bold text-white'>
                  {part.slice(2, -2)}
                </strong>
              )
            }
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
            if (linkMatch) {
              const before = part.slice(0, linkMatch.index)
              const after = part.slice((linkMatch.index || 0) + linkMatch[0].length)
              return (
                <span key={pIdx}>
                  {before}
                  <a
                    href={linkMatch[2]}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-emerald-400 underline font-semibold hover:text-emerald-300 transition-colors'
                  >
                    {linkMatch[1]}
                  </a>
                  {after}
                </span>
              )
            }
            return part
          })}
        </span>
      )
    })
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className='fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 pointer-events-auto'>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className='relative flex items-center'
          >
            {/* Ambient Pulse Ring */}
            <span className='absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-60 blur-md animate-pulse'></span>

            <button
              onClick={() => setIsOpen(true)}
              className='relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-black/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl hover:bg-black hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 group'
              aria-label='Open AI Chat Assistant'
            >
              <div className='w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0'>
                <Bot className='w-4 h-4' />
              </div>
              <div className='text-left hidden sm:block'>
                <div className='text-xs font-bold leading-tight flex items-center gap-1'>
                  Ask AI
                  <Sparkles className='w-3 h-3 text-emerald-400' />
                </div>
                <div className='text-[10px] text-white/60'>Keerthi Assistant</div>
              </div>
            </button>
          </motion.div>
        )}
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            data-lenis-prevent="true"
            className='fixed bottom-4 right-4 sm:bottom-7 sm:right-7 z-50 w-[calc(100vw-2rem)] sm:w-[440px] h-[580px] max-h-[85vh] rounded-3xl bg-[#09141b]/95 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden text-white pointer-events-auto overscroll-contain'
          >
            {/* Chat Header */}
            <div className='px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-black/40 select-none'>
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-inner'>
                  <Bot className='w-5 h-5' />
                </div>
                <div>
                  <div className='text-sm font-bold flex items-center gap-1.5'>
                    Keerthi AI Assistant
                    <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span>
                  </div>
                  <div className='text-[10px] text-white/50 flex items-center gap-1'>
                    <span>Trained on Portfolio Context</span>
                    {isLiveAi && <span className='text-emerald-400 font-bold'>• Live AI</span>}
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-1'>
                <button
                  onClick={handleReset}
                  title='Reset Conversation'
                  className='p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors'
                >
                  <RotateCcw className='w-4 h-4' />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title='Close Chat'
                  className='p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors'
                >
                  <X className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* Scrollable Messages Container with data-lenis-prevent */}
            <div 
              ref={chatScrollContainerRef}
              data-lenis-prevent="true"
              className='flex-1 overflow-y-auto p-4 space-y-3.5 text-xs overscroll-contain touch-pan-y'
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.2) transparent'
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className='w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <Bot className='w-3.5 h-3.5' />
                    </div>
                  )}

                  <div className='max-w-[85%] space-y-2'>
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl leading-relaxed text-xs ${
                        msg.sender === 'user'
                          ? 'bg-emerald-500 text-black font-semibold rounded-tr-sm shadow-md'
                          : 'bg-white/10 text-white/90 border border-white/10 rounded-tl-sm'
                      }`}
                    >
                      {renderFormattedText(msg.text)}
                    </div>

                    {/* Interactive Action Pills on Bot replies */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className='flex flex-wrap gap-1.5 pt-1'>
                        {msg.actions.map((action, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(action)}
                            className='inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold transition-colors'
                          >
                            <span>{action.label}</span>
                            {action.url ? (
                              <ExternalLink className='w-3 h-3' />
                            ) : action.targetId ? (
                              <ArrowRight className='w-3 h-3' />
                            ) : null}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className='w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0 mt-0.5'>
                      <User className='w-3.5 h-3.5' />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className='flex items-center gap-2 text-white/50 text-[11px] pl-8'>
                  <div className='loader w-3.5 h-3.5 border-2 border-emerald-400/40 border-t-emerald-400'></div>
                  <span>Keerthi AI is thinking...</span>
                </div>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            <div 
              data-lenis-prevent="true"
              className='px-3 py-2 border-t border-white/5 bg-black/20 overflow-x-auto select-none'
              style={{ scrollbarWidth: 'none' }}
            >
              <div className='flex gap-1.5 whitespace-nowrap'>
                {SUGGESTIONS.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(suggestion)}
                    className='text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors flex-shrink-0'
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className='p-3 border-t border-white/10 bg-black/40 flex items-center gap-2'
            >
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask about skills, projects, Hootsuite experience...'
                className='flex-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-white/40 outline-none focus:border-emerald-400 focus:bg-white/10 transition-colors'
              />
              <button
                type='submit'
                disabled={!input.trim()}
                aria-label='Send message'
                className='p-2.5 rounded-xl bg-emerald-400 text-black hover:bg-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md'
              >
                <Send className='w-4 h-4' />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
