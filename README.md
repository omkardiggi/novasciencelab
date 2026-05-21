# 🧪 NovaSci Lab — Virtual Science Laboratory

NovaSci Lab is a premium, highly interactive single-page virtual science laboratory. Designed with a gorgeous glassmorphic tech-aesthetic, it brings **15 immersive experiments** to life across Physics, Chemistry, Biology, and Electronics. It features a fully voice-guided AI tutor powered by the Groq API, real-time interactive HTML5 canvas physics/chemical engines, built-in dynamic knowledge-check quizzes, multilingual support (English, Hindi, Kannada), and stereoscopic VR/AR visualization.

---

## 🚀 Key Features

*   **15 Immersive Simulations**: Rich, interactive graphical simulations rendered in real-time on a dynamic HTML5 Canvas.
*   **🤖 AI Guided Tutor (Groq API)**: Fully conversational voice assistant using the Groq API. Includes a customizable API key field and a **"ELI5" (Explain Like I'm 5)** mode to simplify complex concepts for younger learners.
*   **🎤 Dual Voice Engine**: Features a hands-free learning experience utilizing standard Web Speech APIs (`speechSynthesis` and `webkitSpeechRecognition`) for dynamic text-to-speech explanations and voice commands.
*   **🌐 3-Language Multilingual Engine**: Complete localized support for **English (EN)**, **Hindi (HI)**, and **Kannada (KN)** across all user interfaces, explanations, instruction cards, and assessment tests.
*   **📱 XR Visualization Options**: Features toggleable display modes supporting standard **2D Canvas view**, mobile-simulated overlay **AR (Augmented Reality)**, and stereoscopic split-screen **VR (Virtual Reality)**.
*   **📊 Integrated Assessment & Analytics**: A built-in 5-question multiple choice quiz for each experiment, complete with visual/sound feedback, scoreboard progression, performance tracking charts, and granular response audits.
*   **🌌 Hyper-Modern Glassmorphic UI**: Sleek dark/light theme options utilizing responsive CSS HSL color palettes, custom grid drift background animations, clean typography (`Inter` & `JetBrains Mono`), and hover-micro-interactions.

---

## 🧪 Interactive Experiments Directory

The lab houses **15 distinct interactive experiments** spanning four main scientific disciplines:

### 📐 Physics
1.  **Simple Pendulum** (`pendulum`): Explore gravity and inertia. Tweak string length and gravity levels to analyze oscillation periods.
2.  **Lens & Optics** (`optics`): Manipulate object distances on an optical bench and adjust lens focal lengths to verify the thin-lens equation ($1/f = 1/v + 1/u$).
3.  **Projectile Motion** (`projectile`): Launch cannonballs with customizable angles and velocities to trace parabolic curves and discover why $45^\circ$ maximizes horizontal range.

### ⚗️ Chemistry
4.  **Acid-Base Titration** (`acid_base`): Drip NaOH (base) into HCl (acid) with phenolphthalein. Observe the pH curve and capture the steep equivalence point around pH 8.2.
5.  **Electrolysis of Water** (`electrolysis`): Run electric currents through water to split it into Hydrogen ($H_2$) at the cathode and Oxygen ($O_2$) at the anode, confirming the $2:1$ molecular ratio.
6.  **Combustion Reaction** (`combustion`): Ignite an alcohol lamp beneath a metal calorimeter. Heat water and use $Q = mc\Delta T$ to calculate chemical energy release.
7.  **Reaction Rates** (`reaction_rate`): Control temperatures and concentrations to witness first-order reactants fade exponentially, observing Arrhenius energy decay curves.

### 🌿 Biology
8.  **Osmosis in Plant Cells** (`osmosis`): Submerge potato strips into hypotonic ($0\%$), isotonic ($0.9\%$), and hypertonic ($10\%$) saline solutions to observe cellular turgor and plasmolysis.
9.  **Photosynthesis Rate** (`photosynthesis`): Position light sources at varying distances to prove the inverse square law of light intensity through aquatic plant oxygen bubble counts.
10. **DNA Extraction** (`dna`): Crush strawberries, introduce a cell-lysing soap-and-salt buffer, and pour ice-cold ethanol to precipitate real, fibrous white DNA strands.
11. **Heart Rate & Exercise** (`heart_rate`): Put a virtual patient through intense cardio, tracking BPM changes and autonomic recovery on a live, pulse-synchronized ECG stream.

### 🔌 Electronics
12. **LED + Resistor** (`led_resistor`): Compute resistor sizing ($R = \frac{V_{supply} - V_f}{I_f}$) to light up sensitive diodes safely without burning them out under excess voltage.
13. **Series vs Parallel** (`series_parallel`): Connect dual load resistors in different layouts. Verify Ohm's Law and compare total resistance ($R_s = R_1 + R_2$ vs $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2}$).
14. **RC Circuit** (`rc_circuit`): Charge and discharge a capacitor through a resistor, graphing the exponential voltage curve to verify the time constant ($\tau = R \times C$).
15. *Plus additional system-integrated sub-modules for deep electronics auditing.*

---

## 🛠️ Technology Stack

*   **Markup**: Semantic HTML5 structures.
*   **Styling**: Vanilla CSS3 using custom variable systems, backdrop glass-morphism, responsive grid flex layouts, and keyframe animations.
*   **Scripting**: Modern Vanilla ES6+ Javascript containing procedural state management, custom physics algorithms, and dynamic canvas rendering.
*   **Libraries**:
    *   **Three.js** (`three.min.js`): Configured for 3D staging, camera projection, and stereoscopic VR viewports.
    *   **MediaPipe Hands** (`hands.js` & `camera_utils.js`): Imported to facilitate gesture-based virtual controls and hand-tracking inputs.
    *   **Groq API**: Fully integrated fallback key for natural language processing and voice guidance.

---

## 🤖 AI Guide & Speech Integration

The tutor handles questions dynamically:
1.  **AI Mode Configuration**: Switch on **ELI5 Mode** to simplify definitions (e.g., explaining capacitance as a "temporary electricity bucket" instead of "electric field charge storage").
2.  **Speech Synthesis**: The page uses `window.speechSynthesis` to speak results, quiz questions, and AI guidance out loud.
3.  **Speech Recognition**: Uses browser-native Webkit Speech Recognition to record your voice queries and feed them to the tutor instantly.

---

## 📂 File Architecture & State System

The entire application runs from a single, self-contained HTML file, facilitating seamless local execution without any bundlers or server setups:

```
lat (4).html
├── CSS Variables (:root / Light / Dark Theme)
├── Screen Layout Containers:
│   ├── #login (Credential Verification Gate)
│   ├── #landing (Immersive Entry Portal & Quick Stats)
│   ├── #dashboard (Categorized Experiment cards)
│   ├── #lab (Core Visual Simulation Workbench)
│   ├── #quiz (MCQ Assessment Engine)
│   └── #results (Analytics & Performance Reports)
└── ES6 State & Script Modules:
    ├── state {} (Global reactive parameters)
    ├── EXP_QUIZZES {} (Assessments for all 15 labs)
    ├── EXPERIMENTS [] (Dynamic steps, translations, and explanations)
    ├── Speech Controllers (Voice recording & synthesizers)
    ├── Canvas Controllers (Render loop, 2D/3D matrix systems)
    ├── AI Query Manager (Groq API communication)
    └── UI Router & LocalStorage sync (Saves points, completed labs)
```

---

## 🏁 Getting Started

### Method 1: Local Launch (Direct)
1. Double-click the `lat (4).html` file in your file explorer to open it directly in any modern browser (Chrome, Edge, or Safari).
2. *Note: Voice speech recognition features require a secure context (localhost or HTTPS) depending on browser security settings.*

### Method 2: Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar to run the app on a secure local loopback (`http://127.0.0.1:5500`), which unlocks full microphone recording permissions.

---

*NovaSci Lab — Democratizing scientific education with immersive technology.* 🚀
