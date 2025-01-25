function App() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-[26rem] gap-4 bg-white rounded-[1.8rem] p-[2.5rem] shadow-blue">
        <div className="heading flex flex-row items-center justify-center gap-4 font-bold">
          <img
            src="https://res.cloudinary.com/dx72ndl5e/image/upload/v1730431141/ulyehpdbamtysp1dfhsc.png"
            alt="To-Cedis logo"
            className="header-logo w-[2rem] h-[1.8rem] bg-black p- rounded-[50%]"
          />
          <header className=" flex items-center justify-center gap-4">
            Currency Converter
          </header>
        </div>
        <form action="#">
          <div className="amount">
            <p>Enter Amount</p>
            <input type="number" placeholder="1" id="to-amount" />
          </div>
          <div className="from-to-list flex flex-row items-center justify-center gap-[2rem]">
            <div className="from">
              <p>From</p>
              <div className="select-box">
                <img src="https://flagcdn.com/48x36/us.png" alt="flag" />
                <select name="" id="">
                  {/* we'll use js to populate this */}
                </select>
              </div>
            </div>
            <div className="exchange-icon">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="to">
              <p>To</p>
              <div className="select-box">
                <img src="https://flagcdn.com/48x36/gh.png" alt="flag" />
                <select name="" id="">
                  {/* we'll use js to populate this */}
                </select>
              </div>
            </div>
          </div>
          <div className="rates font-bold">Getting exchange rates...</div>
          <button className="rates-btn">Get Exchange Rates</button>
        </form>
      </div>
    </>
  );
}

export default App;
