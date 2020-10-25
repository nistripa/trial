<template>
  <div id="app">
    <SubjectList @showquestions="displayquestions">

    </SubjectList>
    
      <div class="title">
      {{question.title}}
      </div>
      <div v-if="submitted" style="text-align: right">
      Total: {{ total }}
      </div>
      <br><br>

    <div class="question" v-for="(q, index) in question.questions" :key="index">
      <div> {{q.id}}: {{q.text}}</div>
      
      <div v-for="a in q.values" :key="a">
        <input type="radio" :name="q.id" id="a" :value="a" @click="checkrightAnswer(a, q.correctAnswer, index)">
        <label :for="a">{{a}}</label>
      </div>      
          <div v-if="submitted && result[index] === 0"><img class="image" src="./img/wrong.png">
           <div class="wrongAnswer">Correct Answer :  {{q.correctAnswer}}</div></div>
          <div v-if="submitted && result[index] === 1"><img class="image" src="./img/tick.png">
          </div>
          <br><br>

    </div>
     <br><br>
    <button :class="submitted ? 'submitted' : 'notsubmitted'" id="submit" @click="SumArray">submit</button>

  </div>
</template>

<script>

import { PhysicsForce } from './data/physicsforce.js'
import { PhysicsEnergy } from './data/physicsenergy.js'
import { PhysicsTest1 } from './data/physicstest1.js'
import { ComputersTest1 } from './data/computerstest1.js'
import { ComputersTest2 } from './data/computerstest2.js'
import { MathsTest1 } from './data/mathstest1.js'
import { ChemEnMP1 } from './data/chemenmp1.js'
import { result } from './data/result.js'
import SubjectList from './components/SubjectList'

export default {
  name: 'App',
  components: {
    // HelloWorld
    SubjectList
  },
  property:{
    // selectedSubject:String,
    // name: String
  },
  data() {
    return {
      // question: PhysicsForce,
      question: {},
      result : result,
      correct:'',
      total:0,
      submitted : false,
      selectedsubject: '',
      selectedtopic: '',
      hello: ''
    }
  },
  methods: {
    checkrightAnswer(id, a, index){
    document.getElementById("submit").enabled = false;
      if (id === a)
      {
        console.log(result);
        result[index] = 1;
        console.log(result);
        this.correct = 'correct'
      }
      else{
        console.log(result);
        result[index] = 0;
        console.log(result);
        this.correct = 'correct'
      }
    },
    
SumArray(){
        this.submitted = true;
        
        this.total = 0;
  var output;
  output = result.reduce(function(total, num){ 
    return total + num;
  } , 0); 
  console.log(output)
  this.total = output;
  
},
getbuttonClass(){
  return this.submitted === true ? "submitted" : "notsubmitted";
},
displayquestions(subject, topic)
{
  console.log('insidedisplayquestionss');
  console.log(subject);
  console.log(topic);
  this.selectedsubject =subject;
  this.selectedtopic = topic;
  this.hello = subject + topic; 
  this.question = [this.hello];

  console.log(this.hello)

  switch(this.hello) {
  case "PhysicsEnergy":
    this.question = PhysicsEnergy
    break;
  
  case "PhysicsForce":
    this.question = PhysicsForce
    break;

  case "PhysicsTest1":
    this.question = PhysicsTest1
    break;
  
  case "ComputersTest1":
    this.question = ComputersTest1
    break;

  case "ComputersTest2":
    this.question = ComputersTest2
    break;
  
  case "MathsTest1":
    this.question = MathsTest1
    break;

   case "ChemistryElements and Mixtures: Part-1":
    this.question = ChemEnMP1
    break;
   

  
  default:
    // code block
}

}
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.question{
  text-align: left;
}
.title{
  font-weight: bolder;
  font-size: 40px;
}
.image{
  height: 30px;
  width: 50px;
}
option {
  margin: 0.5em;
}
.wrongAnswer{
  color: red;
}
.submitted{
      pointer-events: none;
    color: grey;
    
}
.notsubmitted{
    background-color:greenyellow;
    color: red;
}

</style>
