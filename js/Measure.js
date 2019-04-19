class Measure extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div id="measure" style="grid-column: 2/3; grid-row: 1;">
     <h1>Measure Phase</h1>
     <h2>Developer Metrics</h2>
     <h2>Cataloger/User Metrics</h2>
    </div>`
  }
}

export default Measure