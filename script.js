// document.addEventListener("DOMContentLoaded", () => {
//   // Mobile menu toggle
//   const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
//   const navLinks = document.querySelector(".nav-links")

//   if (mobileMenuBtn) {
//     mobileMenuBtn.addEventListener("click", () => {
//       navLinks.classList.toggle("show")

//       // Toggle the hamburger to X
//       const spans = mobileMenuBtn.querySelectorAll("span")
//       spans[0].classList.toggle("rotate-down")
//       spans[1].classList.toggle("fade-out")
//       spans[2].classList.toggle("rotate-up")
//     })
//   }

//   // Testimonial slider functionality
//   const testimonials = document.querySelectorAll(".testimonial")
//   const dots = document.querySelectorAll(".dot")
//   const prevBtn = document.querySelector(".prev")
//   const nextBtn = document.querySelector(".next")

//   if (testimonials.length && dots.length) {
//     let currentSlide = 0

//     // Function to update the slider
//     function updateSlider() {
//       // Update testimonial position
//       testimonials.forEach((testimonial, index) => {
//         testimonial.style.transform = `translateX(${100 * (index - currentSlide)}%)`
//       })

//       // Update dots
//       dots.forEach((dot, index) => {
//         dot.classList.toggle("active", index === currentSlide)
//       })
//     }

//     // Initialize slider
//     updateSlider()

//     // Event listeners for dots
//     dots.forEach((dot, index) => {
//       dot.addEventListener("click", () => {
//         currentSlide = index
//         updateSlider()
//       })
//     })

//     // Event listeners for prev/next buttons
//     if (prevBtn && nextBtn) {
//       prevBtn.addEventListener("click", () => {
//         currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length
//         updateSlider()
//       })

//       nextBtn.addEventListener("click", () => {
//         currentSlide = (currentSlide + 1) % testimonials.length
//         updateSlider()
//       })
//     }

//     // Auto-advance the slider every 5 seconds
//     setInterval(() => {
//       currentSlide = (currentSlide + 1) % testimonials.length
//       updateSlider()
//     }, 5000)
//   }

//   // Add to cart functionality
//   const addToCartButtons = document.querySelectorAll(".add-to-cart")
//   const cartCount = document.querySelector(".cart-count")

//   if (addToCartButtons.length && cartCount) {
//     let count = 0

//     addToCartButtons.forEach((button) => {
//       button.addEventListener("click", function () {
//         count++
//         cartCount.textContent = count

//         // Animation for button
//         this.textContent = "Added!"
//         this.style.backgroundColor = "#4CAF50"

//         setTimeout(() => {
//           this.textContent = "Add to Cart"
//           this.style.backgroundColor = ""
//         }, 1000)
//       })
//     })
//   }

//   // Smooth scrolling for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault()

//       const targetId = this.getAttribute("href")
//       if (targetId === "#") return

//       const targetElement = document.querySelector(targetId)
//       if (targetElement) {
//         targetElement.scrollIntoView({
//           behavior: "smooth",
//         })
//       }
//     })
//   })

//   // Newsletter form submission
//   const newsletterForm = document.querySelector(".newsletter-form")

//   if (newsletterForm) {
//     newsletterForm.addEventListener("submit", function (e) {
//       e.preventDefault()

//       const emailInput = this.querySelector('input[type="email"]')
//       const email = emailInput.value

//       if (email) {
//         // In a real application, you would send this to your server
//         console.log("Newsletter subscription for:", email)

//         // Show success message
//         emailInput.value = ""

//         const successMessage = document.createElement("p")
//         successMessage.textContent = "Thank you for subscribing!"
//         successMessage.style.color = "white"
//         successMessage.style.marginTop = "1rem"

//         this.appendChild(successMessage)

//         setTimeout(() => {
//           successMessage.remove()
//         }, 3000)
//       }
//     })
//   }

//   // Reveal animations on scroll
//   const revealElements = document.querySelectorAll(".feature, .menu-item, .location-card")

//   // Add initial styles for animation
//   revealElements.forEach((element) => {
//     element.style.opacity = "0"
//     element.style.transform = "translateY(20px)"
//     element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
//   })

//   // Reveal function
//   function revealOnScroll() {
//     revealElements.forEach((element) => {
//       const elementTop = element.getBoundingClientRect().top
//       const windowHeight = window.innerHeight

//       if (elementTop < windowHeight - 100) {
//         element.style.opacity = "1"
//         element.style.transform = "translateY(0)"
//       }
//     })
//   }

//   // Initial check and add scroll listener
//   revealOnScroll()
//   window.addEventListener("scroll", revealOnScroll)
// })

// // Add CSS for mobile menu
// document.addEventListener("DOMContentLoaded", () => {
//   const style = document.createElement("style")
//   style.textContent = `
//         .nav-links.show {
//             display: flex;
//             flex-direction: column;
//             position: absolute;
//             top: 100%;
//             left: 0;
//             width: 100%;
//             background-color: white;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//             padding: 1rem 0;
//             z-index: 1000;
//         }
        
//         .mobile-menu-btn .rotate-down {
//             transform: rotate(45deg) translate(5px, 5px);
//         }
        
//         .mobile-menu-btn .fade-out {
//             opacity: 0;
//         }
        
//         .mobile-menu-btn .rotate-up {
//             transform: rotate(-45deg) translate(5px, -5px);
//         }
//     `
//   document.head.appendChild(style)
// })
