export class Pokemon {
    capitalizeName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
  
    getHTMLRepresentation() {
      return `
        <h3 class="pokemon-title">${this.capitalizeName()} (${this.id})</h3>
        <div class="main-info">
            <div class="info-column">
                <div class="sprite-group">
                    <p><strong>Imagen:</strong></p>
                    <div class="sprites">
                        <img src="${this.frontSprite}" alt="${this.name}">
                    </div>
                </div>
                <div class="weight-height-group">
                    <p><strong>Weight/Height:</strong></p>
                    <div class="weight-height-values">
                        <p>${this.weight} / ${this.height}</p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  
    constructor(name, id, frontSprite, weight, height) {
      this.name = name;
      this.id = id;
      this.frontSprite = frontSprite;
      this.weight = weight;
      this.height = height;
    }
  
    capitalizeName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}