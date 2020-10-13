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
          <div v-if="submitted && result[index] === 0"><img class="image" src="./img/delete.jpg"></div>
          <div v-if="submitted && result[index] === 1"><img class="image" src="./img/tick.png"></div>
          <br><br>
    </div>
    <br><br>
    <button @click="SumArray">submit</button>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import HelloWorld from './components/HelloWorld.vue'
import { PhysicsForce } from './data/physicsforce.js'
import { PhysicsEnergy } from './data/physicsenergy.js'
import { ComputersMSWorld } from './data/computersmsword.js'
import { result } from './data/result.js'
// import SubjectList from './components/SubjectList.vue'
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
displayquestions(subject, topic)
{
  // console.log('insidedisplayquestionss');
  // console.log(subject);
  // console.log(topic);
  this.selectedsubject =subject;
  this.selectedtopic = topic;
  this.hello = subject + topic; 
  this.question = [this.hello];
  this.hello === "PhysicsEnergy" ? this.question = PhysicsEnergy : this.hello === "PhysicsForce" ? this.question = PhysicsForce : this.hello === "ComputersMS Word" ? this.question = ComputersMSWorld :'' ;

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
</style>
