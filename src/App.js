/*import ClassComponent from './ClassComponent'*/
/*import PropsExample from './PropsExample'*/
/*import Demo from './Demo'*/
/*import StateExample from './StateExample'*/
/*import FuncProps from './FuncProps'
import Events from './Events'
import JSX from './JSX'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
function App(){
  return(             
    <section className="mid">
   {/*<StateExample/>*/
    /*{<Events/>
    <JSX>
    <Demo name="somu"/>}
    <StateExample/>
    <FuncProps carname="benz" year="1998"/>}
    <PropsExample name="sowmya" age="21"/>
    <PropsExample name="siva" age="50"/>}
       <p>hello</p>
       <h1>how are you</h1>
       <ClassComponent/>
       <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"width="50%"alt="nature"/>*/}
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>

       </Routes>
       </BrowserRouter>

    </section>

    )
}
export default App