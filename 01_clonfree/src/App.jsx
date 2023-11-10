import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  	return (
    	<div className="App">
			<div className='contenedor-principal'>
				<h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
				<Testimonio 
					nombre='Shawn Wang'
					pais='Singapur'
					imagen='shawn'
					cargo='Ingeniero de Software'
					empresa='Amazon'
					testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
				/>
				<Testimonio 
					nombre='Sarah Chima'
					pais='Nigeria'
					imagen='sarah'
					cargo='Ingeniera de Software'
					empresa='ChatDesk'
					testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
				/>
				<Testimonio 
					nombre='Emma Bostian'
					pais='Suecia'
					imagen='emma'
					cargo='Ingeniera de Software'
					empresa='Spotify'
					testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
				/>
			</div>
    	</div>
  	);
}

export default App;
