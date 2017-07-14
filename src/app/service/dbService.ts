
export class mydbService{
    constructor(){}
    data =[ {id:'1',name:'Rufael K.Yohannes',StudId:'108814',email:'Rufael@mum.edu'},
            {id:'2',name:'Amanuel Tekle',StudId:'108869',email:'Amanuel@mum.edu'},
            {id:'3',name:'Robin Wiliams',StudId:'984153',email:'Robin@mum.edu'},
            {id:'4',name:'Barak Obama',StudId:'985241',email:'Barak@mum.edu'},
            {id:'5',name:'Dawit Tewelde',StudId:'102564',email:'Dawit@mum.edu'},
            {id:'6',name:'Terry Kidane',StudId:'986523',email:'Terry@mum.edu'}];
   
    getData(){
   return this.data;
    }
index = 0;
getStudent(id){
    while(this.data.length >= this.index){
       if(this.data[this.index].id==id){
        return this.data[this.index];       
       } else this.index=this.index+1;
    }
    return null;
}

}