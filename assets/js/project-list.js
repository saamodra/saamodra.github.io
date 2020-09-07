import "./project-item.js";


class ProjectList extends HTMLElement {
    set projects(projects) {
        this._projects = projects;
        this.render();
    }

    render() {
        this._projects.forEach(project => {
            const projectItemElement = document.createElement("project-item");

            projectItemElement.project = project;
            this.appendChild(projectItemElement);
        });
    }
}

customElements.define("project-list", ProjectList);