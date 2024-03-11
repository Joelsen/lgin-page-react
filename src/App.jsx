
import './App.css'

function App() {
  

  return (
    <>
      <body>
    <section>
        <form>
            <h1>Start</h1>
            <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label for="">e-mail</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label for="">password</label>
            </div>
            <div className="forget">
                <label for=""><input type="checkbox" />Remember</label>
                <a href="#">I forgot the password</a>
            </div>
            <button>Start</button>
            <div className="register">
                <p>i don't have an account <a href="#">Register</a></p>
            </div>
        </form>
    </section>
</body>
    </>
  )
}

export default App
