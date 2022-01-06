import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        let { memes } = response.data;
        this.setState({
          allMemeImgs: memes,
        });
      });
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let randint = Math.floor(Math.random() * this.state.allMemeImgs.length);
    let randMemeImg = this.state.allMemeImgs[randint].url;
    this.setState({
      randImg: randMemeImg,
    });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
            name="topText"
          />

          <input
            type="text"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
            name="bottomText"
          />
          <button>Generate</button>
        </form>

        <div className="meme">
          <img src={this.state.randImg} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
