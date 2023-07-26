import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="container">
        <div className="left-side">
            <p className="ex1">
                The CV that gets
                the job (done)</p>
            <p className="ex2 mb-28">Build a new CV in minutes or
                improve your existing one..</p>

            <div className='mb-6'>
            <Link to='/generator' className="button">Create your CV</Link>
            <button className="button">Upgrade your CV</button>
            </div>
            <p className="ex3">Templates to win recruiters over
                Wide selection of designs. Carefully optimised for clarity and impact.
                One click layouts - no formatting required.</p>
        </div>

        <div className="right-side">
            <img className="big-picture"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WcFnyRNiqxK1MUNn4-hy4jvsKHSWmdAAoQ&usqp=CAU"
                alt="Big Picture"/>
        </div>
    </div>
    );
};

export default Home;