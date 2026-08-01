/* =========================================================================
   YUMAK CATERING — main.js
   Zero dependency. Header state, drawer, reveal, parallax, counters,
   accordion, lightbox, form validation + Web3Forms submit.
   ========================================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. HEADER STICKY STATE ---------- */
  var header = document.getElementById('header');
  var mobilebar = document.getElementById('mobilebar');
  var lastY = 0;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('is-stuck', y > 40);
    if (mobilebar) mobilebar.classList.toggle('is-visible', y > 520);
    lastY = y;
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- 2. MOBILE DRAWER ---------- */
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');

  function closeDrawer() {
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
    if (burger) burger.setAttribute('aria-expanded', 'false');
    if (burger) burger.setAttribute('aria-label', 'Menüyü aç');
  }
  function openDrawer() {
    document.body.classList.add('nav-open');
    document.body.style.overflow = 'hidden';
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Menüyü kapat');
  }
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      document.body.classList.contains('nav-open') ? closeDrawer() : openDrawer();
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeDrawer();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (document.body.classList.contains('nav-open')) closeDrawer();
      closeLightbox();
    }
  });

  /* ---------- 3. SCROLL REVEAL ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 4. HERO PARALLAX ---------- */
  var heroMedia = document.getElementById('heroMedia');
  if (heroMedia && !reduceMotion && window.matchMedia('(min-width: 768px)').matches) {
    var raf = false;
    window.addEventListener('scroll', function () {
      if (raf) return;
      raf = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroMedia.style.transform = 'translate3d(0,' + (y * 0.14).toFixed(1) + 'px,0)';
        }
        raf = false;
      });
    }, { passive: true });
  }

  /* ---------- 5. COUNTERS ---------- */
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length) {
    if (!('IntersectionObserver' in window)) {
      counters.forEach(runCounter);
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ---------- 6. ACCORDION ---------- */
  var accBtns = document.querySelectorAll('.acc__btn');
  accBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc__item');
      var open = item.classList.contains('is-open');
      // close siblings for single-open behaviour
      var parent = item.parentElement;
      parent.querySelectorAll('.acc__item.is-open').forEach(function (o) {
        if (o !== item) {
          o.classList.remove('is-open');
          o.querySelector('.acc__btn').setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('is-open', !open);
      btn.setAttribute('aria-expanded', String(!open));
    });
  });

  /* ---------- 7. LIGHTBOX ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');
  var gals = Array.prototype.slice.call(document.querySelectorAll('.gal'));
  var lbIndex = 0;
  var lastFocused = null;

  function showLb(i) {
    if (!gals.length) return;
    lbIndex = (i + gals.length) % gals.length;
    var fig = gals[lbIndex];
    lbImg.src = fig.getAttribute('data-full') || fig.querySelector('img').src;
    lbImg.alt = fig.querySelector('img').alt || '';
  }
  function openLightbox(i) {
    if (!lb) return;
    lastFocused = document.activeElement;
    showLb(i);
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('[data-lb-close]').focus();
  }
  function closeLightbox() {
    if (!lb || !lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  gals.forEach(function (fig) {
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    // index resolved at click time so gallery filtering stays consistent
    fig.addEventListener('click', function () { openLightbox(gals.indexOf(fig)); });
    fig.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(gals.indexOf(fig)); }
    });
  });
  if (lb) {
    lb.addEventListener('click', function (e) {
      if (e.target.closest('[data-lb-close]') || e.target === lb) closeLightbox();
      if (e.target.closest('[data-lb-next]')) showLb(lbIndex + 1);
      if (e.target.closest('[data-lb-prev]')) showLb(lbIndex - 1);
    });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'ArrowRight') showLb(lbIndex + 1);
      if (e.key === 'ArrowLeft') showLb(lbIndex - 1);
    });
  }

  /* ---------- 7b. GALLERY FILTER ---------- */
  var filters = document.getElementById('galFilters');
  if (filters) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      var cat = btn.getAttribute('data-filter');
      filters.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      document.querySelectorAll('#galGrid .gal').forEach(function (fig) {
        var show = cat === 'hepsi' || fig.getAttribute('data-cat') === cat;
        fig.hidden = !show;
      });
      // lightbox should walk only visible items
      gals = Array.prototype.slice.call(document.querySelectorAll('.gal:not([hidden])'));
    });
  }

  /* ---------- 8. FORM ---------- */
  var form = document.getElementById('quoteForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var submitBtn = document.getElementById('submitBtn');

    function fieldOf(input) { return input.closest('.field'); }

    function validate(input) {
      var ok = true;
      var val = (input.value || '').trim();

      if (input.hasAttribute('required')) {
        if (input.type === 'checkbox') ok = input.checked;
        else ok = val.length > 0;
      }
      if (ok && input.type === 'tel' && val) {
        ok = val.replace(/\D/g, '').length >= 10;
      }
      if (ok && input.id === 'ad' && val) {
        ok = val.length >= 3;
      }
      var f = fieldOf(input);
      if (f) f.classList.toggle('is-invalid', !ok);
      input.setAttribute('aria-invalid', String(!ok));
      return ok;
    }

    var inputs = form.querySelectorAll('input:not([type=hidden]):not(.hp), select, textarea');
    inputs.forEach(function (input) {
      input.addEventListener('blur', function () { validate(input); });
      input.addEventListener('input', function () {
        var f = fieldOf(input);
        if (f && f.classList.contains('is-invalid')) validate(input);
      });
      if (input.type === 'checkbox') {
        input.addEventListener('change', function () { validate(input); });
      }
    });

    function setStatus(type, msg) {
      status.className = 'form__status is-visible form__status--' + type;
      status.textContent = msg;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var firstBad = null;
      inputs.forEach(function (input) {
        if (!validate(input) && !firstBad) firstBad = input;
      });
      if (firstBad) {
        setStatus('err', 'Lütfen işaretli alanları kontrol edin.');
        firstBad.focus();
        return;
      }

      var key = form.querySelector('[name=access_key]').value;
      if (!key || key.indexOf('YOUR-') === 0) {
        setStatus('err', 'Form henüz bağlanmadı. Lütfen telefon veya WhatsApp üzerinden ulaşın.');
        return;
      }

      submitBtn.setAttribute('aria-busy', 'true');
      setStatus('ok', 'Gönderiliyor…');

      fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            setStatus('ok', 'Talebiniz alındı. Aynı iş günü içinde size dönüş yapacağız.');
          } else {
            setStatus('err', 'Gönderilemedi. Lütfen telefon veya WhatsApp üzerinden ulaşın.');
          }
        })
        .catch(function () {
          setStatus('err', 'Bağlantı hatası. Lütfen telefon veya WhatsApp üzerinden ulaşın.');
        })
        .finally(function () {
          submitBtn.removeAttribute('aria-busy');
        });
    });
  }

  /* ---------- 9. FOOTER YEAR ---------- */
  var yil = document.getElementById('yil');
  if (yil) yil.textContent = new Date().getFullYear();

})();
