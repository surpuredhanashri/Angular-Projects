export class Electronics{
    id:number = 0;
    Price:number = 0;
    Title:string ="";
    Desciption:number =0;
    Image:string = "";
    Image2:string="";
    constructor(id:number,Price:number,Title:string,Desciption:number,Image:string,Image2:string){
        this.id = id;
        this.Price =Price;
        this.Title= Title;
        this.Desciption = Desciption;
        this.Image=Image;
        this.Image2=Image2;
    }
}