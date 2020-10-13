<template>
  <div class="displayTopics" v-if="!hideSelection">
    <div class="title">Please Selecte Subject</div>
    
    <span v-for="(s, index) in subjects.subjects" :key="index">
      <input type="radio" name="Subjects" :id="s.subject" :value="s.subject" @click="ShowTopics(s)">
        <label :for="s">{{s.subject}}</label>
    </span>
      <br><br>
    <div v-if="topics.length !== 0">
      <div class="title">Please Select Topic</div>
        <span v-for="t in topics" :key="t">
        <input type="radio" name="Topics" :id="t" :value="t" @click="selectedTopic = t">
        <label :for="t">{{t}}</label>
    </span>

    </div>
  <button id="ShowQuestions" @click="displayQuestions">Show Questions</button>

  </div>
</template>

<script>

import { subjects } from './../data/subjects.js'

export default {
  name: 'SubjectList',
  props: {
    msg: String
  },
  data() {
    return {
      subjects : subjects,
      topics:[],
      selectedSubject : '',
      selectedTopic:'',
      hideSelection : false
    }
  },
  methods:{
    ShowTopics(subject){
      this.selectedSubject = subject.subject;
      this.topics = subject.Topics;
    },
    displayQuestions(){
//      this.selectedTopic = t;
      this.$emit('showquestions', this.selectedSubject, this.selectedTopic);
      this.hideSelection = true;
      document.getElementById("ShowQuestions").disabled=true;
       document.getElementsByName("Subjects").disabled=true;
        document.getElementById("Topics").disabled=true;
  },
  
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.displayTopics{
  text-align: left;
  background-color:navajowhite;
  margin: 5px;  
}
.title{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 20px;
  margin: 5px;
}
</style>
