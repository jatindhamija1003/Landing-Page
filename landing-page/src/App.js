import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
        <div className="logo_container">
          <img width='44' height='43' src='data:image/png;base64,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' />
        </div>
        <div className='menu_container'>
          <ul>
            <li>
              <a href='#' className='active'>Products</a>
            </li>
            <li>
              <a href='#' >Solution</a>
            </li>
            <li>
              <a href='#' >Price</a>
            </li>
            <li>
              <a href='#' >Contact_Us</a>
            </li>
          </ul>
        </div>
        <div className='btn-container'>
          <button className='btn'>Log In</button>
        </div>
      </nav>

      {/* Main Section */}
      <div className='content'>
        <div className='hero-text'>
          <p className='content-para'>Trusted by 2800+ companies</p>
          <h1>Find Your <span className='content-span'>Remote Job</span></h1>
          <h1>Easy And Fast</h1>
          <p className='content_para'>
            A platform where you can get your desired job.
          </p>
          <form>
            <input type='email' placeholder='Your Email Address' />
            <button type='submit' className='btn-sec'>Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
