document.addEventListener("dblclick", (event) => {
    const margin = 0.25; // 25% of the viewport height and width
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = event.clientX;
    const y = event.clientY;
  
    if (x > width * (1 - margin)) {
      event.preventDefault(); // Prevent text selection
      window.getSelection().removeAllRanges(); // Deselect any selected text
      
      if (y < height * margin) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (y > height * (1 - margin)) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    }
  });  