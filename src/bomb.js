import React from 'react';



class Bomb extends React.Component {
    state = {
        count: 0,
        word: ''
    }

    componentDidMount() {
        //console.log('componentDidMount')
      this.interval = setInterval(()=>{
        this.setState({
            count: this.state.count+1
        })
        if(this.state.count%2===0){
            this.setState({
                word: 'Tick'
            })
        }
        else if(this.state.count>=8){
            this.setState({
                word: 'BOOOM'
            })
            clearInterval(this.interval)
        }    
        else{
            this.setState({
                word: 'Tock'
            })
        }
        
      },1000)
      
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
      

    render() {
        return (
            <div>
                <p>{this.state.word}</p>
            </div>
        );
    }

    
}

export default Bomb