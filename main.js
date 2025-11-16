        // تفعيل النافبار عند التمرير
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // التحكم في القائمة المنسدلة
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const body = document.body;

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        // إغلاق القائمة عند النقر على رابط
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });

        // إغلاق القائمة عند تغيير حجم النافذة (إذا كانت مفتوحة)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
        // تأثيرات إضافية للكروت
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.service-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '2';
                });
            });
            
            // تأثير ظهور الكروت عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            cards.forEach(card => {
                observer.observe(card);
            });
        });
        // تأثيرات إضافية للكروت
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.education-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '2';
                });
            });
            
            // تأثير ظهور الكروت عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            cards.forEach(card => {
                observer.observe(card);
            });
        });

        // تفعيل أشرطة التقدم عند التمرير للقسم
        document.addEventListener('DOMContentLoaded', function() {
            const skillCards = document.querySelectorAll('.skill-card');
            const progressBars = document.querySelectorAll('.skill-progress');
            
            // تأثيرات إضافية للكروت
            skillCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = '10';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = '2';
                });
            });
            
            // تفعيل أشرطة التقدم عند ظهور القسم
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // تشغيل تأثير ظهور الكروت
                        skillCards.forEach(card => {
                            card.style.animationPlayState = 'running';
                        });
                        
                        // تشغيل أشرطة التقدم
                        progressBars.forEach(bar => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = width + '%';
                        });
                        
                        // إيقاف المراقبة بعد التنشيط
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            
            observer.observe(document.querySelector('.skills'));
        });

                // تفعيل تأثيرات الظهور عند التمرير
        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.querySelector('.contact-form');
            
            // تفعيل تأثير الظهور عند ظهور القسم
            const observerOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        contactForm.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            observer.observe(document.querySelector('.contact'));
            
            // تأثير إرسال النموذج (لأغراض العرض فقط)
            const form = document.querySelector('.contact-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('شكراً لك! تم استلام رسالتك وسيتم الرد عليك قريباً.');
                form.reset();
            });
        });