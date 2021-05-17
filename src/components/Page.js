import {Component} from "react";
import Card from "./Card";

export default class Page extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "name",
            company: "company",
            phone: "phone",
            email: "email",
            img:null,
            bgimg:null,
            colorText: "#000000",
            colorBack: "#ffffff"
        }
    }


    sendForm(e){
        e.preventDefault()
    }


    render() {


        return(
            <div className="page">
                <h1>Сделай свою визитку</h1>
                <form onSubmit={this.sendForm.bind(this)}>
                    <div className="form-row">
                        <label htmlFor="name">Your Name: </label>
                        <input id="name" name="name" type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="name">Your Company: </label>
                        <input id="name" name="name" type="text" onChange={(e) => this.setState({company: e.target.value})}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone">Your Phone: </label>
                        <input id="phone" name="phone" type="tel" onChange={(e) => this.setState({phone: e.target.value})}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Your Email: </label>
                        <input id="email" name="email" type="email" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Your logo: </label>
                        <select onChange={(e => this.setState({img:e.target.value}))}>
                            <option value="">null</option>
                            <option value="logo1.png">logo1</option>
                            <option value="logo2.png">logo2</option>
                            <option value="logo3.png">logo3</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Your background: </label>
                        <select onChange={(e => this.setState({bgimg:e.target.value}))}>
                            <option value="">null</option>
                            <option value="bg1.png">bg1</option>
                            <option value="bg2.png">bg2</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="colorText">Your text color: </label>
                        <input id="colorText" name="colorText" type="color" onChange={(e) => this.setState({colorText: e.target.value})}/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="colorBack">Your back color: </label>
                        <input id="colorBack" defaultValue="#ffffff" name="colorBack" type="color" onChange={(e) => this.setState({colorBack: e.target.value})}/>
                    </div>
                </form>
                <Card name={this.state.name} company={this.state.company} phone={this.state.phone} email={this.state.email}
                logo={this.state.img} colorText={this.state.colorText} colorBack={this.state.colorBack} bgimg={this.state.bgimg}/>
            </div>

        );
    }
}