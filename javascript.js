document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll animation for services and about sections
    const servicesSection = document.getElementById("services");
    const aboutSection = document.getElementById("about");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === servicesSection) {
                    servicesSection.classList.add("visible");
                }
                if (entry.target === aboutSection) {
                    aboutSection.classList.add("visible");
                }
            }
        });
    }, { threshold: 0.3 });

    observer.observe(servicesSection);
    observer.observe(aboutSection);

    // Add event listeners for the entire service div
    document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', function () {
            const serviceName = this.getAttribute('data-service');
            document.getElementById('service-select').value = serviceName;  // Set the service in the booking form
            window.scrollTo({
                top: document.getElementById('booking').offsetTop,  // Scroll to the booking section
                behavior: 'smooth'
            });
        });
    });
 
     
  
   

});

// هذا الكود يظهر الزر لما المستخدم يهبط في الصفحة
    window.onscroll = function() {
         const scrollBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
       }   else {
      scrollBtn.style.display = "none";
       }
    };
  
  // هذا الكود يرجع المستخدم لأعلى الصفحة عند الضغط على الزر
    document.addEventListener("DOMContentLoaded", () => {
        const scrollBtn = document.getElementById("scrollTopBtn");
        scrollBtn.addEventListener("click", function () {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
      });
    });


    document.addEventListener("DOMContentLoaded", function () {
        const serviceBoxes = document.querySelectorAll(".service");
        const serviceSelect = document.getElementById("service-select");
      
        serviceBoxes.forEach((box) => {
          box.addEventListener("click", () => {
            const serviceName = box.getAttribute("data-service");
      
            // نحاول نختار الخيار المناسب حسب الاسم
            for (let option of serviceSelect.options) {
              if (option.textContent.includes(serviceName)) {
                option.selected = true;
                break;
              }
            }
      
            // نمر للأسفل إلى الفورم
            document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
          });
        });
      });