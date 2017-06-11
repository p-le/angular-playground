class Exercise {
  constructor(name, title, description, image, videos = [], variations = [], procedure = '') {
    this.name = name;
    this.title = title;
    this.description = description;
    this.image = image;
    this.related = {};
    this.related.videos = videos;
    this.variations = variations;
    this.procedure = procedure;
  }
}

export default Exercise;