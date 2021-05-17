import {Component} from "react";

export default class Card extends Component{

    showLogo(){
        if (this.props.logo) {
            return  <img src={process.env.PUBLIC_URL + this.props.logo} width="60px" height="60px" alt="logo"/>
        } else {
            return null
        }
    }

    render() {
        const styles = {
            color:this.props.colorText
        }

        const style = {
            backgroundColor:this.props.colorBack,
            backgroundImage: `url(${process.env.PUBLIC_URL + this.props.bgimg})`,
            backgroundSize: "cover"
        }

        return(
          <div className="card" style={style}>
              {this.showLogo()}
              <div style={styles}>
                  <h1 className="info">{this.props.name}</h1>
                  <h2 className="info">{this.props.company}</h2>
                  <p className="info">phone: {this.props.phone}</p>
                  <p className="info">email: {this.props.email}</p>
              </div>
          </div>
        );
    }
}