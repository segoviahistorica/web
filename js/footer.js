class Footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
            <footer class="sticky-footer py-4 bg-dark fw-light">
            <div class="container">
                <p class="m-0 text-center text-light">&copy; 2023 Segovia HistóRica</p>
            </div>
            </footer>
        `
    }
}

customElements.define("footer-component", Footer)
