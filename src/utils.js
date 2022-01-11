const iteraction = (elem) => {
    let observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle('add',entry.isIntersecting);
        })
    });

    observer.observe(elem);
}

export {iteraction};