import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Abdou Dieng',
        bio: 'Abdou est un expert reconnu dans le domaine de la technologie, il inspire les autres par son dévouement à la science.',
        imgSrc: 'https://img.freepik.com/photos-premium/jeune-homme-affaires-afro-americain-intelligent-visage-souriant-debout-dans-arriere-plan-flou-bureau-occupe-generative-ai-aig20_31965-117833.jpg?w=740',
        profession: 'Développeur'
      },
      show: false,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;
  
    return (
      <div className="App">
        <h1>Visionneuse de profil</h1>
        <button className="toggle-button" onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
  
        {show && (
          <div className="profile">
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
  
        <p className="elapsed-time">
          Temps écoulé (seconds): {elapsedTime}
        </p>
      </div>
    );
  }
}

export default App;
