const projectsData = [
    {
        id: 1,
        pdf: "https://drive.google.com/file/d/1jNXYlzB2hXnkRHtavNDsObUPugyt8slR/preview",
        title: "Temperature Detection Device",
        domain: "Embedded Hardware",
        desc: "Designed heat sensing and alarm functionalities with Altium Designer and Proteus8, including schematic, PCB layout, and soldering.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-microchip",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>Temperature Detection Device</strong> is a hardware-focused system designed to
                accurately measure and monitor both ambient and object temperatures. The device features
                non-contact body or object temperature measurement using an infrared sensor, alongside
                environmental temperature tracking. It includes a multi-level alert system that
                activates LED warnings for high temperatures (such as environments over 30°C) and
                triggers an audio alarm via a buzzer in case of critical heat levels like a fire (over
                65°C). The temperature readings are displayed in real-time on an LCD 1602 screen.</p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Hardware & Components:</strong> The system integrates an MLX90614 infrared
                    sensor, an LM35 precision temperature sensor, and an ATmega328P microcontroller. The
                    circuit utilizes a variety of electronic components including Op-Amps (TL082CP) for
                    analog voltage comparison, MOSFETs (IRF3205) for power switching, BJTs (2N5551),
                    diodes, and an LM2596 buck converter for stable power regulation.</li>
                <li><strong>PCB Design & Fabrication:</strong> Schematic capture and PCB layout were
                    meticulously designed using Altium Designer. The design adhered to Design Rule
                    Checks (DRC) and incorporated trace width calculations to safely handle up to 3A of
                    input current.</li>
                <li><strong>System Design:</strong> Employed requirements engineering to comprehensively
                    define both functional and non-functional specifications.</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>Project Leadership & Documentation:</strong> Led the team through the
                    hardware development lifecycle, organizing tasks, and authoring the technical report
                    covering the system's requirements engineering.</li>
                <li><strong>Analog Circuit Design:</strong> Engineered the ambient temperature sensing
                    block using the LM35 sensor. Designed the analog comparator circuits using Op-Amps
                    to trigger the warning LEDs and the buzzer at precise voltage thresholds without
                    relying solely on software processing.</li>
                <li><strong>PCB Layout & Assembly:</strong> Took primary responsibility for drawing the
                    schematic and routing the PCB layout in Altium Designer. Personally soldered the
                    physical components onto the printed circuit board for final assembly and testing.
                </li>
            </ul>
        `
    },
    {
        id: 2,
        pdf: "https://drive.google.com/file/d/1qY3yJsNnhqR-R-nd7vGkVwVmtNhFCY7o/preview",
        title: "Traffic Light Control System",
        domain: "Embedded Software",
        desc: "Implemented on STM32F103RB using state machines, non-preemptive scheduler, and I2C LCD interfacing.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-traffic-light",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>Traffic Light Control System</strong> is an embedded project designed to simulate
                and manage the operations of a real-world traffic intersection. The system controls two
                separate lanes and features three distinct operational modes: Automatic (running based
                on pre-set timers), Manual (allowing manual user-controlled transitions), and Modify
                (enabling custom time configurations for red and green lights). This system demonstrates
                a practical application in urban traffic management to ensure safe and efficient vehicle
                flow.</p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Hardware & Programming:</strong> Developed entirely in C on the STM32F103RB
                    microcontroller (ARM Cortex-M3 architecture).</li>
                <li><strong>System Architecture:</strong> Structured around well-defined Finite State
                    Machines (FSM) to seamlessly manage complex state transitions and behaviors across
                    the three modes.</li>
                <li><strong>Task Management:</strong> Engineered a custom non-preemptive Scheduler
                    implemented via a doubly linked list and dynamic memory pooling (freeList). This
                    design achieved O(1) complexity for timer updates, preventing nested interrupts and
                    ensuring stable execution.</li>
                <li><strong>Protocols & Algorithms:</strong> Established LCD 16x2 communication via the
                    I2C protocol and utilized hardware timers for precise system clocking. Incorporated
                    an advanced switch debounce algorithm (3-time state reading) to handle button inputs
                    and long-press detections reliably.</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>System Design & Implementation:</strong> Authored the system architecture,
                    modeled the FSMs, and programmed the entire embedded application in C.</li>
                <li><strong>Scheduler Development:</strong> Took the initiative to develop a highly
                    optimized non-preemptive scheduler to manage concurrent tasks efficiently, replacing
                    standard delay functions and maximizing performance on resource-constrained
                    hardware.</li>
                <li><strong>Hardware Interfacing:</strong> Wrote the low-level drivers to communicate
                    with the I2C LCD, configured GPIOs for the traffic LEDs, and implemented the
                    reliable button debouncing logic.</li>
            </ul>
        `
    },
    {
        id: 3,
        pdf: "https://drive.google.com/file/d/12FzeA98fRu9ywYC-iqeOyNwLqWXT70bA/preview",
        title: "E-Commerce Fashion Website",
        domain: "Front-end Development",
        desc: "Developed responsive UI using Bootstrap 5.3 and jQuery with dynamic product displays and filtering.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-laptop-code",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>E-Commerce Fashion Website</strong> is an online shopping platform developed to
                provide users with a seamless and intuitive clothing purchasing experience. The system
                offers comprehensive features including product searching, dynamic filtering, a shopping
                cart, and order tracking. Additionally, it includes a robust administrative dashboard
                for managing staff, products, orders, and revenue, effectively catering to the specific
                needs of different user roles, including guests, registered members, and administrators.
            </p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, jQuery (v3.7.1), and
                    Bootstrap (v5.3.3) were used to build a responsive, grid-based, and cross-browser
                    compatible user interface.</li>
                <li><strong>Backend & Database:</strong> PHP for server-side logic, coupled with MySQL
                    for managing a structured relational database (handling products, accounts, carts,
                    and orders). The system was deployed on a local XAMPP server using Apache.</li>
                <li><strong>Optimization & Interactivity:</strong> Utilized AJAX for asynchronous data
                    loading and real-time UI updates without full page reloads. Applied Search Engine
                    Optimization (SEO) techniques, including On-Page optimization and Friendly URLs, to
                    improve search visibility.
                </li>
                <li><strong>Security Awareness:</strong> The system was developed with considerations
                    for mitigating common web vulnerabilities such as SQL Injection (SQLi), Cross-Site
                    Scripting (XSS), and Cross-Site Request Forgery (CSRF).</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>Frontend Lead:</strong> Took full responsibility for the Front-end module of
                    the project. Developed a responsive and mobile-friendly user interface using HTML,
                    CSS, and Bootstrap 5.3.</li>
                <li><strong>UI/UX Design & Implementation:</strong> Designed and coded key UI components
                    such as the navigation bar, product cards, modal forms, and user dashboards. I
                    actively tailored the interface layout and functionalities to suit the distinct
                    views of guests, members, and admins.</li>
                <li><strong>Backend Development:</strong> Developed the backend using PHP 8.1, handling
                    RESTful APIs and exchanging data dynamically in JSON format. Implemented the
                    database schema and server-side logic for user authentication and email
                    communications.</li>
                <li><strong>Dynamic Interactivity:</strong> Implemented dynamic product displays,
                    filtering functions, and interactive elements using JavaScript and jQuery to enhance
                    user engagement. Integrated AJAX to ensure smooth, real-time data rendering for the
                    shopping cart and search features.</li>
                <li><strong>User Experience Optimization:</strong> Contributed to the application's SEO
                    by structuring HTML tags properly, optimizing content layout, and ensuring an
                    accessible, user-friendly journey from product discovery to checkout.</li>
            </ul>
        `
    },
    {
        id: 4,
        pdf: "https://drive.google.com/file/d/1j-w8VosVv3aEA5BCRtjqcME3vpPwppzN/preview",
        title: "2D Cutting Stock Optimization",
        domain: "Algorithm Development",
        desc: "Modeled and solved 2DCSP using a heuristic FFD algorithm and simulation in Python to minimize waste.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-square-root-variable",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p>The <strong>2D Cutting Stock Problem Optimization</strong> project models and solves the
                2D Cutting Stock Problem (2D-CSP) to optimize the cutting of large rectangular raw
                materials into smaller pieces. The system aims to minimize material waste, reduce the
                number of stocks used, and lower overall production costs. As a practical application, a
                realistic case study in the garment industry was designed to evaluate how a clothing
                company can optimally cut fabric rolls into various apparel sizes while strictly meeting
                order demands.</p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Mathematical Modeling:</strong> Formulated the problem using Integer Linear
                    Programming (ILP) models to define objective functions and system constraints.</li>
                <li><strong>Algorithms:</strong> Implemented both exact methods (Dynamic Programming)
                    and heuristic approaches (First-Fit Decreasing and Greedy algorithms) to balance
                    optimal results with computational efficiency.</li>
                <li><strong>Simulation & Tools:</strong> Developed and executed the simulation using
                    Python within the <code>gym_cutting_stock</code> environment.</li>
                <li><strong>Evaluation Metrics:</strong> Assessed system performance using
                    multi-criteria key performance indicators: Waste (material utilization efficiency),
                    Time (execution speed), Economy (stock preservation rate), and Fulfill (order
                    completion reward).</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>Leadership & Application Design:</strong> Served as the Team Leader and
                    architected the garment industry case study to bridge theoretical mathematical
                    models with real-world manufacturing challenges.</li>
                <li><strong>Algorithm Engineering:</strong> Specifically responsible for researching,
                    designing, and writing the code for the First-Fit Decreasing (FFD) algorithm in
                    Python to handle the cutting logic efficiently.</li>
                <li><strong>System Evaluation & Analysis:</strong> Conducted a comprehensive technical
                    evaluation across multiple episodes, benchmarking the FFD algorithm against Dynamic
                    Programming, Greedy, and Random approaches. Analyzed the trade-offs in waste,
                    execution time, and economy to finalize the optimal strategy in the technical
                    report.</li>
            </ul>
        `
    },
    {
        id: 5,
        pdf: "https://drive.google.com/file/d/1zD7WsolNfqZRyrj8_hriaMztvcolZG3B/preview",
        title: "Smart Study Space Management",
        domain: "Full Stack Development",
        desc: "Full-stack system using MVC architecture, PHP backend, RESTful APIs, and frontend with AJAX and Bootstrap.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-server",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>Smart Study Space Management and Reservation System</strong> is a comprehensive
                web-based platform developed to optimize the utilization of study facilities at Ho Chi
                Minh City University of Technology (HCMUT). The application provides students and staff
                with an intuitive tool to view real-time room availability and reserve various types of
                study spaces, including individual desks, mentoring rooms, and group study rooms. Beyond
                booking, the system features an interactive community forum, a robust administrative
                dashboard for facility management, and IoT integration that automates check-ins via QR
                codes and updates room statuses using smart sensors.</p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Architecture:</strong> Model-View-Controller (MVC) architectural pattern to
                    ensure code clarity, maintainability, and scalability.</li>
                <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, AJAX, jQuery 3.6, and
                    Bootstrap 5.3 to deliver a responsive and user-friendly experience, alongside
                    tinyMCE for rich text editing. Wireframes and UI mockups were designed using Figma.
                </li>
                <li><strong>Backend & Deployment:</strong> PHP 8.1 handling RESTful APIs, with data
                    exchanged dynamically in JSON format. The system was deployed on a local XAMPP
                    environment utilizing an Apache server.</li>
                <li><strong>System Analysis & Design:</strong> UML modeling for system behavior
                    analysis, including Use Case, Sequence, Activity, State-chart, and Class diagrams.
                </li>
                <li><strong>Integrations:</strong> HCMUT_SSO for secure, centralized user authentication
                    and PHPMailer for automated email communications.</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>System Specification & Modeling:</strong> Authored the detailed project
                    specifications, defining both non-interactive functional and non-functional
                    requirements. Modeled system behavior and logic by designing the overall Use Case
                    diagrams and State-chart diagrams.</li>
                <li><strong>Backend Development (Controllers)</strong> Engineered the core backend
                    architecture by developing the Controllers module in PHP, routing user requests, and
                    orchestrating data flow between the Models and Views via RESTful APIs.</li>
                <li><strong>Core Feature Implementation:</strong> Researched and fully implemented key
                    system functionalities, including the Authentication module (integrating HCMUT_SSO
                    and Admin/Staff login workflows), the Real-time Room Status tracking feature, and
                    the interactive Forum system.</li>
                <li><strong>Frontend & UI Design:</strong> Created the visual designs and developed the
                    frontend interfaces for the Home page, Forum, and Personal Account tabs, while also
                    providing active support for the broader frontend integration.</li>
            </ul>
        `
    },
    {
        id: 6,
        pdf: "https://drive.google.com/file/d/1EYjZBCuu4rpNnGZK1fahHy3szsS3_yrs/preview",
        title: "IoT Microclimate Monitoring System",
        domain: "Smart Agriculture / IoT",
        desc: "IoT system monitoring temperature, humidity, and light with ESP32 edge-filtering and Firebase cloud integration.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-leaf",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>IoT Microclimate Monitoring System for Greenhouses</strong> is a combined
                hardware and software solution designed to automate environmental monitoring in smart
                agriculture. The system continuously collects real-time data on temperature, humidity,
                and light intensity, and transmits it to a cloud platform. Accompanied by a Web
                Dashboard application, it allows users to visually monitor environmental changes through
                charts and remotely configure device parameters such as WiFi credentials, data
                transmission cycles, and device IDs. This application addresses the labor-intensive
                issue of manual measurements while generating a crucial historical dataset for analyzing
                and optimizing crop yields.</p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Hardware & Firmware:</strong> Developed on the ESP32 YOLO UNO
                    microcontroller using PlatformIO. Environmental data is gathered via DHT11/DHT20 and
                    BH1750 sensors utilizing the I2C communication protocol.</li>
                <li><strong>System Architecture:</strong> Implemented a Finite State Machine (FSM) model
                    combined with a Real-Time Operating System (FreeRTOS) to manage independent tasks,
                    ensuring smooth transitions between network setup (AP Mode), WiFi/Cloud connection,
                    and sensor operations.</li>
                <li><strong>Data Processing:</strong> Applied a Moving Average Filter algorithm to
                    eliminate physical signal noise at the edge. Integrated a "Store and Forward"
                    mechanism to temporarily buffer data offline during network outages and
                    automatically synchronize it to the Cloud upon reconnection.</li>
                <li><strong>Cloud & Frontend:</strong> Utilized Google Firebase's serverless ecosystem
                    (Realtime Database, Firestore, Authentication) for storage and bi-directional
                    communication via HTTPS/WSS. The robust web interface was built using TypeScript,
                    ReactJS (v19), Redux Toolkit, Material UI, and Chart.js.</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>Firmware Design & FSM Architecture:</strong> Participated in developing and
                    programming the embedded software based on the FSM architecture, ensuring the
                    device's ability to auto-recover connections and broadcast an Access Point for
                    initial network configuration by users.</li>
                <li><strong>Optimization & Data Integrity:</strong> Contributed to the implementation of
                    the Offline Buffering mechanism and noise-filtering algorithms, enabling the device
                    to operate reliably without data loss, even in environments with unstable WiFi
                    signals.</li>
                <li><strong>Full-stack IoT Integration:</strong> Acted as the bridge connecting the
                    communication flow between the ESP32 hardware and the Web application via Firebase.
                    This enabled the system to update real-time metrics with low latency and receive
                    remote configuration commands directly from the Dashboard.</li>
            </ul>
        `
    },
    {
        id: 7,
        pdf: "https://drive.google.com/file/d/1Nkcge8neDx6xa9dIrwzvTIboB2EcxuSe/preview",
        title: "IoT End-to-End Encryption System",
        domain: "Embedded Security",
        desc: "Application-Layer E2EE securing IoT MQTT transmissions from edge node to client using AES-128.",
        github: "https://github.com/phamgialuong",
        icon: "fas fa-shield-alt",
        detailedDesc: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>IoT End-to-End Encryption System</strong> is a security-focused project designed
                to protect sensitive sensor data in Internet of Things (IoT) environments. Recognizing
                the vulnerabilities of transmitting plain text over public MQTT brokers, the system
                implements an Application-Layer End-to-End Encryption (E2EE) solution. It secures data
                from the edge device (an ESP32 gathering temperature and humidity metrics) all the way
                to the end-user's client application, effectively mitigating eavesdropping attacks.
                Additionally, it features a Captive Portal for dynamic WiFi configuration. This
                lightweight security architecture is highly applicable to smart homes, smart cities, and
                other resource-constrained IoT applications where traditional TLS/SSL handshakes may be
                too computationally expensive.</p>

            <h4>2. Technologies & Techniques</h4>
            <ul>
                <li><strong>Hardware & Protocols:</strong> ESP32 Development Board, DHT11 Sensor, MQTT
                    (via HiveMQ Public Broker), and WiFi (WPA2-PSK).</li>
                <li><strong>Cryptography:</strong> Symmetric encryption using AES-128 in CBC mode,
                    PKCS#7 Padding, and Base64 Encoding to ensure data confidentiality and transmission
                    integrity over text-based protocols.</li>
                <li><strong>Firmware & Software:</strong> C/C++ via PlatformIO and the Arduino framework
                    for the embedded node. Python is used for the subscriber client application.</li>
                <li><strong>Libraries & Tools:</strong> <code>mbedtls</code> for hardware-accelerated
                    encryption on the ESP32, ArduinoJson, PubSubClient, pycryptodome (Python), and
                    Wireshark for network traffic analysis and vulnerability testing.</li>
            </ul>

            <h4>3. My Contributions</h4>
            <ul>
                <li><strong>Embedded Security Implementation:</strong> Programmed the ESP32 firmware in
                    C/C++, utilizing the <code>mbedtls</code> library to implement AES-128-CBC
                    encryption, PKCS#7 padding, and Base64 encoding directly at the edge before MQTT
                    transmission.</li>
                <li><strong>Captive Portal Development:</strong> Designed and integrated a fail-safe
                    Captive Portal (Access Point mode with a lightweight Web Server) to allow dynamic
                    configuration of WiFi credentials, eliminating the critical risk of hardcoded
                    passwords in the firmware.</li>
                <li><strong>System Testing & Validation:</strong> Developed the Python client
                    application to handle real-time MQTT subscription, Base64 decoding, and AES
                    decryption. Conducted rigorous penetration testing using Wireshark to sniff network
                    traffic, successfully validating the system's defense against eavesdropping attacks
                    compared to a baseline unencrypted setup.</li>
            </ul>
        `
    }
];
