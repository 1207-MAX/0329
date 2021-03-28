//let nb;
//let nb2;
//let nb3;
let detailY;
let detailX;

let nbarray = [];
// 初始內容
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    
  
  detailY = createSlider(3, 16, 3);
  detailY.position(0, height+3);
  detailY.style('width', '600px');
    
 detailX = createSlider(3, 24, 3);
  detailX.position(0, height +18);
  detailX.style('width', '600px');
    
    
    
    nbarray.push(new myBox(10,-height/500+(height/500)*i,10,5));
      nbarray.push(new myBox(10,-height/500+(height/500)*i,150,5));
    nbarray.push(new myBox(10,-height/500+(height/500)*i,350,50));
    nbarray.push(new myBox(10,-height/500+(height/500)*i,600,5));
    nbarray.push(new myBox(10,-height/500+(height/500)*i,850,5));
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
}
function draw() {
  background(0);
  
  noFill();
  stroke(100, 100, 240);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  box(70, 70, 70);
  
  rotateY(millis() / 500);
  sphere(120, 16, detailY.value());
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    /*
    if (mouseIsPressed){
      fill(0,255,0);
    }else{
      fill(255,0,0);
    }
    */
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 10;
    // 隨機產生物件顏色
    this.cc = color(0,0,0);
    // 衛星的中心xyz = 物件，衛星的大小 < 物件， 衛星的距離自訂
    this.stela = new stela(this.x,this.y,this.z,this.size*0.80,this.size);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        this.mx = this.mx+1;
        this.cc = color(random(255),0,);
        }
      this.stela.display();
      fill(this.cc);
      box(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.x>width/5){this.mx = -1*this.mx;}
    if (this.x<-width/5){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}
// 衛星
class stela{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    // 衛星距離旋轉中心的x距離
    this.cdx=cdx;
    // 隨機產生物件顏色
    this.cc = color(random(255),0,);
  }
  display(){
    push();
      rotateZ(frameCount*0.01);
      translate(this.cdx,0,0);  
      fill(this.cc);
      rotateY(millis() / 1000);
 sphere(60, detailX.value(), 1);
    sphere(200, detailX.value(), 1);
    pop();
  }
}