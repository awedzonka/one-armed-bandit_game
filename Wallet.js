class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletValue = () => _money;
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false

        }
        this.changeWallet = (value, type = "+") => {
            console.log(this.getWalletValue());
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") return  _money += value;
                else if (type === "-") {
                    return _money -= value;
                }
                else throw new Error ("Nieprawdiłowy typ działania")
            }
            else {
                throw new Error("Wpisz deklarowaną kwotę");
            }
        }
    }
}
// const wallet = new Wallet(100);
// export default Wallet;


