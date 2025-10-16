export default {
  mounted(el, binding) {
    const {
      once = true,
      threshold = 0.15,
      rootMargin = '0px 0px -10% 0px',
      delay = 0,        // ms
      distance = 12,    // px translate on Y
      duration = 700,   // ms
      onlyOnScroll = false // ← NEW: require a scroll action before revealing
    } = binding?.value || {}

    // initial hidden state
    el.style.opacity = '0'
    el.style.transform = `translateY(${distance}px)`
    el.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
    el.style.willChange = 'opacity, transform'

    const dataDelay = Number(el.dataset.revealDelay || 0)
    let userScrolled = !onlyOnScroll // if not enforcing scroll, allow immediate reveal

    // listen for first scroll if needed
    const onFirstScroll = () => {
      userScrolled = true
      window.removeEventListener('scroll', onFirstScroll, { passive: true })
    }
    if (onlyOnScroll) {
      window.addEventListener('scroll', onFirstScroll, { passive: true, once: true })
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        // If we require a scroll, ignore intersections before the user scrolls
        if (!userScrolled) return

        const totalDelay = delay + dataDelay
        if (totalDelay) setTimeout(show, totalDelay)
        else show()

        if (once) obs.unobserve(el)
      })
    }, { threshold, rootMargin })

    function show() {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }

    obs.observe(el)
    el.__revealObserver = obs
    el.__revealScrollHandler = onFirstScroll
  },
  unmounted(el) {
    el.__revealObserver?.disconnect()
    delete el.__revealObserver
    if (el.__revealScrollHandler) {
      window.removeEventListener('scroll', el.__revealScrollHandler)
      delete el.__revealScrollHandler
    }
  }
}
