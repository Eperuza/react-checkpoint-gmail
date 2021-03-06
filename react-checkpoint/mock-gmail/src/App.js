import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import EmailList from './components/EmailList';
import EmailEntry from './components/EmailEntry';
import React from 'react';

var testData = [
  {"sender": "katie@galvanize.com", "recipient": "jane@galvanize.com" , "subject": "Standup meeting", "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much." , "date": "2020-08-23T18:25:43.511Z", "id": 1},
  {"sender": "jean-marc@galvanize.com", "recipient": "jane@galvanize.com" , "subject": "Retro meeting", "message": "They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’thold with such nonsense.", "date": "2020-04-23T18:25:43.511Z", "id": 2},
  {"sender": "ash@galvanize.com", "recipient": "jane@galvanize.com", "subject": "New employee next week", "message": "Mr. Dursley was the director of a fi rm called Grunnings, whichmade drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. ", "date": "2019-01-23T18:25:43.511Z", "id": 3},
  {"sender": "mattias@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Last week's reports", "message": " Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors.", "date": "2020-06-23T18:25:43.511Z", "id": 4},
  {"sender": "tanner@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Holiday schedule", "message": "The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.", "date": "2020-03-23T18:25:43.511Z", "id": 5},
  {"sender": "brandon@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Managers meeting", "message": "The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. ", "date": "2020-02-23T18:25:43.511Z", "id": 6},
  {"sender": "jeff@galvanize.com", "recipient": "jane@galvanize.com", "subject": "1 on 1 meeting", "message": " ey didn’t think they could bear it if anyone found out about thePotters. ", "date": "2020-02-23T18:25:43.511Z", "id": 7},
  {"sender": "maddie@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Happy hour next Friday!" , "message":" Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for several years; in fact, Mrs. Dursley pretended she didn’t have a sister" , "date": "2019-12-23T18:25:43.511Z", "id": 8},
  {"sender": "becky@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Vacation Request", "message": "  e Dursleys shudderedto think what the neighbors would say if the Potters arrived in the street.", "date": "2020-01-23T18:25:43.511Z", "id": 9},
  {"sender": "jarret@galvanize.com", "recipient": "jane@galvanize.com", "subject": "All hands meeting", "message": " is boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.", "date": "2019-07-23T18:25:43.511Z", "id": 10},
  {"sender": "rich@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Standup meeting", "message": "  e Dursleys knew that the Potters had a small son, too, butthey had never even seen him.", "date": "2020-03-23T18:25:43.511Z", "id": 11},
  {"sender": "erin@galvanize.com", "recipient": "jane@galvanize.com", "subject": "New hire orientation assistance needed", "message": "When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday our story starts, there was nothing about the cloudy sky outside tosuggest that strange and mysterious things would soon be happening all over the country", "date": "2020-04-23T18:25:43.511Z", "id": 12 },
  {"sender": "charlie@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Expense reports due!", "message": " Mr. Dursley hummed as he picked out his most boring tie for work, and Mrs. Dursley gossiped away happily as she wrestled a screaming Dudley into his high chair.", "date": "2018-05-23T18:25:43.511Z", "id": 13},
  {"sender": "jacob@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Updated travel policy information", "message": "None of them noticed a large, tawny owl fl utter past the window", "date":  "2018-05-23T18:25:43.511Z", "id": 14},
  {"sender": "louise@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Cat videos", "message": "At half past eight, Mr. Dursley picked up his briefcase, pecked  Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls. ", "date": "2020-02-23T18:25:43.511Z", "id": 15},
  {"sender": "ash@galavnize.com", "recipient": "jane@galvanize.com", "subject": "I need help", "message": " “Little tyke,” chortled Mr. Dursley as he left  the house. ", "date": "2019-04-23T18:25:43.511Z", "id": 16},
  {"sender": "ash@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Blocked on React issue", "message": "He got into his car and backed out of number four’s drive", "date": "2020-03-23T18:25:43.511Z", "id": 17},
  {"sender": "katie@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Happy hour this Thursday!", "message": "It was on the corner of the street that he noticed the fi rst sign of something peculiar — a cat reading a map", "date":  "2020-03-23T18:25:43.511Z", "id": 18},
  {"sender": "brandon@galvanize.com", "recipient": "jane@galvanize.com", "subject": "Standup Notes", "message": "For a second, Mr.  Dursley didn’t realize what he had seen — then he jerked his head  around to look again.", "date": "2020-03-23T18:25:43.511Z", "id": 19}
];

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      emailOpened: false
    };
    this.toggleEmail = this.toggleEmail.bind(this);
    this.displayEmail = this.displayEmail.bind(this);
    this.composeEmail = this.composeEmail.bind(this);
  }

  toggleEmail(){
    console.log("State before setState: ", this.state);
    this.setState({emailOpened: !this.state.emailOpened}, () => console.log("State: ", this.state.emailOpened));
    console.log("On click handled properly")
  }; 

  displayEmail({email}){
    console.log("Email should be opened and displayed.")
    this.setState({emailOpened: !this.state.emailOpened}, () => {
      console.log("State has been changed: display the email!")
      const emailContainer = document.getElementById("emailMessage");
      console.log(emailContainer);
      const insertEmail = document.createElement('div');
        insertEmail.innerHTML = email.message;
        // <div className="email">
        //       <h2>{email.subject}</h2>
        //       <p>Sender: {email.sender}</p>
        //       <p>Date: {email.date}</p><br/>
        //       <p>{email.message}</p>
        // </div>  
      emailContainer.appendChild(insertEmail);
    });
  }

  composeEmail(){
    console.log("Compose email button clicked!");
  }

  render(){
    if(this.state.emailOpened === false){
      return(
        <div className="app-container">
                <div className="header">
                  <Header/>
                </div>
  
                <div className="navigation">
                  <Navigation/>
                </div>
                
                <div className="emails">
                  <div className="emailEntry" id="emailEntryHeader">
                    <span>Sender</span>
                    <span>Subject</span>
                    <span>Date</span>
                  </div>
                  <EmailList emails={testData} state={this.state.emailOpened} display={this.displayEmail}/>
                </div>
            </div>
      );
    }
    if(this.state.emailOpened === true){
      return(
        <div className="app-container">
                <div className="header">
                  <Header/>
                </div>
  
                <div className="navigation">
                  <Navigation compose = {this.composeEmail}/>
                </div>
                
                <div className="emails">
                <button onClick={this.toggleEmail}>Back</button>
                <div id="emailMessage">

                </div>
                </div>
            </div>
      )
    }
    
  };


};


export default App;
