const experienceData = [
  {
    id: 1,
    logo: "https://cdn.prod.website-files.com/6481bf7bc1b01843dd1ced2b/6626226239d9ccc4932b4e43_FPT%20Software-p-1600.png",
    role: {
      en: "Front-end Developer Intern",
      vi: "Thực tập sinh Lập trình Front-end",
    },
    company: {
      en: "FPT Software",
      vi: "Công ty TNHH Phần Mềm FPT",
    },
    date: {
      en: "June 2025 – August 2025",
      vi: "Tháng 6, 2025 – Tháng 8, 2025",
    },
    descItems: [
      {
        en: "Contributed to the development of a web-based Supply Chain Management system using React, TypeScript, and Vite within an Agile/Scrum environment.",
        vi: "Đóng góp phát triển hệ thống Quản lý Chuỗi Cung ứng nền tảng Web sử dụng React, TypeScript và Vite trong môi trường làm việc Agile/Scrum.",
      },
      {
        en: "Designed UI/UX wireframes and prototypes using Figma to ensure intuitive user experiences.",
        vi: "Thiết kế wireframes và nguyên mẫu UI/UX trên Figma, đảm bảo mang lại trải nghiệm người dùng trực quan, thân thiện.",
      },
      {
        en: "Built responsive and interactive user interfaces leveraging Material UI (MUI), Redux Toolkit, and React Hook Form.",
        vi: "Xây dựng giao diện người dùng tương tác, reponsive bằng việc tận dụng Material UI (MUI), Redux Toolkit và React Hook Form.",
      },
      {
        en: "Implemented secure authentication and developed complex management modules (Users, Factories, Departments, Devices) integrating RESTful APIs via Axios and TanStack Query.",
        vi: "Triển khai xác thực bảo mật và phát triển các khối module quản lý dữ liệu phức tạp (Người dùng, Phân xưởng, Phòng ban, Thiết bị), tích hợp RESTful API qua Axios và TanStack Query.",
      },
      {
        en: "Ensured high-quality code and system stability by conducting unit and integration tests with Vitest, participating in code reviews, and utilizing Git/GitLab for version control.",
        vi: "Đảm bảo mã nguồn chất lượng cao và tính ổn định của hệ thống nhờ thực hiện unit/integration test qua Vitest, đánh giá code review và ứng dụng Git/GitLab để quản lý phiên bản.",
      },
    ],
  },
];

