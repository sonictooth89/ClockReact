class Counter extends React.Component {
    state = {
        result: 1,
        ratio: 3,
      } 

    handleMultiplication = () => {
        this.setState((state)=> (
            {
                result: state.result * this.state.ratio
            }))
      }

      componentDidUpdate() {
        if (this.state.result > 1000 && this.state.ratio === 2) {
            this.setState({
                ratio: 0.5
            })
        } else if (this.state.result < 1 && this.state.ratio === 0.5) {
            this.setState ({
                ratio: 2
            })
        }
      }

    render() { 
        return (
            <div>
                <button onClick={this.handleMultiplication}>{`Pomnoz przez ${this.state.ratio}`}</button>
                <h1>Wynik: {this.state.result}</h1>
            </div>
        );
    }
}
 
ReactDOM.render(<Counter />, document.getElementById('root'))