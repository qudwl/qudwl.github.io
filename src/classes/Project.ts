class Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
  image: string;

  constructor(
    name: string,
    description: string,
    url: string,
    tags: string[],
    image: string
  ) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.tags = tags;
    this.image = image;
  }
}

export default Project;
