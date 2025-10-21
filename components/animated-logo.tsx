"use client"

import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide animation after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="animate-pulse">
        {/* Cup */}
        <g>
          {/* Cup body */}
          <path
            d="M 50 80 L 55 140 Q 55 150 65 150 L 135 150 Q 145 150 145 140 L 150 80 Z"
            fill="none"
            stroke="#8B4513"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cup handle */}
          <path
            d="M 150 100 Q 170 100 170 120 Q 170 140 150 140"
            fill="none"
            stroke="#8B4513"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Coffee pouring animation */}
        <g>
          {/* Pot spout */}
          <path d="M 30 60 L 50 80" stroke="#A0522D" strokeWidth="3" strokeLinecap="round" />
          {/* Pot body */}
          <circle cx="20" cy="50" r="15" fill="none" stroke="#A0522D" strokeWidth="2" />
        </g>

        {/* Animated coffee stream */}
        <g>
          <line
            x1="50"
            y1="80"
            x2="70"
            y2="120"
            stroke="#6F4E37"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.8"
            style={{
              animation: "pour 2s ease-in-out infinite",
            }}
          />
          <line
            x1="52"
            y1="78"
            x2="72"
            y2="118"
            stroke="#8B6F47"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
            style={{
              animation: "pour 2s ease-in-out infinite 0.1s",
            }}
          />
        </g>

        {/* Coffee inside cup - animated fill */}
        <g>
          <rect
            x="56"
            y="130"
            width="88"
            height="15"
            fill="#6F4E37"
            opacity="0.7"
            style={{
              animation: "fillCup 2s ease-in-out infinite",
            }}
          />
        </g>

        {/* Text */}
        <text
          x="100"
          y="180"
          textAnchor="middle"
          className="text-sm font-bold"
          fill="#8B4513"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          CoffeeApplianceLab
        </text>
      </svg>

      <style>{`
        @keyframes pour {
          0%, 100% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(0);
          }
        }

        @keyframes fillCup {
          0% {
            height: 0;
            y: 145;
          }
          100% {
            height: 20;
            y: 125;
          }
        }
      `}</style>
    </div>
  )
}
