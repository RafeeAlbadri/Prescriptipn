import React,{Component} from 'React';
import ReactDOM from 'react-dom';
import Context from './context'
import Header from './haeder';
 

class App extends Component{
constructor(){
super()
this.state={


}

}
render(){
    return(
        <Context.Provider value={{ 
            state: this.state,
            actions: {
             
            }
            }}>
    
            
            <Header />
            
          </Context.Provider>

    )
}



}
ReactDOM.render(<App />, document.getElementById('root'))