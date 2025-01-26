function App() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-[26rem] gap-4 bg-white rounded-[1.8rem] p-[2.5rem] shadow-blue">
        <div className="heading flex flex-row items-center justify-center gap-4 font-bold">
          <img
            src="https://res.cloudinary.com/dx72ndl5e/image/upload/v1730431141/ulyehpdbamtysp1dfhsc.png"
            alt="To-Cedis logo"
            className="header-logo w-[2rem] h-[1.8rem] bg-black padding-logo rounded-[50%]"
          />
          <header className="font-clamped font-bold text-center flex items-center justify-center">
            Currency Converter
          </header>
        </div>
        <form action="#" className="margin-form">
          <div className="amount">
            <p className="form-p-clamped mb-[0.4rem]">Enter Amount</p>
            <input
              className="w-full h-[3rem] border-form-input padding-form-input form-input-clamped outline-none rounded-[1.1rem] transition-all ease-in-out duration-300 focus:border-input-focus padding-input-focus"
              type="number"
              placeholder="1000"
              value="1"
              id="to-amount"
            />
          </div>
          <div className="from-to-list flex flex-row items-center justify-between mt-[1.4rem]">
            <div className="from">
              <p className="form-p-clamped mb-[0.4rem]">From</p>
              <div className="select-box w-[7rem] h-[2.8rem] flex flex-row justify-center items-center border-select-box p-[0.4rem] rounded-[0.6rem]">
                <img
                  className="w-[2rem] cursor-default"
                  src="https://flagcdn.com/48x36/us.png"
                  alt="flag"
                />
                <select
                  className="w-auto select-font-clamped font-medium bg-none margin-select-box border-none outline-none rounded-[1.1rem] cursor-pointer transition-all ease-in-out duration-300"
                  name=""
                  id=""
                >
                  {/* we'll use js to populate this */}
                </select>
              </div>
            </div>
            <div className="exchange-icon cursor-pointer mt-[2.2rem] hover:transition-all hover:ease-in-out hover:duration-300 hover:cursor-pointer">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="to">
              <p className="form-p-clamped mb-[0.4rem]">To</p>
              <div className="select-box w-[7rem] h-[2.8rem] flex flex-row justify-center items-center border-select-box p-[0.4rem] rounded-[0.6rem]">
                <img
                  className="w-[2rem] cursor-default"
                  src="https://flagcdn.com/48x36/gh.png"
                  alt="flag"
                />
                <select
                  className="w-auto select-font-clamped font-medium bg-none margin-select-box border-none outline-none rounded-[1.1rem] cursor-pointer transition-all ease-in-out duration-300"
                  name=""
                  id=""
                >
                  {/* we'll use js to populate this */}
                </select>
              </div>
            </div>
          </div>
          <div className="rates mt-[1.4rem] rates-margin font-bold">
            Getting exchange rates...
          </div>
          <button className="rates-btn w-full h-[2.9rem] text-center rates-font-clamped font-medium bg-btn-blue text-white cursor-pointer border-none outline-none rounded-[1.1rem] transition-all ease-in-out duration-300 hover:bg-btn-purp hover:text-white hover:transition-all hover:ease-in-out hover:duration-300 hover:rounded-[1rem]">
            Get Exchange Rates
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
