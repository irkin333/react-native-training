class Category {
  public id: string;
  public title: string;
  public description: string;
  public color: string;

  constructor(id: string, title: string, descripiton: string, color: string) {
    this.id = id;
    this.title = title;
    this.description = descripiton;
    this.color = color;
  }
}

export default Category;