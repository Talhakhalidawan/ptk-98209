// Custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorText = document.querySelector('.cursor-text');
    const text = "are you looking for me? ";
    
    // Create the circular text
    if (cursorText) {
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.transform = `rotate(${i * 14}deg)`; // Distribute letters in a circle
            cursorText.appendChild(span);
        }
    }
    
    // Update cursor position on mouse move
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Show circular text after preloader is gone
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (cursorText) cursorText.classList.add('visible');
                
                // Hide circular text after 4 seconds
                setTimeout(() => {
                    if (cursorText) cursorText.classList.remove('visible');
                }, 4000);
            }, 5000); // Show after preloader is gone
        });
        
        // Slightly enlarge cursor on clickable elements
        document.querySelectorAll('a, button, input[type="checkbox"], .nav-item, .hero-button, .intro-cta, .intro-screen').forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.style.width = '15px';
                cursor.style.height = '15px';
            });
            
            item.addEventListener('mouseleave', () => {
                cursor.style.width = '5px';
                cursor.style.height = '5px';
            });
        });
    }
});

// Preloader functionality
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const introScreen = document.querySelector('.intro-screen');
    const mainContent = document.querySelector('.main-content');
    const name1 = document.getElementById('company-name-1');
    const name2 = document.getElementById('company-name-2');
  
    // If preloader is enabled, handle the animation sequence
    if (preloader && introScreen && name1 && name2) {
        // disable scroll until intro is gone
        document.body.style.overflow = 'hidden';
      
        // 1) Show "Awesome Solutions"
        setTimeout(() => {
            name1.classList.add('visible');
          
            // 2) After 2s, slide it up and prep second name
            setTimeout(() => {
                name1.classList.replace('visible', 'hidden');
              
                // 3) After 0.3s, show "Talha Khalid"
                setTimeout(() => {
                  name2.classList.replace('upcoming', 'visible');
                  
                  // 4) After 1s, fade out preloader & show intro
                  setTimeout(() => {
                    preloader.style.opacity = '0';
                  
                    setTimeout(() => {
                      preloader.style.display = 'none';
                      introScreen.classList.add('visible');
                  
                      // When user clicks intro, fade to main content
                      introScreen.addEventListener('click', () => {
                        introScreen.style.opacity = '0';
                        setTimeout(() => {
                          introScreen.style.display = 'none';
                          if (mainContent) {
                              mainContent.style.display = 'block';
                              requestAnimationFrame(() => {
                                mainContent.classList.add('visible');
                                document.body.style.overflow = 'auto';
                              });
                          }
                        }, 1000);
                      });
                    }, 500);
                  }, 1000);
                }, 300);
            }, 2000);
        }, 100);
    } else if (mainContent) {
        // If preloader is disabled, just show main content immediately
        mainContent.style.display = 'block';
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerInput = document.getElementById('hamburger-input');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu expansion on hamburger click
    if (hamburgerInput && navMenu) {
        hamburgerInput.addEventListener('change', () => {
            if (hamburgerInput.checked) {
                navMenu.classList.add('active');
            } else {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburgerInput && navMenu) {
                hamburgerInput.checked = false;
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Work Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current button
            button.classList.add('active');
            
            // Get the tab content id and show corresponding content
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(`${tabId}-content`);
            if (tabContent) {
                tabContent.classList.add('active');
            }
            
            // If on mobile, scroll the tab button into view
            if (window.innerWidth <= 768) {
                button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });
    });
    
    // Accordion functionality
    const accordionContainer = document.querySelector('.accordion-container');
    const accordionHeader = document.querySelector('.accordion-header');
    
    if (accordionHeader && accordionContainer) {
        accordionHeader.addEventListener('click', () => {
            accordionContainer.classList.toggle('active');
        });
    }
});
