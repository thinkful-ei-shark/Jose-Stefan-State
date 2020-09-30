import React from 'react';

class RoulleteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    componentDidMount() {
        // this.setState({
        //     random: randomNum
        // })
    }

    componentDidUpdate() {    }

    componentWillUnmount() { }

    handleClick=()=> {
        this.setState({
            spinningTheChamber : !this.state.spinningTheChamber
        })
        
        this.timeout = setTimeout(()=>{
            const randomNum = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomNum,
                spinningTheChamber: false
            })
        },2000)
        
     }

     handleShooting(){
         if(this.state.spinningTheChamber){
             return 'chamber and pulling the trigger! ...'
         }
        else if(this.state.chamber === this.props.bulletInChamber){
            return 'BANG! '
        }
        else{
            return 'You are safe!'
        }
     }

    render() {

        return (
        <div><p>{this.handleShooting()}</p>
                <button onClick={this.handleClick}>Trigger</button>
            </div>

        );
    }
}

export default RoulleteGun