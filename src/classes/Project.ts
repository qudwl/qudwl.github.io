class Project {
  name: string;
  description: string;
  url: string;
  // False = Still in progress, True = Finished
  status: boolean;

  constructor(name: string, description: string, url: string, status: boolean) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.status = status;
  }
}

export default Project;
