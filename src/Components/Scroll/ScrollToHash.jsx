// export default ScrollToHash;

export default function scrollToIdWithOffset(event , id, offset = 200) {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    let top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' });
  }
} 