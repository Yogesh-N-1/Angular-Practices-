export class  CourseService{//map it in app.module inside provider=[] key
    private course:string[]=['python','java','html','angular']
   service: string[];

    getCourse(){
        return this.course;
    }
}