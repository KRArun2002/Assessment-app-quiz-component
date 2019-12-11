import { Component, OnInit } from '@angular/core';
import { Quizmodel } from './quiz2model';
import { Answermodel } from './quiz2model';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'test';
// }


@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

myarray: String[] = [];
i: number = 0;
languages: String[] = ["Java", "Html", "C++"];
 newstr: String

  quizlist: Quizmodel[] = [
    {
      ID: 1, language: "Java", question: "Inventor of c++?", anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer: "Richie Richie"
    },
    {
      ID: 2, language: "Java", question: "Inventor of java?", anslistobj: ["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer: "Denish Richie"
    },
    {
      ID: 3, language: "Java", question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      ID: 4, language: "C++", question: " Which of the following shows multiple inheritances?", anslistobj: [" A->B->C", "A->B; A->C", "A,B->C", " B->A"], answer: "A,B->C"
    } ,
    {
      ID: 5, language: "C++", question: " Which concept allows you to reuse the written code?", anslistobj: [" Encapsulation", "Abstraction", "Inheritance", "Polymorphism"], answer: "Inheritance"
    }
  ];

  /******************************************************* */
quizlength: number;
selectedlanguage: Quizmodel[] = [];
question: String;
selectedvalue: String;
option: any[];
selectedlanques: any[];
  unique_array: any;
gettinglanguage() {
this.selectedlanques =  this.quizlist.filter(d => (d.language == this.selectedvalue));
this.question = this.selectedlanques[0].question;
this.option = this.selectedlanques[0].anslistobj;
this.i = 0;
this.quizlength = this.selectedlanques.length;
  }

  /******************************************************** */
  next() {
    ++this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }
  previous() {
    --this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }

/********************************************************* */
// uniquearray: AnswerKey[] = [];

  answerkey: Answermodel[] = [];
  answerkey1 =[]
  check(e, str: String, answer: String) {
    if (e.target.checked) {
      console.log("..................."+str + " " + answer);
      this.answerkey.push(new Answermodel(str));
      // this.answerkey1 = [...this.answerkey1, str]
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    // this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;

generatemark() {

    // for(var k=0; k < this.answerkey.length; k++)
    // {
    //   if(this.uniquearray.indexOf(this.answerkey[k]) === -1){
    //     this.uniquearray.push(this.answerkey[k]);
    //   }
    // }
      console.log(this.answerkey , "saas")
      const arr =[];
      this.answerkey.map(item =>{
        arr.push(item.option);
      })
      console.log(arr)
      // console.log(this.quizlist , "quiz")
      for(let c = 0 ; c < this.quizlist.length ; c++){
        // console.log(this.quizlist[c])
        if(arr.includes(this.quizlist[c].answer)) {
          this.marks++;
        }else{
          console.log("No match");
        }
      }

      // for(let a = 0 ; a < arr.length ; a++){
      //   for( let b = a + 1 ; b<arr.length ; b++){
      //     if(arr[a] === arr[b]){

      //     }
      //   }
      // }
      // for ( let k = 0; k < this.answerkey.length; k ++) {
      //   for ( let l = k + 1  ; l < this.answerkey.length - 1; l ++) {
      //     if ( this.answerkey[k].option === this.answerkey[l].option) {
      //       console.log(k , l , 'i & j' );
      //       this.answerkey.splice(l, 1 );

      //     }
      //   }
      // }
      // console.log(this.answerkey, "vish");
    // for (let i = 0; i < this.answerkey1.length; i++) {
    //   for(let j=0; j< this.quizlist.length; j++){
    //   if (this.answerkey1[i].option === this.quizlist[j].answer) this.marks++;
    // }}
    // // alert("your score is "+JSON.stringify(this.marks));
    document.writeln("Your score is " + this.marks);
    // console.log(this.answerkey)
  }

  ///////////////////////////////////

  // recursivecheck() {
  //   var result1 = this.quizlist;
  //   var result2 = this.answerkey;

  //   var props = ['id', 'answer'];

  //   var result = result1.filter(function (o1) {
  //     // filter out (!) items in result2
  //     return result2.some(function (o2) {
  //       return o1.answer === o2.answer;
  //       // assumes unique id
  //     });

//     }).map(function (o) {

//       // use reduce to make objects with only the required properties
//       // and map to apply this to the filtered array as a whole
//       return props.reduce(function (newo, ans) {
//         newo[ans] = o[ans];
//         return newo;
//       }, {});
//     });
//     console.log("result:" + JSON.stringify(result));
//   }


}

export class AnswerKey {
  choosen: String;
  answer: String;
  constructor(choosen: String, answer: String) {
    this.choosen = choosen;
    this.answer = answer;
  }



}
