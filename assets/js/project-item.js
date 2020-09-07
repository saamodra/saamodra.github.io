class ProjectItem extends HTMLElement {
  set project(project) {
    this._project = project;
    this.render();
  }

  render() {
    this.innerHTML = `\
        <div class="overlay"></div>
        <img src="${this._project.featuredImage}" alt="${this._project.title}">
        <div class="hover-content">
          <h5>${this._project.title}</h5>
          <a href="${this._project.url}" target="_blank" class="btn-demo">Demo Project</a>
        </div>
      `;
  }
}
customElements.define("project-item", ProjectItem);