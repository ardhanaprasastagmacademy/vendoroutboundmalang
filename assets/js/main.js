(function () {
  'use strict';

  // Close mobile menu on link click & manage body scroll lock + navbar wave effect
  var navbar = document.getElementById('navbar');
  var navCollapse = document.getElementById('navbarNav');
  var toggler = document.querySelector('.navbar-toggler');

  if (toggler && navbar) {
    toggler.addEventListener('click', function () {
      navbar.classList.remove('is-flowing');
      void navbar.offsetWidth; // Reflow to re-trigger CSS keyframe wave
      navbar.classList.add('is-flowing');
    });
  }

  if (navCollapse) {
    var closeMenu = function () {
      var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    };

    var navLinks = navCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item, .btn-drawer-wa');
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    navCollapse.addEventListener('show.bs.collapse', function () {
      navCollapse.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      if (navbar) {
        navbar.classList.remove('is-flowing');
        void navbar.offsetWidth;
        navbar.classList.add('is-flowing');
      }
    });

    navCollapse.addEventListener('hidden.bs.collapse', function () {
      document.body.style.overflow = '';
      if (navbar) navbar.classList.remove('is-flowing');
    });

    // Close mobile menu on Escape key (R-32 Accessibility)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navCollapse.classList.contains('show')) {
        closeMenu();
        if (toggler) toggler.focus();
      }
    });

    // Reset body overflow when resizing to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 992 && navCollapse.classList.contains('show')) {
        closeMenu();
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll reveal (MOTION 1: calm, translateY 14px)
  var reveals = document.querySelectorAll('.reveal');

  if (reveals.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all if no IntersectionObserver
    reveals.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // Circular Scroll-to-Top Progress Button
  var scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    var circle = scrollToTopBtn.querySelector('.progress-ring-circle');
    var radius = circle ? circle.r.baseVal.value : 20;
    var circumference = 2 * Math.PI * radius;

    if (circle) {
      circle.style.strokeDasharray = circumference + ' ' + circumference;
      circle.style.strokeDashoffset = circumference;
    }

    var setProgress = function (percent) {
      if (!circle) return;
      var offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    };

    var handleScroll = function () {
      var docElem = document.documentElement;
      var docBody = document.body;
      var scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop || 0;
      var scrollHeight = (docElem.scrollHeight || docBody.scrollHeight) - docElem.clientHeight;
      var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(Math.max(progress, 0), 100));

      // Show after scrolling down 150px
      if (scrollTop > 150) {
        scrollToTopBtn.classList.add('is-visible');
      } else {
        scrollToTopBtn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Floating WhatsApp Pop-up Widget
  var waFloatingBtn = document.getElementById('waFloatingBtn');
  var waPopupCard = document.getElementById('waPopupCard');
  var waPopupClose = document.getElementById('waPopupClose');

  if (waFloatingBtn && waPopupCard) {
    var openWaPopup = function () {
      waPopupCard.classList.add('is-open');
      waPopupCard.setAttribute('aria-hidden', 'false');
      var badge = waFloatingBtn.querySelector('.wa-btn-badge');
      if (badge) badge.style.display = 'none';
    };

    var closeWaPopup = function () {
      waPopupCard.classList.remove('is-open');
      waPopupCard.setAttribute('aria-hidden', 'true');
    };

    waFloatingBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (waPopupCard.classList.contains('is-open')) {
        closeWaPopup();
      } else {
        openWaPopup();
      }
    });

    if (waPopupClose) {
      waPopupClose.addEventListener('click', function (e) {
        e.stopPropagation();
        closeWaPopup();
      });
    }

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!waPopupCard.contains(e.target) && !waFloatingBtn.contains(e.target)) {
        closeWaPopup();
      }
    });

    // Close on Escape key (R-32)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && waPopupCard.classList.contains('is-open')) {
        closeWaPopup();
        waFloatingBtn.focus();
      }
    });
  }

  // ============================================================
  // GALLERY CAROUSEL INTERACTIVE CONTROLLER (SMOOTH & RESPONSIVE)
  // ============================================================
  var fanWrapper = document.getElementById('galleryFan');
  if (fanWrapper) {
    var fanTrack = document.getElementById('galleryFanTrack') || fanWrapper;
    var cards = fanWrapper.querySelectorAll('.gallery-fan-card');
    var dots = fanWrapper.querySelectorAll('.gallery-fan-dot');
    var currentActive = 2; // Center card (index 2)
    var totalCards = cards.length;
    var autoTimer = null;
    var isPaused = false;

    var updateFanPositions = function (activeIndex) {
      currentActive = (activeIndex + totalCards) % totalCards;

      cards.forEach(function (card, i) {
        var diff = i - currentActive;
        if (diff < -2) diff += totalCards;
        if (diff > 2) diff -= totalCards;

        card.setAttribute('data-pos', diff);
        if (diff === 0) {
          card.classList.add('active');
          card.setAttribute('aria-current', 'true');
        } else {
          card.classList.remove('active');
          card.removeAttribute('aria-current');
        }
      });

      // Update dot indicators
      dots.forEach(function (dot, i) {
        if (i === currentActive) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    };

    var goToNext = function () {
      updateFanPositions(currentActive + 1);
    };

    var goToPrev = function () {
      updateFanPositions(currentActive - 1);
    };

    // Click & Keyboard support on cards
    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        e.preventDefault();
        var index = parseInt(card.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          updateFanPositions(index);
          resetAutoRotate();
        }
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var index = parseInt(card.getAttribute('data-index'), 10);
          if (!isNaN(index)) {
            updateFanPositions(index);
            resetAutoRotate();
          }
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToNext();
          resetAutoRotate();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToPrev();
          resetAutoRotate();
        }
      });

      // Prevent dragging image
      card.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
      });

      card.addEventListener('selectstart', function (e) {
        e.preventDefault();
      });
    });

    // Dot indicators click
    dots.forEach(function (dot) {
      dot.addEventListener('click', function (e) {
        e.preventDefault();
        var targetIndex = parseInt(dot.getAttribute('data-target'), 10);
        if (!isNaN(targetIndex)) {
          updateFanPositions(targetIndex);
          resetAutoRotate();
        }
      });
    });

    // Pause on mouse hover, resume on mouse leave
    fanWrapper.addEventListener('mouseenter', function () {
      isPaused = true;
      if (autoTimer) clearInterval(autoTimer);
    });

    fanWrapper.addEventListener('mouseleave', function () {
      isPaused = false;
      startAutoRotate();
    });

    // Touch / Swipe support for Mobile & Tablets
    var touchStartX = 0;
    var touchStartY = 0;
    var touchEndX = 0;
    var isSwiping = false;

    fanTrack.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchEndX = touchStartX;
        isSwiping = true;
        if (autoTimer) clearInterval(autoTimer);
      }
    }, { passive: true });

    fanTrack.addEventListener('touchmove', function (e) {
      if (!isSwiping || !e.touches || e.touches.length !== 1) return;
      touchEndX = e.touches[0].clientX;
    }, { passive: true });

    fanTrack.addEventListener('touchend', function (e) {
      if (!isSwiping) return;
      isSwiping = false;
      var diffX = touchStartX - touchEndX;
      // Minimum swipe threshold: 40px
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          goToNext(); // Swiped left -> next
        } else {
          goToPrev(); // Swiped right -> prev
        }
      }
      startAutoRotate();
    }, { passive: true });

    // Smooth Auto Rotation (3800ms)
    var startAutoRotate = function () {
      if (autoTimer) clearInterval(autoTimer);
      if (isPaused) return;
      autoTimer = setInterval(function () {
        goToNext();
      }, 3800);
    };

    var resetAutoRotate = function () {
      if (autoTimer) clearInterval(autoTimer);
      if (!isPaused) {
        startAutoRotate();
      }
    };

    startAutoRotate();
  }

  // Testimonial Mobile Slider Navigation
  var testiTrack = document.getElementById('testiTrack');
  var testiPrev = document.getElementById('testiPrev');
  var testiNext = document.getElementById('testiNext');
  var testiDots = document.querySelectorAll('.testi-dot');

  if (testiTrack) {
    var testiCards = testiTrack.querySelectorAll('.testimoni-card');

    var getActiveCardIndex = function () {
      var scrollLeft = testiTrack.scrollLeft;
      var cardWidth = testiTrack.offsetWidth;
      return Math.round(scrollLeft / cardWidth);
    };

    var updateTestiDots = function (index) {
      testiDots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    };

    var scrollToCard = function (index) {
      if (index < 0) index = 0;
      if (index >= testiCards.length) index = testiCards.length - 1;
      var targetCard = testiCards[index];
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      updateTestiDots(index);
    };

    if (testiPrev) {
      testiPrev.addEventListener('click', function (e) {
        e.preventDefault();
        var currentIndex = getActiveCardIndex();
        var prevIndex = currentIndex > 0 ? currentIndex - 1 : testiCards.length - 1;
        scrollToCard(prevIndex);
      });
    }

    if (testiNext) {
      testiNext.addEventListener('click', function (e) {
        e.preventDefault();
        var currentIndex = getActiveCardIndex();
        var nextIndex = currentIndex < testiCards.length - 1 ? currentIndex + 1 : 0;
        scrollToCard(nextIndex);
      });
    }

    testiDots.forEach(function (dot) {
      dot.addEventListener('click', function (e) {
        e.preventDefault();
        var index = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          scrollToCard(index);
        }
      });
    });

    // Update dots on manual touch swipe / scroll
    var scrollTimeout = null;
    testiTrack.addEventListener('scroll', function () {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        updateTestiDots(getActiveCardIndex());
      }, 60);
    }, { passive: true });
  }

  // ============================================================
  // Contact Form WhatsApp & Copy Handler (kontak.html)
  // ============================================================
  var contactForm = document.getElementById('contactForm');
  var btnCopyWa = document.getElementById('btnCopyWa');
  var copyBtnText = document.getElementById('copyBtnText');
  var formAlert = document.getElementById('formAlert');

  var formatWhatsAppMessage = function () {
    var name = (document.getElementById('contactName') ? document.getElementById('contactName').value.trim() : '');
    var org = (document.getElementById('contactOrg') ? document.getElementById('contactOrg').value.trim() : '');
    var phone = (document.getElementById('contactPhone') ? document.getElementById('contactPhone').value.trim() : '');
    var service = (document.getElementById('contactService') ? document.getElementById('contactService').value : '');
    var participants = (document.getElementById('contactParticipants') ? document.getElementById('contactParticipants').value.trim() : '');
    var date = (document.getElementById('contactDate') ? document.getElementById('contactDate').value.trim() : '');
    var location = (document.getElementById('contactLocation') ? document.getElementById('contactLocation').value : '');
    var notes = (document.getElementById('contactNotes') ? document.getElementById('contactNotes').value.trim() : '');

    var msg = 'Halo Admin Vendor Outbound Malang,\n\n' +
      'Saya ingin konsultasi kegiatan outbound:\n' +
      '• Nama PIC: ' + (name || '-') + '\n';

    if (org) {
      msg += '• Instansi/Rombongan: ' + org + '\n';
    }
    if (phone) {
      msg += '• No. WhatsApp: ' + phone + '\n';
    }
    if (service) {
      msg += '• Pilihan Layanan: ' + service + '\n';
    }
    if (participants) {
      msg += '• Estimasi Peserta: ' + participants + '\n';
    }
    if (date) {
      msg += '• Rencana Tanggal: ' + date + '\n';
    }
    if (location) {
      msg += '• Preferensi Lokasi: ' + location + '\n';
    }
    if (notes) {
      msg += '• Catatan Tambahan: ' + notes + '\n';
    }

    msg += '\nMohon info rekomendasi paket dan estimasi penawarannya. Terima kasih!';
    return msg;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameInput = document.getElementById('contactName');
      var phoneInput = document.getElementById('contactPhone');
      var serviceInput = document.getElementById('contactService');

      var isValid = true;

      if (nameInput && !nameInput.value.trim()) {
        nameInput.focus();
        isValid = false;
      } else if (phoneInput && !phoneInput.value.trim()) {
        phoneInput.focus();
        isValid = false;
      } else if (serviceInput && !serviceInput.value) {
        var trigger = document.getElementById('serviceSelectTrigger');
        var wrapper = document.getElementById('serviceSelectWrapper');
        if (trigger && wrapper) {
          trigger.focus();
          wrapper.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
        isValid = false;
      }

      if (!isValid) return;

      var text = formatWhatsAppMessage();
      var waUrl = 'https://wa.me/6288989643555?text=' + encodeURIComponent(text);

      if (formAlert) {
        formAlert.textContent = 'Pesan telah disiapkan, mengalihkan ke WhatsApp...';
        formAlert.classList.add('show');
        setTimeout(function () {
          formAlert.classList.remove('show');
        }, 5000);
      }

      window.open(waUrl, '_blank');
    });
  }

  if (btnCopyWa) {
    btnCopyWa.addEventListener('click', function () {
      var text = formatWhatsAppMessage();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          if (copyBtnText) copyBtnText.textContent = 'Tersalin ke Clipboard!';
          if (formAlert) {
            formAlert.textContent = 'Format teks pesan berhasil disalin ke clipboard.';
            formAlert.classList.add('show');
          }
          setTimeout(function () {
            if (copyBtnText) copyBtnText.textContent = 'Salin Teks Pesan';
            if (formAlert) formAlert.classList.remove('show');
          }, 3000);
        }).catch(function () {
          fallbackCopyText(text);
        });
      } else {
        fallbackCopyText(text);
      }
    });

    var fallbackCopyText = function (text) {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        if (copyBtnText) copyBtnText.textContent = 'Tersalin!';
        setTimeout(function () {
          if (copyBtnText) copyBtnText.textContent = 'Salin Format Pesan';
        }, 3000);
      } catch (err) {
        console.error('Gagal menyalin:', err);
      }
      document.body.removeChild(textarea);
    };
  }

  // ============================================================
  // Custom Select Dropdown UI Controller (kontak.html)
  // ============================================================
  var customSelectWrappers = document.querySelectorAll('.custom-select-wrapper');

  if (customSelectWrappers.length) {
    var closeAllSelects = function () {
      customSelectWrappers.forEach(function (wrapper) {
        wrapper.classList.remove('is-open');
        var trigger = wrapper.querySelector('.custom-select-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    };

    customSelectWrappers.forEach(function (wrapper) {
      var trigger = wrapper.querySelector('.custom-select-trigger');
      var label = wrapper.querySelector('.custom-select-label');
      var nativeSelect = wrapper.querySelector('select');
      var options = wrapper.querySelectorAll('.custom-select-option');

      if (!trigger || !nativeSelect) return;

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = wrapper.classList.contains('is-open');
        closeAllSelects();
        if (!isOpen) {
          wrapper.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      options.forEach(function (option) {
        var handleSelect = function () {
          var val = option.getAttribute('data-value');
          var text = option.querySelector('span') ? option.querySelector('span').textContent : val;

          // Update active styling
          options.forEach(function (opt) { opt.classList.remove('is-selected'); });
          option.classList.add('is-selected');

          // Update label
          if (label) label.textContent = text;

          // Update underlying native select
          nativeSelect.value = val;
          var evt = new Event('change', { bubbles: true });
          nativeSelect.dispatchEvent(evt);

          // Close dropdown
          wrapper.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        };

        option.addEventListener('click', function (e) {
          e.stopPropagation();
          handleSelect();
        });

        option.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect();
          }
        });
      });
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.custom-select-wrapper')) {
        closeAllSelects();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAllSelects();
      }
    });
  }

  // ============================================================
  // Network Modal Search & Filter Controller
  // ============================================================
  var networkSearchInput = document.getElementById('networkSearchInput');
  var networkCards = document.querySelectorAll('.network-card');
  var networkCountBadge = document.getElementById('networkCountBadge');
  var networkEmptyState = document.getElementById('networkEmptyState');

  if (networkSearchInput && networkCards.length) {
    var totalCards = networkCards.length;

    networkSearchInput.addEventListener('input', function () {
      var query = networkSearchInput.value.toLowerCase().trim();
      var visibleCount = 0;

      networkCards.forEach(function (card) {
        var domain = (card.getAttribute('data-domain') || '').toLowerCase();
        var title = (card.getAttribute('data-title') || '').toLowerCase();
        var text = card.textContent.toLowerCase();

        if (!query || domain.indexOf(query) !== -1 || title.indexOf(query) !== -1 || text.indexOf(query) !== -1) {
          card.classList.remove('d-none');
          visibleCount++;
        } else {
          card.classList.add('d-none');
        }
      });

      if (networkCountBadge) {
        if (query) {
          networkCountBadge.textContent = visibleCount + ' Ditemukan';
        } else {
          networkCountBadge.textContent = totalCards + ' Website Terdaftar';
        }
      }

      if (networkEmptyState) {
        if (visibleCount === 0) {
          networkEmptyState.classList.remove('d-none');
        } else {
          networkEmptyState.classList.add('d-none');
        }
      }
    });
  }
})();