const projectsData = [
  {
    id: 1,
    pdf: "https://drive.google.com/file/d/1jNXYlzB2hXnkRHtavNDsObUPugyt8slR/preview",
    title: {
      en: "Temperature Detection Device",
      vi: "Thiết Bị Cảm Biến Nhiệt Độ",
    },
    domain: {
      en: "Embedded Hardware",
      vi: "Phần Cứng Nhúng",
    },
    desc: {
      en: "Designed heat sensing and alarm functionalities with Altium Designer and Proteus8, including schematic, PCB layout, and soldering.",
      vi: "Thiết kế chức năng cảm biến nhiệt và cảnh báo bằng Altium Designer và Proteus8, bao gồm vẽ nguyên lý, board mạch và hàn linh kiện.",
    },
    github: "https://github.com/phamgialuong",
    icon: "fas fa-microchip",
    detailedDesc: {
      en: `
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p><strong>Thiết bị Cảm biến Nhiệt độ</strong> là một hệ thống thiên về phần cứng được
                thiết kế để đo và theo dõi chính xác nhiệt độ môi trường lẫn vật thể. Thiết bị đo nhiệt độ 
                cơ thể hoặc vật thể không tiếp xúc bằng cảm biến hồng ngoại, cùng với khả năng theo dõi nhiệt độ môi trường. 
                Nó bao gồm hệ thống cảnh báo đa cấp kích hoạt đèn LED cảnh báo nhiệt độ cao (ví dụ: môi trường trên 30°C) và 
                phát ra âm thanh báo động qua còi (buzzer) trong trường hợp quá nhiệt (trên 65°C, ví dụ: hỏa hoạn). 
                Thông số nhiệt độ được hiển thị theo thời gian thực trên màn hình LCD 1602.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Phần cứng & Linh kiện:</strong> Hệ thống tích hợp cảm biến hồng ngoại MLX90614, 
                    cảm biến nhiệt độ đo lường chính xác LM35 và vi điều khiển ATmega328P. Mạch điện sử dụng các 
                    linh kiện đa dạng bao gồm Op-Amp (TL082CP) cho so sánh điện áp tương tự, MOSFET (IRF3205) để đóng 
                    cắt tải dòng lớn, BJT (2N5551), Diode và một mạch hạ áp LM2596 để cấp nguồn ổn định.</li>
                <li><strong>Thiết kế & Chế tạo PCB:</strong> Bản vẽ sơ đồ nguyên lý và layout PCB được thiết kế 
                    kỹ lưỡng bằng Altium Designer. Thiết kế tuân thủ Design Rule Checks (DRC) và áp dụng tính 
                    toán độ rộng đường mạch (trace width) để đảm bảo đáp ứng dòng lên tới 3A.</li>
                <li><strong>Thiết kế hệ thống:</strong> Ứng dụng requirement engineering để định nghĩa rõ ràng
                    các yêu cầu tính năng và phi tính năng.</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Quản lý Dự án & Tài liệu:</strong> Lãnh đạo nhóm xuyên suốt vòng đời phát triển phần cứng, 
                    phân chia công việc, và viết báo cáo kỹ thuật phân tích các yêu cầu hệ thống.</li>
                <li><strong>Thiết kế Mạch Analog:</strong> Phát triển khối cảm biến nhiệt độ môi trường sử dụng LM35.
                    Thiết kế mạch so sánh chuyên dụng bằng Op-Amp nhằm kích hoạt LED và còi theo ngưỡng điện áp chính xác 
                    mà không phụ thuộc hoàn toàn vào xử lý bằng code vi điều khiển.</li>
                <li><strong>PCB & Lắp ráp:</strong> Đảm nhận nhiệm vụ chính vẽ sơ đồ mạch nguyên lý và phay mạch in
                    trên Altium Designer. Tự tay thực hiện kỹ năng hàn cắm các linh kiện lên board PCB, lắp ráp sản 
                    phẩm hoàn thiện và thực thi kiểm thử.
                </li>
            </ul>
        `,
    },
  },
  {
    id: 2,
    pdf: "https://drive.google.com/file/d/1qY3yJsNnhqR-R-nd7vGkVwVmtNhFCY7o/preview",
    title: {
      en: "Traffic Light Control System",
      vi: "Hệ Thống Đèn Giao Thông",
    },
    domain: {
      en: "Embedded Software",
      vi: "Phần Mềm Nhúng",
    },
    desc: {
      en: "Implemented on STM32F103RB using state machines, non-preemptive scheduler, and I2C LCD interfacing.",
      vi: "Triển khai trên lõi STM32F103RB bằng Máy trạng thái ngữ cảnh, bộ lập lịch Non-Preemptive, giao tiếp LCD qua I2C.",
    },
    github: "https://github.com/PhamGiaLuong/CO3009-TrafficLightControlSystem",
    icon: "fas fa-traffic-light",
    detailedDesc: {
      en: `
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p><strong>Hệ thống Đèn Giao thông</strong> là một dự án lập trình điện toán nhúng mô phỏng
                và quản lý hoạt động tại một ngã tư thực tế. Hệ thống điều khiển hai làn đường và sở hữu
                ba luồng vận hành riêng rẽ: Tự động (chạy theo bộ đếm giờ thiết lập sẵn), Thủ công
                (cho phép điều khiển lưu thông bằng nút nhấn), và Điều chỉnh (Modiy - hỗ trợ thiết lập số giờ
                chờ). Hệ thống mô phỏng một bài toán thực tiễn quan trọng trong hạ tầng điều khiển đô thị.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Phần cứng & Lập trình:</strong> Xây dựng bằng ngôn ngữ C trên lõi vi điều 
                    khiển STM32F103RB (Kiến trúc ARM Cortex-M3).</li>
                <li><strong>Kiến trúc hệ thống:</strong> Hệ thống hoạt động theo mô hình luồng Máy trạng 
                    thái (FSM) hỗ trợ quản lý xuyên suốt quá trình chuyển giao phức tạp qua ba chế độ.</li>
                <li><strong>Hệ thống tác vụ:</strong> Lập trình thiết kế giải thuật lên lịch (Non-preemptive Scheduler)
                    bằng mảng cấu trúc danh sách liên kết đôi kết hợp kỹ thuật dùng bể nhớ tĩnh (freeList). Kiến
                    trúc này loại bỏ trễ thời gian lặp vòng (Độ phức tạp O(1)), dập bỏ hiện tượng ngắt lồng nhau
                    và tối ưu cực độ hiệu suất thực thi vòng lặp chính.</li>
                <li><strong>Giao thức & Giải thuật:</strong> Khởi tạo giao tiếp màn hình LCD 16x2 bằng giao
                    thức I2C kết hợp ngắt timer đếm thời gian. Lập trình giải thuật lọc rung phím chuyên sâu 
                    bằng buffer dịch bit thay thế kĩ thuật sleep cơ bản, bắt được thao tác nhấn giữ phím 1s/2s tự động.</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Thiết kế Kiến trúc Phần mềm:</strong> Khảo sát và thiết kế lưu đồ FSM toàn diện và viết kịch
                    bản biên dịch Firmware bằng ngôn ngữ C.</li>
                <li><strong>Phát triển Bộ Lập Lịch (Scheduler):</strong> Chủ động nghiên cứu giải thuật quản lý task thời
                    gian thực dựa trên nền tảng Data Structure thay vì dùng các thư viện OS quá cồng kềnh,
                    nắm rõ giới hạn băng thông RAM/Flash của dòng STM32.</li>
                <li><strong>Tích hợp Giao tiếp Phần cứng:</strong> Viết Driver để vận hành I2C hiển thị thông số LCD, kết 
                    nối ngoại vi nút và đèn bằng GPIO, hoàn thiện xử lý interrupt button.</li>
            </ul>
        `,
    },
  },
  {
    id: 3,
    pdf: "https://drive.google.com/file/d/12FzeA98fRu9ywYC-iqeOyNwLqWXT70bA/preview",
    title: {
      en: "E-Commerce Fashion Website",
      vi: "Nền tảng Thương mại Điện tử Thời trang",
    },
    domain: {
      en: "Front-end Development",
      vi: "Phát triển Frontend",
    },
    desc: {
      en: "Developed responsive UI using Bootstrap 5.3 and jQuery with dynamic product displays and filtering.",
      vi: "Xây dựng trải nghiệm UI Reponsive với Bootstrap 5.3 & jQuery với tính năng tìm kiếm bộ lọc Ajax Động.",
    },
    github: "https://github.com/PhamGiaLuong/CO3049-FashionBusinessWebsite",
    icon: "fas fa-laptop-code",
    detailedDesc: {
      en: `
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p><strong>Nền tảng Thương mại Điện tử Thời trang</strong> là hệ thống cửa hàng đa phương tiện
                mang tới trải nghiệm mua sắm mượt mà dành riêng cho khách hàng mua quần áo. Ứng dụng cung 
                cấp đầy đủ tính năng tra cứu mã hàng, bộ lọc đa luồng, giỏ thanh toán điện tử cũng như theo
                dõi tiến độ đơn hàng. Đi sâu vào bên trong, hệ thống vận hành một bảng điều khiển Admin toàn
                diện giúp hỗ trợ kiểm kê nhân sự, định mức giá thành, thống kê doanh thu và quản lý kho cho từng roles.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Giao diện:</strong> Sử dụng lưới HTML, CSS, JavaScript, jQuery (v3.7.1) và 
                    thư viện dựng giao diện Bootstrap (v5.3.3) nhằm xây dựng kiến trúc Responsive Grid cross-browser đa hệ.</li>
                <li><strong>Backend & Database:</strong> PHP cho xử lý Logic Máy chủ, tích hợp sâu cùng MySQL cấu trúc hóa CSDL
                    (quản trị thực thể quan hệ, bảng người dùng tự động, kho dữ liệu và giỏ hàng online). Deploy
                    máy cục bộ với nền tảng LAMP/XAMPP.</li>
                <li><strong>Mượt mà & Trực quan:</strong> Tự động tải dữ liệu luồng bất đồng bộ (AJAX) không gây hiện
                    tượng lag load trắng trang thông thường. Nghiên cứu thực tế tối ưu hóa từ khóa Máy chủ tìm kiếm SEO trên HTML
                    và Friendly URLs hỗ trợ thuật toán Web crawler.</li>
                <li><strong>Kỹ thuật Bảo mật:</strong> Code hệ thống bằng sự chú tâm triệt để vào các kỹ năng lập
                    trình phòng thủ chống SQLi (chuỗi tiêm nội suy), Lọc XSS đa tầng và bảo vệ HTTP Token Form CSRF.</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Frontend Lead:</strong> Đảm nhiệm phân luồng Module Client Render chính cho
                    toàn hệ thống, cung cấp Mobile First Layout trên nền CSS/Bootstrap.</li>
                <li><strong>Xây dựng UI/UX:</strong> Lên bản vẽ và mã hóa các cấu thành điều hướng Navigation, cấu trúc
                    thẻ Product theo giá, hệ form Modal Pop-up tương tranh và hệ Dashboard người dùng tĩnh.</li>
                <li><strong>Gói Kiến trúc Backend:</strong> Đẩy Logic hệ PHP 8.1 và gói thành các RESTful Node 
                    vào CSDL. Xây sơ đồ thực thể logic quan hệ RDBMS. Triển khai phân quyền Cookie/Session Login Admin/Guest.</li>
                <li><strong>Dynamic Interactivity:</strong> Viết engine Ajax Filter Data liên kết tới Backend Controller
                    vẽ danh mục hàng thời trang bằng các cú pháp Fetch/XHR JavaScript và jQuery.</li>
                <li><strong>Trải nghiệm SEO:</strong> Áp dụng chuẩn HTML5 Semantic tối đa, tăng chỉ số load và luồng Flow thanh 
                    toán thuận mắt dễ chịu, đạt điểm Lighthouse tốt.</li>
            </ul>
        `,
    },
  },
  {
    id: 4,
    pdf: "https://drive.google.com/file/d/1j-w8VosVv3aEA5BCRtjqcME3vpPwppzN/preview",
    title: {
      en: "2D Cutting Stock Optimization",
      vi: "Tối Ưu Bài Toán Cắt Nguyên Vật Liệu 2D",
    },
    domain: {
      en: "Algorithm Development",
      vi: "Nghiên cứu Giải Thuật",
    },
    desc: {
      en: "Modeled and solved 2DCSP using a heuristic FFD algorithm and simulation in Python to minimize waste.",
      vi: "Phát triển mô hình Bài Toán Cắt Nguyên Vật Liệu (2D-CSP) giải bằng giải thuật Heuristic FFD chạy mô phỏng trên Python.",
    },
    github: "https://github.com/PhamGiaLuong/CO2011-2DCuttingStockProblem",
    icon: "fas fa-square-root-variable",
    detailedDesc: {
      en: `
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p>Dự án <strong>Tối Ưu Quá Trình Cắt Gọt Nguyên Vật Liệu Xưởng (2DCSP)</strong> thiết lập mô
                hình bài toán Cắt Tấm 2D nhằm tối ưu hóa việc phân chia các tấm vật liệu lớn (tiêu chuẩn) 
                thành các khối hình chữ nhật nhỏ bé với kích thước cụ thể theo định mức yêu cầu. Hệ thống hướng 
                tới việc tối thiểu hóa vật liệu thừa (Waste), giảm số lượng phôi gốc cần lấy ra (Economy) và cắt
                giảm chi phí sản xuất tổng thể. Trong thực tế ứng dụng, một Case Study phân tích ngành công 
                nghiệp may mặc thực tiễn đã được thiết kế nhằm đánh giá xem làm thế nào một công ty quần áo có
                thể cắt phân loại vải vóc đáp ứng khắt khe mức nhu cầu đơn hàng.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Thiết lập Mô hình Toán Học:</strong> Xây dựng mô hình bài toán dưới dạng quy hoạch số
                    nguyên tuyến tính (Integer Linear Programming - ILP) xác lập các Hàm Mục tiêu đa điều kiện hệ.</li>
                <li><strong>Cấu trúc Giải thuật:</strong> Mã hóa các hướng giải Tuyệt đối Exact (bằng Dynamic
                    Programming) và Tiệm cận Heuristic (bằng các giải thuật First-Fit Decreasing - FFD, cũng như giải 
                    thuật Tham lam - Greedy algorithms) nhằm phân tích cán cân đánh đổi tối ưu - thời gian xử lý thực tiễn.</li>
                <li><strong>Mô phỏng & Đánh giá:</strong> Lập trình hệ thống mô phỏng đồ hoạ toàn bộ quá trình chia tách
                    vật liệu trên nền tảng ngôn ngữ Python, ứng dụng bộ env <code>gym_cutting_stock</code>.</li>
                <li><strong>Hệ tiêu chí:</strong> Căn cứ đánh giá hiệu suất hệ thống đa chỉ mục KPIs: Waste (Hiệu suất hao
                    phí), Time (Tốc độ mô phỏng số vòng lặp), Economy (Tỉ lệ cứu sống phôi cắt nguyên vẹn dư), và 
                    Fulfill (Điểm thưởng hoàn thành đơn hàng).</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Thiết kế & Chỉ huy Ứng dụng:</strong> Đứng vai trò Trưởng nhóm (Team Leader) phân bổ kiến trúc 
                    nghiên cứu quy mô cho Case Study may mặc từ những phương pháp trừu tượng toán lý sâu thành ứng dụng thực tế.</li>
                <li><strong>Thiết kế Giải thuật cốt lõi:</strong> Chịu trách nhiệm trực tiếp nghiên cứu luồng logic,
                    code và tối ưu thuật toán giảm dần ưu tiên (FFD) bằng tập đối tượng Python, đưa ra quy trình chia lô 
                    hiệu suất cao.</li>
                <li><strong>Phân tích chuyên sâu:</strong> Chạy thử nghiệm mảng Episode khổng lồ Benchmark so sánh các giải
                    thuật Exact với Heuristics. Thiết lập thống kê sự suy hao thông số đánh đổi thời gian và hiệu năng vật chất 
                    tìm ra điểm tối ưu quy trình nhất cho tài liệu báo cáo nghiên cứu đồ án cuối kì.</li>
            </ul>
        `,
    },
  },
  {
    id: 5,
    pdf: "https://drive.google.com/file/d/1zD7WsolNfqZRyrj8_hriaMztvcolZG3B/preview",
    title: {
      en: "Smart Study Space Management",
      vi: "Hệ thống Quản lý Không gian Học tập Thông minh",
    },
    domain: {
      en: "Full Stack Development",
      vi: "Phát triển Full Stack",
    },
    desc: {
      en: "Full-stack system using MVC architecture, PHP backend, RESTful APIs, and frontend with AJAX and Bootstrap.",
      vi: "Xây dựng nền tảng Đặt chỗ Sinh viên bằng mô hình MVC, máy chủ PHP cấp API RESTful & AJAX Frontend.",
    },
    github: "https://github.com/PhamGiaLuong/CO3031-SmartStudySpace",
    icon: "fas fa-server",
    detailedDesc: {
      en: `
            <h4>1. Project Overview & Applications</h4>
            <p><strong>Smart Study Space Management and Reservation System</strong> is a comprehensive
                web-based platform developed to optimize the utilization of study facilities at Ho Chi
                Minh City University of Technology - VNUHCM (HCMUT). The application provides students and staff
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p><strong>Hệ thống Đặt Trực Tuyến Không Gian Học Tập Thông Minh</strong> là nền tảng quản lý 
                tài nguyên cơ sở vật chất toàn diện trên WEB tối ưu hoá quy trình triển khai không gian phòng tự học/mượn phòng 
                dành riêng cho sinh viên trường Đại học Bách khoa - ĐHQG-HCM (HCMUT). Giao diện ứng dụng hỗ trợ tính năng tra cứu thông 
                minh thời gian thực trực quan đối với tình trạng các loại không gian khác nhau: Tự học Nhóm, phòng Kỹ năng 
                và điểm tự học tự do tĩnh. Song song tính năng check-in QR Code chống quá tải, hệ IoT kết nối nhận 
                dữ liệu từ xa cập nhật về Dashboard để nhân viên Bách Khoa linh hoạt tinh chỉnh, tương tác mạng xã hội thu nhỏ.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Mô hình Hệ thống:</strong> Cấu trúc Máy chủ theo khung Model-View-Controller (MVC) kinh điển
                    bảo mật vòng đời quy trình và khả năng dễ dàng Scalability.</li>
                <li><strong>Thiết kế Giao diện:</strong> Tận dụng HTML, CSS, JavaScript, luồng AJAX bất đồng bộ ngầm, 
                    jQuery 3.6 chuyên biệt cho thiết bị thông minh qua BootStrap 5.3 và tinyMCE (nền tảng tạo định 
                    dạng soạn chữ mở rộng). Hệ prototype bản nháp UI từ Figma.
                </li>
                <li><strong>Kiến trúc & Cơ Sở Dữ liệu:</strong> Backend viết bằng chuẩn PHP 8.1 quy luồng xử lý gói về 
                    các RESTful APIs dạng trao đổi JSON. Database trên XAMPP và Máy phát Apache Server.</li>
                <li><strong>Đặc Tả Phần Mềm:</strong> Cắt lớp đồ hoạ kiến trúc Unified Modeling Language (UML) cho bản
                    phân rã hoạt động hệ thống qua: Use Case, Sequence, Activity, State-chart, và Class Diagram tĩnh.
                </li>
                <li><strong>API Tích Hợp:</strong> Xác thực Cổng Login Trực Tuyến Bách Khoa (HCMUT_SSO CAS Service)
                    đấu nối luồng gửi xác nhận lịch đặt từ PHP Mailer Mail Trap.</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Đặc tả Hành vi Ứng dụng:</strong> Đứng ra khởi tạo toàn bộ kho tài liệu quy cách 
                    định vị tầm hoạt động của cả những hàm nghiệp vụ Functional/Non-functional khó nhất. Gói lược khảo 
                    Bản diễn họa Use Case Diagrams logic sơ bộ.</li>
                <li><strong>Phát triển Backend (Controllers):</strong> Giảm tải mã hoá trực tiếp, lập trình xương
                    sống phân rã luồng vào - ra Data luân phiên thông qua kiến trúc Router Controller Module trên lõi
                    ngôn ngữ PHP bằng hệ API nội hàm gửi HTTP.</li>
                <li><strong>Nghiên cứu Tính Năng Trọng Tâm:</strong> Xây dựng trực tiếp các cấu kiện phức tạp 
                    (Authenticate xác nhận Cổng BK_SSO phân tách Admin/Guest/Staff) và tạo biểu mẫu Status cập nhật thời 
                    gian thực trạng thái phòng ốc cho ban Hệ Mạng, quy hoạch diễn đàn Diễn đàn nội bộ.</li>
                <li><strong>Hỗ trợ Trải nghiệm Nhìn/Nhấn:</strong> Kiến tạo hệ thống Mockup Page, tham chiến phát
                    triển mã hiển thị giao diện Frontend các trang liên thông (Home, Personal Account Menu, Social Forum).</li>
            </ul>
        `,
    },
  },
  {
    id: 6,
    pdf: "https://drive.google.com/file/d/1EYjZBCuu4rpNnGZK1fahHy3szsS3_yrs/preview",
    title: {
      en: "IoT Microclimate Monitoring System",
      vi: "Hệ Thống Giám Sát Vi Khí Hậu IoT",
    },
    domain: {
      en: "Smart Agriculture / IoT",
      vi: "Nông Nghiệp Công Nghệ Cao / IoT",
    },
    desc: {
      en: "IoT system monitoring temperature, humidity, and light with ESP32 edge-filtering and Firebase cloud integration.",
      vi: "Hệ thống IoT theo dõi Nhiệt - Ẩm - Sáng tích hợp phân tích Edge-filtering trên ESP32 và Serverless Firebase.",
    },
    github:
      "https://github.com/PhamGiaLuong/CO3054-IoTMicroclimateMonitoringSystem",
    icon: "fas fa-leaf",
    detailedDesc: {
      en: `
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p><strong>Hệ thống Giám sát Vi Khí hậu Nhà kính IoT</strong> là một giải pháp thiết kế toàn diện
                nghiên cứu thực nghiệm Tự động hoá nông nghiệp. Hệ thống đảm nhiệm luồng vận hành lấy mẫu
                vật lý liên tục (Nhiệt - Ẩm - Cường độ ánh sáng) và streaming qua Đám mây mạng. Tích hợp sâu vào 
                hệ thống là Màn hình Web Dashboard Trung Tâm (bảng giám sát phân tích), cho phép người quản lý nhìn 
                được hệ biểu đồ trực quan và trực tiếp ra lệnh xuống ESP32 cấu hình lại chu kỳ lấy mẫu, đổi mạng WiFi 
                được gắn trên chip. Bài toán giảm thiểu đáng kể chi phí rà soát nhân công truyền thống, xây dựng
                kho dữ liệu lịch sử chuẩn hóa cho các nghiên cứu Trí tuệ Nhân tạo Phân tích nâng cao Năng suất mùa vụ
                trong tương lai.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Phần cứng & Firmware:</strong> Lập trình trên dòng lõi ESP32 YOLO UNO môi trường
                    PlatformIO. Nhúng Giao thức I2C thu nhận chuẩn xác cảm biến DHT11/DHT20 và Quang trở BH1750.</li>
                <li><strong>Kiến trúc Vận hành Nhúng:</strong> Viết chương trình ứng dụng Mô hình Trạng thái FSM cùng 
                    Hệ điều hành phần cứng FreeRTOS cấp phát luồng tác vụ (Multi-tasks), kiểm soát bảo trì chuyển dịch 
                    mượt mà các chu trình thiết lập mạng AP, Trạng Thái Lỗi, WiFi/Cloud và thu đổi biến số Sensor.</li>
                <li><strong>Data Processing Hậu kì:</strong> Thiết kế Thuật toán Lọc Trung bình động (Moving Average Filter)
                    triệt tiêu nhiễu ảo vật lý tại ngay tầng Edge Node. Ứng dụng cơ chế "Lưu Trữ & Giao Ước" bảo rào hầm
                    trú ẩn dữ liệu RAM/Flash Buffer phòng khi rớt mạng, tự động đồng bộ đẩy toàn bộ luồng lưu Data lên 
                    máy chủ tức thì khi kết nối lại thành công.</li>
                <li><strong>Cloud & Nền Tảng Web:</strong> Gói mô hình Backend Serverless nhờ sức mạnh từ Google Firebase
                    (Realtime Db, Firestore, Authentication), tạo kết nối Mạng Vạn Vật song phương HTTPs/WebSockets nhanh chớp mắt.
                    Phần Frontend điều khiển được gõ mới toàn diện qua TypeScript, React v19, Redux Toolkit, Material UI và Chart.js.</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Nghiên cứu Firmware FSM:</strong> Lập trình phần mềm lõi chip Nhúng cấu trúc FSM, đảm bảo khả năng
                    sống sót tự chẩn đoán (auto-reconnect) kết nối và cấp trạm Phát WiFi (SoftAP) cho Client thao tác.</li>
                <li><strong>Tối ưu Hoá Tài Nguyên:</strong> Tối ưu luồng xử lý Data Lọc nhiễu ngõ vào và viết giải pháp
                    Cống Data Offline (Offline Buffering), đảm bảo thiết bị hoạt động đáng tin cậy không hụt mẫu trong 
                    môi trường lưới WiFi bất ổn tại các trang trại rộng lớn.</li>
                <li><strong>Tích ợp System Full-Stack:</strong> Đảm nhiệm vị trí kết nối Full-flow giữa Tầng Hardware
                    ESP32 cùng Tầng Application Đám mây cấu hình Firebase. Nâng hiệu suất Push Notification cập nhật vi khí hậu 
                    xuống điểm ping cực thấp, đồng bộ lệnh Controller Web mượt mà.</li>
            </ul>
        `,
    },
  },
  {
    id: 7,
    pdf: "https://drive.google.com/file/d/1Nkcge8neDx6xa9dIrwzvTIboB2EcxuSe/preview",
    title: {
      en: "IoT End-to-End Encryption System",
      vi: "Hệ thống Bảo mật IoT E2EE",
    },
    domain: {
      en: "Embedded Security",
      vi: "Bảo Mật Hệ Thống Nhúng",
    },
    desc: {
      en: "Application-Layer E2EE securing IoT MQTT transmissions from edge node to client using AES-128.",
      vi: "Triển khai An ninh mã hóa E2EE tầng ứng dụng bảo vệ gói tin MQTT từ Client tới thiết bị Edge qua chuẩn mã hoá AES-128.",
    },
    github: "https://github.com/PhamGiaLuong/CO3069-IoT-Security",
    icon: "fas fa-shield-alt",
    detailedDesc: {
      en: `
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
        `,
      vi: `
            <h4>1. Tổng quan Dự án & Ứng dụng</h4>
            <p><strong>Hệ thống Bảo Mật IoT E2EE</strong> là một mạng lưới chuyên sâu
                chống lại các luồng đánh cắp dữ liệu cảm biến nhạy cảm trong hệ sinh thái IoT. Hiểu được rủi ro
                phơi bày gói tin dạng "văn bản thuần" (plain text) trên các cụm máy trạm MQTT cộng đồng, dự án ứng 
                dụng Mô hình Mã hóa Từ-Cạnh-Tới-Cạnh (Application-Layer End-to-End Encryption). Dữ liệu mã hóa tuyệt 
                đối từ hạt nhân (ESP32) tới thẳng Client Server của người dùng theo thời gian thực làm nản lòng mọi 
                chiến thuật nghe lén Eavesdropping. Ngoài ra, tích hợp cổng Captive Portal tuỳ biến thông minh thay 
                thế cơ chế cứng nhắc của Hard-coded WiFi trong chip. Kiến trúc an ninh nhẹ này vô cùng tối ưu cho 
                Smart Home tiết kiệm điện khi không cần sử dụng giao thức chuẩn TLS/SSL vốn tiêu tốn cực lớn tài nguyên 
                cấu hình điện toán thiết bị cấu hình yếu.</p>

            <h4>2. Công nghệ & Kỹ thuật</h4>
            <ul>
                <li><strong>Phần Cứng & Giao thức:</strong> Vi điều khiển ESP32, Cảm biến Nhiệt Ẩm DHT11, Hệ thống 
                    gửi nhận lệnh mạng MQTT (mạng HiveMQ TCP Public Broker) định dạng và sóng thu/phát WiFi (WPA2-PSK).</li>
                <li><strong>Mật Mã Học:</strong> Lập trình Thuật toán Mã hóa đối xứng luồng chuẩn AES-128 (Chế độ truyền móc 
                    xích CBC), kẹp nệm byte tiêu chuẩn mã PKCS#7, đẩy khối định dạng ký tự lên khung Base64 String bảo chứng toàn 
                    vẹn thông tin khi đi qua sóng WiFi truyền thông thuần túy.</li>
                <li><strong>Lõi Firmware:</strong> Giải thuật ngôn ngữ phần cứng C/C++ nền Arduino Framework/PlatformIO. Hệ App
                    đón Subscriber đầu ra chạy tiến trình ngôn ngữ xử lý Python.</li>
                <li><strong>Bổ Trợ Mở Rộng:</strong> Tích hợp thư viện Tăng Tốc Xử Lý Phần Cứng C (<code>mbedtls</code>) trên ESP32, 
                    ArduinoJson, PubSubClient, module pycryptodome đồ sộ trong Python, và thực chiến quét gói tin rò rỉ 
                    kiểm chứng với hệ WireShark (Sniffer Packet).</li>
            </ul>

            <h4>3. Đóng góp của Bản thân</h4>
            <ul>
                <li><strong>Triển Khai Firmware Lõi:</strong> Nắm quyền kiến trúc hệ bảo mật C/C++, đúc thuật toán 
                    biến số byte mã <code>mbedtls</code> (AES-128-CBC quy đổi nệm PKCS#7) xuất ra trạm viễn thông ở định dạng 
                    được Encoded Base64 String - giấu kín payload hoàn toàn khỏi mạng nội bộ.</li>
                <li><strong>Lập Trình Trí Tuệ Mạng Captive Portal:</strong> Đi sâu khai thác Cổng Không Gian Xác Thực mềm,
                    phủ sóng AP và dựng Server Web cục bộ nội vi thiết bị thu nạp Credential WiFi an toàn. Đánh sập rủi ro de-compile 
                    ngược source đọc cấu hình cứng pass truyền thống.</li>
                <li><strong>Penetration Testing An Toàn:</strong> Lập Code Server Python trực chiến trích xuất ngầm 
                    lô tín hiệu MQTT thời gian thực. Bóc tách String qua Base64 Decoder và luồng giải mật AES.
                    Chủ động hóa thân thành Hacker nghe lén (Man-in-the-Middle) xài luồng phân tích Wireshark chặn cửa xả hệ thống, 
                    nâng xác suất phòng vệ tuyệt đối trước mọi kẻ tấn công ngoại vi bắt sóng WiFi.</li>
            </ul>
        `,
    },
  },
];
